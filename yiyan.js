/***********************************

> 應用名稱：一言
> 軟件版本：4.13
> 下載地址：https://apps.apple.com/us/app/id1010174792

 
[rewrite_local]

# ～ 一言解锁会员权限（2022-07-21）@ddgksf2013
^https:\/\/app\.yiyan\.art\/yiyan\/ url script-response-body https://ran.js

[mitm] 

hostname=app.yiyan.art

***********************************/
var body = $response.body.replace(/viptype":"1"/g, 'viptype":"4"')
$done({ body });
