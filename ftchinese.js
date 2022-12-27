/***********************************

> 應用名稱：FT中文網
> 軟件版本：6.11.45

[rewrite_local]

# ～ FT中文網解鎖會員權限（2022-03-06）@ddgksf2013
^https?:\/\/user\.ftmailbox\.cn\/ios-receipt-validation\.php.* url script-response-body https://ra

[mitm] 

hostname=user.ftmailbox.cn

***********************************/






















$done({body: JSON.stringify({environment:"Production",receipt:{in_app:[{quantity:"1",product_id:"com.ft.ftchinese.mobile.subscription.vip",expires_date:"2023-04-02 22:22:22 Etc/GMT",expires_date_ms:"1680465780000",expires_date_pst:"2023-04-02 22:22:22 America/Los_Angeles",in_app_ownership_type:"PURCHASED"}]},latest_receipt_info:[{quantity:"1",product_id:"com.ft.ftchinese.mobile.subscription.vip",expires_date:"2023-04-02 22:22:22 Etc/GMT",expires_date_ms:"1680465780000",expires_date_pst:"2023-04-02 22:22:22 America/Los_Angeles",in_app_ownership_type:"PURCHASED"}],latest_receipt:"NA",pending_renewal_info:[{auto_renew_product_id:"com.ft.ftchinese.mobile.subscription.vip",product_id:"com.ft.ftchinese.mobile.subscription.vip",auto_renew_status:"0"}],status:0})});