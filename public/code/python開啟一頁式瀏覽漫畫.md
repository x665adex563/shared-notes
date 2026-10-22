---
2025 12 21 created in OneNote
2026 10 13 moved from OneNote
2026 10 13 補充完整版Github連結
---

完整版
https://github.com/x665adex563/comic_library_viewer

#python #網頁開啟圖片 #一頁式瀏覽

1.官網下載 Windows Installer (64-bit)。
https://www.python.org/downloads/windows/
2.安裝前記得勾選 Add Python 3.x to PATH，才能在小黑窗執行 python
3.安裝完成後，開啟 "cmd" 輸入 python --version，會跳出版本 就是成功安裝

4.到自己要瀏覽圖片的資料夾建立一個 文件夾，檔名改成 .py。
資料夾不要放在會被保護的地方，反正執行python有跳出防毒就去解鎖，解鎖沒用的話，先把資料夾丟桌面

5.對這個檔案右鍵 > 內容 > 改開啟方式 > 找路徑 >
C:\Users\你的使用者\AppData\Local\Programs\Python\Python3x\pythonw.exe

6.右鍵 > 開啟檔案 > 用筆記本 或 python 開啟編輯，把下面的內容貼進去後，點兩下就會自動開啟網頁瀏覽圖片了

7.如果想打包成 .exe 檔的話，打開 cmd，輸入 cd 你的檔案位置
輸入 pyinstaller --onefile --noconsole 檔案名稱.py  (檔名不可以有空白鍵)
他就會自動輸出到 dist資料夾裡，就有 .exe 檔了
--onefile → 生成單一 exe 檔
--noconsole → 執行時不顯示小黑窗


import os

# 設定漫畫資料夾
folder = os.getcwd()  # 當前資料夾

# 確保資料夾存在
if not os.path.exists(folder):
    os.makedirs(folder)

html_file = os.path.join(folder, "index.html")

files = sorted(os.listdir(folder))

with open(html_file, "w", encoding="utf-8") as f:
    f.write("""<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>漫畫瀏覽</title>
<style>
body { margin: 0; background: #000; text-align: center; }
img { display: block; width: 100%; max-width: 800px; margin: 0 auto; margin-bottom: 10px; }
</style>
</head>
<body>
""")

    for file in files:
        if file.lower().endswith((".jpg", ".jpeg", ".png", ".webp")):
            f.write(f'<img data-src="{file}" class="lazy">\n')

    f.write("""
<script>
const lazyImages = document.querySelectorAll('img.lazy');
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      const img = entry.target;
      img.src = img.dataset.src;
      img.classList.remove('lazy');
      observer.unobserve(img);
    }
  });
},{rootMargin:"200px 0px"});
lazyImages.forEach(img => observer.observe(img));
</script>
</body>
</html>""")

print("生成完成！打開 index.html 就可以滾動瀏覽漫畫了。")

# 自動打開瀏覽器
import webbrowser
webbrowser.open(os.path.join(folder, "index.html"))
