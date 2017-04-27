/**
 * Created by sea35 on 2017/4/27.
 */
'use strict';

//const integralHosts="http://172.16.33.167:8001";
const integralHosts="http://172.16.34.41:11010"//"http://172.16.34.41:9061"
const userHosts="http://172.16.34.41:9090"
/*const ranchHosts="http://172.16.34.41:9090"*/
const docHosts="http://172.16.34.41:9090"

const productHosts="http://172.16.34.41:9020"
const serviceHosts="http://172.16.34.41:9010"
const devidedHosts="http://172.16.34.41:9012"

const mock = {

    'POST /integral/(.*)': integralHosts,
    'POST /user/*': userHosts,
    /* 'POST /ranch/!*': ranchHosts,*/
    'POST /doc/*': docHosts,

    //商品管理，服务管理,设备管理,图片上传
    'POST /product/*':productHosts,
    'POST /service/*':serviceHosts,
    'POST /divided/*':devidedHosts,
    /* 图片上传格式
     该格式比较特殊，请勿随便更改，调用地址:http://8098.hc.dev.zoenet.cn/commons/ctrl-http/upload
     前端图片控件绑定如：action="/upload"
     */
    'POST /upload':'http://8098.hc.dev.zoenet.cn/commons/ctrl-http/',
}


module.exports = mock;
