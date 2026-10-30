2023 04 23 created in Discord (FF14)
2026 10 25 move from Discord (FF14)

巨集 heal 自動指定復活

heal - 自動指定 無詠唱 + 復活
按這顆鍵 = 依照 tank > heal > dps 的順序，使用 無詠唱 > 復活
如果是 別的復活技能，把 "Resurrection" 改成 其他復活技能名稱 即可

/micon "Resurrection" 
/merror off
/ac "Swiftcast" <me> <wait.2>
/ac "Resurrection" <t>
/ac "Resurrection" <1>
/ac "Resurrection" <2>
/ac "Resurrection" <3>
/ac "Resurrection" <4>
/ac "Resurrection" <5>
/ac "Resurrection" <6>
/ac "Resurrection" <7>
/ac "Resurrection" <8>


來源：留言 https://www.youtube.com/watch?v=57F70wOh_18
