import re


def on_page_markdown(markdown, **kwargs):
    lines = markdown.splitlines(keepends=True)
    result = []
    code_fence = None
    blank_lines = []

    def flush():
        if blank_lines:
            result.append("\n" * (len(blank_lines) + 1))
            result.append("<br>\n\n" * len(blank_lines))
            blank_lines.clear()

    for line in lines:
        stripped = line.strip()

        fence = re.match(r"^(`{3,}|~{3,})", stripped)

        if fence:
            flush()

            marker = fence.group(1)[0]
            if code_fence is None:
                code_fence = marker
            elif code_fence == marker:
                code_fence = None

            result.append(line)
            continue

        if code_fence is not None:
            result.append(line)
        elif not stripped:
            blank_lines.append(line)
        else:
            flush()
            result.append(line)

    flush()
    return "".join(result)
