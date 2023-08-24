/*************************************

项目名称：CHD Edu Scan
脚本作者：zhacha222
**************************************

[rewrite_local]
^https?:\/\/ykt\.chd\.edu\.cn\/server\/consume\/scan url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/scan/chd_scan.js.js

[mitm]
hostname = ykt.chd.edu.cn

*************************************/


var chd_scan = JSON.parse($response.body);

chd_scan = {
   "success": true,
   "message": "成功",
   "resultData": {
       "type": "2"
   },
   "code": ""
};

$done({body : JSON.stringify(chd_scan)});
