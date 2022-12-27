/***********************************

> 應用名稱：小打卡(微信小程序)
> 軟件版本：0.0.0
> 下載地址：微信小程序搜索小打卡

 
[rewrite_local]

# ～ 小打卡(微信小程序)解鎖會員權限（2022-03-12）@ddgksf2013
^https?:\/\/uranus\.sharedaka\.com\/api\/v3\/user\/info\/get url script-response-body https://github.ca.js

[mitm] 

hostname=uranus.sharedaka.com

***********************************/





var cuttlefish ={"warning":"本腳本僅供學習交流使用，禁止轉載售賣","tgchannel":"https://t.me/ddgksf2021","feedback":"https://t.me/ddgksf2013_bot"}
let obj = JSON.parse($response.body);
obj.data.endTime = 1867996357000;
obj.data.hasOpenedMember = true;
$done({body: JSON.stringify(obj)});
