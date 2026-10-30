---
2026 10 15 created
---

備份discord資料

兩個方法

# 方法1：跟discord官方申請備份
左下角齒輪 > 資料和隱私 > 請求我的資料 > 全部打勾 > 送出 (30天內會給資料)
給的資料是一堆 .json 檔，要用其他方式才能正常閱覽

# 方法2：使用工具備份
1.建立機器人
進入網頁 > 應用程式 > 新增應用程式 > 名稱:Private Server Backup > 建立
https://discord.com/developers/applications

2.把機器人 新增權限 & 加入指定伺服器
OAuth2 > URL Generator > 勾選 bot > 機器人權限 > 勾選 檢視頻道、讀取歷史訊息 > 複製最下面的URL，開新分頁貼上進入 > 選擇伺服器 > 繼續 > 授權

3.取得機器人的token(權杖)
機器人 > Message Content Intent > 開啟，下面勾選 檢視頻道、讀取歷史訊息
到上面 權杖(token) 把 權杖(token)複製貼到自己的筆記本(不要公開)

4.下載 DiscordChatExporter.win-x64.zip，解壓縮到資料夾內，開啟 DiscordChatExporter.exe，
把剛剛的權杖(token)貼到裡面按下一步就能挑選要備份的頻道群了
https://github.com/Tyrrrz/DiscordChatExporter/releases/tag/2.48

5.輸出格式為html，想要弄成md檔的話，貼到AI加工即可
