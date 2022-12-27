/***********************************

> 應用名稱：漫画台Lite(微信小程序)
> 軟件版本：0.0.0
> 下載地址：微信小程序搜索漫画台Lite

 
[rewrite_local]

# ～ 漫画台Lite(微信小程序)解鎖會員權限（2022-03-11）@ddgksf2013
^https?:\/\/comic\.321mh\.com\/app_api\/v\d\/getcomicinfo_body url script-response-body hilite.js

[mitm] 

hostname=comic.321mh.com

***********************************/


var cuttlefish ={"warning":"賣","tgchannel":"https://t","feedback":"htbot"}
var body = $response.body.replace(/price":\d+/g,'price":0')
$done({ body });

