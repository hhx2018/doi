/***********************************

> 應用名稱：Fimo
> 軟件版本：3.0.0
> 下載地址：https://apps.apple.com/cn/app/id1454219307
> 腳本作者：Cuttlefish
> 微信賬號：墨魚手記
> 更新時間：2022-02-20
> 通知頻道：https://t.me/ddgksf2021
> 問題反饋：https://t.me/ddgksf2013_bot
> 特别說明：本腳本僅供學習交流使用，禁止轉載售賣
 
[rewrite_local]

# ～ Fimo解鎖會員權限（2022-02-20）@ddgksf2013
^https?:\/\/server\.yoyiapp\.com\/fimo-user\/user$ url script-response-body https://raw.gith

[mitm] 

hostname=server.yoyiapp.com

***********************************/


 

 
;var encode_version = 'jsjiami.com.v5', sdymj = '__0xd83fe',  __0xd83fe=['WcOmFsOWK8KsI8Kxw7Q=','54uK5p+K5Yy4772yRzbkvJblr4vmnY7lvITnq6/vvpbovK3orKXmlJvmjIfmiqTkubfnmZjltJXkvaY=','w7zDp8K2','5Ymb6Zuc54u05pyM5Y+V776AwonDmeS+v+Wuteaes+W+iueomA==','fFQfwodn','w4/CnSdawqo=','w71UwovCvsKF','w6NVw5fCjsKm','HcKBwp/DoGtww6ASXg==','wpHCpgdbAg==','54mv5pyI5YyF776hwrHCv+S8peWupOadk+W8jueqru++tui8huisnOaVo+aPouaKmOS5mueah+W2rOS9kg==','c1QVw6HDtw==','woltYVdM','ch0kJsOH','OT8JwqfDqA==','w5khwqvCvn4=','Z2Y1woJa','w4gIwoLCiMKG','SMO0w50JJA==','w4rCgsKtJ14=','Z1xqNzM=','ezbDlQ==','XFHDvilPW8KYwpsXwpFQwpTDv3w=','wp8RWcOhw4k1VQ==','QXXCkcOY','fXLDi3AkwonDhQ==','TVLCvMK5bCwO','wqhQXFJqwprCmcO0wpUaNMOAJ3s='];(function(_0x4f54c3,_0x273a45){var _0x301d1f=function(_0x1a10d0){while(--_0x1a10d0){_0x4f54c3['push'](_0x4f54c3['shift']());}};_0x301d1f(++_0x273a45);}(__0xd83fe,0x111));var _0x37cc=function(_0x36abbb,_0x2830e6){_0x36abbb=_0x36abbb-0x0;var _0xcfc875=__0xd83fe[_0x36abbb];if(_0x37cc['initialized']===undefined){(function(){var _0x30d4dc=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x240c02='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x30d4dc['atob']||(_0x30d4dc['atob']=function(_0x36c69e){var _0x202423=String(_0x36c69e)['replace'](/=+$/,'');for(var _0x2ab552=0x0,_0x124c8f,_0x375997,_0x55789a=0x0,_0x313eb8='';_0x375997=_0x202423['charAt'](_0x55789a++);~_0x375997&&(_0x124c8f=_0x2ab552%0x4?_0x124c8f*0x40+_0x375997:_0x375997,_0x2ab552++%0x4)?_0x313eb8+=String['fromCharCode'](0xff&_0x124c8f>>(-0x2*_0x2ab552&0x6)):0x0){_0x375997=_0x240c02['indexOf'](_0x375997);}return _0x313eb8;});}());var _0xb101ad=function(_0x4c813b,_0x480094){var _0xbf906b=[],_0x5660f1=0x0,_0x24a312,_0x4c8db4='',_0x53177d='';_0x4c813b=atob(_0x4c813b);for(var _0x508863=0x0,_0x3812cc=_0x4c813b['length'];_0x508863<_0x3812cc;_0x508863++){_0x53177d+='%'+('00'+_0x4c813b['charCodeAt'](_0x508863)['toString'](0x10))['slice'](-0x2);}_0x4c813b=decodeURIComponent(_0x53177d);for(var _0x115aee=0x0;_0x115aee<0x100;_0x115aee++){_0xbf906b[_0x115aee]=_0x115aee;}for(_0x115aee=0x0;_0x115aee<0x100;_0x115aee++){_0x5660f1=(_0x5660f1+_0xbf906b[_0x115aee]+_0x480094['charCodeAt'](_0x115aee%_0x480094['length']))%0x100;_0x24a312=_0xbf906b[_0x115aee];_0xbf906b[_0x115aee]=_0xbf906b[_0x5660f1];_0xbf906b[_0x5660f1]=_0x24a312;}_0x115aee=0x0;_0x5660f1=0x0;for(var _0x1afdcd=0x0;_0x1afdcd<_0x4c813b['length'];_0x1afdcd++){_0x115aee=(_0x115aee+0x1)%0x100;_0x5660f1=(_0x5660f1+_0xbf906b[_0x115aee])%0x100;_0x24a312=_0xbf906b[_0x115aee];_0xbf906b[_0x115aee]=_0xbf906b[_0x5660f1];_0xbf906b[_0x5660f1]=_0x24a312;_0x4c8db4+=String['fromCharCode'](_0x4c813b['charCodeAt'](_0x1afdcd)^_0xbf906b[(_0xbf906b[_0x115aee]+_0xbf906b[_0x5660f1])%0x100]);}return _0x4c8db4;};_0x37cc['rc4']=_0xb101ad;_0x37cc['data']={};_0x37cc['initialized']=!![];}var _0x525b66=_0x37cc['data'][_0x36abbb];if(_0x525b66===undefined){if(_0x37cc['once']===undefined){_0x37cc['once']=!![];}_0xcfc875=_0x37cc['rc4'](_0xcfc875,_0x2830e6);_0x37cc['data'][_0x36abbb]=_0xcfc875;}else{_0xcfc875=_0x525b66;}return _0xcfc875;};var url=$request[_0x37cc('0x0','PcTJ')];const vip=_0x37cc('0x1','zac6');if(url[_0x37cc('0x2','JTBI')](vip)!=-0x1){var body=$response[_0x37cc('0x3','Kba)')][_0x37cc('0x4','fo(%')](/forever":0/g,'forever\x22:1')[_0x37cc('0x5','7!%)')](/valid":false/g,'valid\x22:true');$done({'body':body});};(function(_0x30251c,_0x343c63,_0x5e927d){var _0x2101b0={'EarKj':function _0x26f921(_0x6e705f,_0x2876d7){return _0x6e705f!==_0x2876d7;},'HAODi':'qLu','SseAT':'ert','KNWlG':function _0x31a6af(_0x228fe2,_0x31e871){return _0x228fe2!==_0x31e871;},'ACqFr':function _0x3838f3(_0x17c583,_0x3fa283){return _0x17c583===_0x3fa283;},'EMWhf':_0x37cc('0x6','i)Eg'),'SvmEf':_0x37cc('0x7','MKyL'),'VprJk':function _0xc2e3de(_0x2c860a,_0x1261c4){return _0x2c860a===_0x1261c4;},'klIaD':_0x37cc('0x8','Joka'),'bmJKz':function _0x3a5c1c(_0xa08710,_0x19fbd4){return _0xa08710===_0x19fbd4;},'JliML':_0x37cc('0x9','KSV%'),'EwRuK':_0x37cc('0xa','G*61'),'HdbYs':function _0xd3e781(_0x212578,_0x38473c){return _0x212578+_0x38473c;}};_0x5e927d='al';try{if(_0x2101b0['EarKj'](_0x2101b0[_0x37cc('0xb','F&dd')],_0x2101b0[_0x37cc('0xc','8wK1')])){_0x5e927d+=_0x2101b0[_0x37cc('0xd','Q(DC')];_0x343c63=encode_version;if(!(_0x2101b0[_0x37cc('0xe','6SbE')](typeof _0x343c63,_0x37cc('0xf','ZUBU'))&&_0x2101b0['ACqFr'](_0x343c63,_0x2101b0[_0x37cc('0x10','D*ck')]))){_0x30251c[_0x5e927d]('删除'+_0x37cc('0x11','odq8'));}}else{_0x5e927d+=_0x2101b0[_0x37cc('0x12','x[zM')];_0x343c63=encode_version;if(!(_0x2101b0[_0x37cc('0x13','i)Eg')](typeof _0x343c63,_0x2101b0[_0x37cc('0x14','8#LY')])&&_0x2101b0[_0x37cc('0x15','H]lg')](_0x343c63,_0x2101b0[_0x37cc('0x16','7aO%')]))){_0x30251c[_0x5e927d]('删除'+_0x2101b0['klIaD']);}}}catch(_0x306e8b){if(_0x2101b0['bmJKz'](_0x2101b0['JliML'],'PRv')){_0x30251c[_0x5e927d](_0x2101b0['EwRuK']);}else{_0x5e927d='al';try{_0x5e927d+=_0x2101b0[_0x37cc('0x17','F&dd')];_0x343c63=encode_version;if(!(typeof _0x343c63!==_0x2101b0[_0x37cc('0x18','$V%z')]&&_0x2101b0[_0x37cc('0x19','tdem')](_0x343c63,_0x2101b0['EMWhf']))){_0x30251c[_0x5e927d](_0x2101b0[_0x37cc('0x1a','Joka')]('删除',_0x2101b0[_0x37cc('0x1b','pZ(K')]));}}catch(_0x4aa2c9){_0x30251c[_0x5e927d]('删除版本号，js会定期弹窗');}}}}(window));;encode_version = 'jsjiami.com.v5';