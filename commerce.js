/***********************************
> 應用名稱：醒图&Ulike&轻颜相机&vaporcam
> 軟件版本：0.0.0

[rewrite_local]
  
# ～ 醒图&Ulike&轻颜相机&vaporcam（四合一）解鎖會員權限（2022-05-09）@ddgksf2013
https://(commerce-.*api|pay).(faceu|wecut).(com|mobi)/(commerce|apple)/(iosAppVerifyReceipt.php|v1/subscription/user_info) url script-response-body https:merce.js

[mitm] 
hostname=commerce-i18n-api.faceu.mobi,commerce-api.faceu.mobi, pay.wecut.com

***********************************/


const path1 = "/commerce/v1/subscription/user_info";
const path2 = "/apple/iosAppVerifyReceipt.php";

let ddgksf2013 = JSON.parse($response.body);

if ($request.url.indexOf(path1) != -1)
{
     if(ddgksf2013.response){
           var tmp = JSON.parse(ddgksf2013.response);
           tmp.start_time = 1584674770;
           tmp.end_time = 4077660370;
           tmp.is_cancel_subscribe = false;
           tmp.subscribe_type = "auto";
           tmp.flag = true;
           tmp.cycle_unit = "12";
           ddgksf2013.response =  JSON.stringify(tmp);  
     }
    ddgksf2013.data.start_time = 1584674770;
    ddgksf2013.data.end_time = 4077660370;
    ddgksf2013.data.is_cancel_subscribe = false;
    ddgksf2013.data.subscribe_type = "auto";
    ddgksf2013.data.flag = true;
    ddgksf2013.data.cycle_unit = "12";
}
if ($request.url.indexOf(path2) != -1)
{
   ddgksf2013.data = {"isValid": 1,"expiresTs": 4077660370}
}
$done({body: JSON.stringify(ddgksf2013)});
