/*
*/
var body = $response.body.replace(/listAd":"1/g, 'listAd":"0').replace(/AdId":"[^"]*"/g, 'AdId":""').replace(/adid":"[^"]*"/g, 'adid":""');
$done({ body });
