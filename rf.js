/*

应用名称：RNI films
软件版本：3.0.5


[rewrite_local]

# ～ RNI解锁高级会员（20220212）@ddgksf2013
https://pro-status-service-prod.azurewebsites.net/api/item url script-response-body https://raw.rf.js

[mitm] 

hostname=pro-status-service-prod.azurewebsites.net

*/



var ddgksf2013 = JSON.parse($response.body);
ddgksf2013.FilmsProStatus = 1
ddgksf2013.AeroProStatus = 1
$done({body: JSON.stringify(ddgksf2013)});