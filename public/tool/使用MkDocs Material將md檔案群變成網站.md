---
2026 10 14 created
---

使用 MkDocs Material 和 Github 將 md檔案群 變成 網站

## 說明
1.只有 "公開的github倉庫" 才能夠創建網站，如果只想分享部分內容，請額外創一個分享用的倉庫

2.免費的網站，永久存在

3.發布網站大小上限為 1 GB，每月軟性流量限制(訪客總下載資料量)為 100 GB

## 前置
0.專案可以叫做 shared-notes，自己新增一個 shared-notes 的資料夾即可

1.確認 python, pip 版本
開啟終端機，輸入
python --version
py -m pip --version

2.安裝 MkDocs Material
py -m pip install mkdocs-material
確認版本
py -m mkdocs --version

3.在 分享資料夾 的 根目錄 裡新創一個 public 資料夾 (要公開的資料丟裡面)

4.在 public 資料夾裡，新建一個 index.md 檔案，內容是 (沒有index頁面的話，進來會404)
```md
# My Notes

歡迎來到我的筆記網站！
```

5.手動建立檔案 mkdocs.yml 放在根目錄，內容寫(設定主題、中文介面、側邊導覽、搜尋功能)
注意：site_url: https://帳號名稱.github.io/專案名稱/ 要手動填寫正確名稱 !!!
```yml
site_name: My Notes
site_url: https://帳號名稱.github.io/專案名稱/

theme:
  name: material
  language: zh-TW
  features:
    - navigation.sections
    - navigation.expand
    - search.suggest

docs_dir: public

plugins:
  - search

markdown_extensions:
  - admonition
  - tables
  - toc:
      permalink: true
```

## 設定本地網站測試
1.進入檔案資料夾
cd C:\Users\knight\Desktop\專案名稱

2.啟動本地網站 看結果 (Ctrl+C可以停止執行)
py -m mkdocs serve

## 設定Github倉庫
1.終端機輸入
git init
git add .
git commit -m "chore(init): initialize 專案名稱 project"

2.在 Github 上手動建立倉庫後
綁定倉庫
git remote add origin https://github.com/帳號名稱/專案名稱.git
確認成功
git remote -v
確認分支為main
git branch -M main
推上去
git push -u origin main
確認成功推上去，狀態乾淨
git status

## 啟用Github Pages(用Github開啟網站)
1.在終端機輸入，建立專用分支&網站內容
py -m mkdocs gh-deploy
2.開啟 GitHub 上的 專案名稱 倉庫。
3.點選 Settings。
4.左側選單找到 Pages。
5.在 Build and deployment 的 Source 選擇 Deploy from a branch。
6.Branch 選擇 gh-pages，資料夾選擇 /(root)。
7.按下 Save。

開啟網頁輸入，就能開啟網站了
https://帳號名稱.github.io/專案名稱/

## 更改公開的資料 & 上傳
手動把自己要公開的資料丟到 專案名稱\public 後

開啟終端機
進入自己的檔案
cd 自己的檔案路徑
更新資料
py -m mkdocs gh-deploy
