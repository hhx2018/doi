/*
*/
var body = $response.body.replace(/"academic":false/g, '"academic":true').replace(/"name":"basic"/g, '"name":"business"').replace(/trial":false/g, 'trial":true');
$done({ body });
