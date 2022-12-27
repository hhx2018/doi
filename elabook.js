/***********************************

> 應用名稱：咿啦看書
> 軟件版本：2.8.5
> 下載地址：https://apps.apple.com/cn/app/id1176775033

[rewrite_local]

# ～ 咿啦看書解鎖會員權限（2022-02-17）@
https?:\/\/bookapi\.ellabook\.cn\/rest\/api\/service$ url script-response-body https://raw.githubusercontent.c

[mitm] 

hostname=bookapi.ellabook.cn

***********************************/





body = $response.body.replace(/ip":"NO"/g, "ip\":\"YES\"")
                     .replace(/ip":"VIP_NO"/g, "ip\":\"VIP_YES\"")
                     .replace(/code":"\d{10}/g, "code\":\"0x00000000")
                     .replace(/status":"\d/g, "status\":\"1");
$done({body});
