function updateSidebarTitle() {
  const sidebar = document.querySelector('.md-sidebar--primary')
  const active = sidebar?.querySelector('.md-nav__link--active')
  const title = sidebar?.querySelector(
    '.md-sidebar__inner > .md-nav > .md-nav__title'
  )

  if (!active || !title) return

  let item = active.closest('.md-nav__item')
  const path = []

  while (item) {
    const label = item.querySelector(
      ':scope > .md-nav__link, :scope > label.md-nav__link'
    )

    if (label) path.unshift(label.textContent.trim())

    item = item.parentElement?.closest('.md-nav__item')
  }

  if (path.length) {
    title.textContent = path.join(' / ')
  }
}

if (typeof document$ !== 'undefined') {
  document$.subscribe(updateSidebarTitle)
} else {
  document.addEventListener('DOMContentLoaded', updateSidebarTitle)
}
