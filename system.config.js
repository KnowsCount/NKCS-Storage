/*
 *                   江城子 . 程序员之歌
 *
 *               十年生死两茫茫，写程序，到天亮。
 *                   千行代码，Bug何处藏。
 *               纵使上线又怎样，朝令改，夕断肠。
 *
 *               领导每天新想法，天天改，日日忙。
 *                   相顾无言，惟有泪千行。
 *               每晚灯火阑珊处，夜难寐，加班狂。
 *
 *
 * @Description: REACT 产品。小型库存管理系统，给学校做。
 * @Date: 2018-04-01 23:47:56
 * @Author: KnowsCount
 * @Github: https://github.com/KnowsCount/NKCS-Storage
 * @LastEditTime: 2020-11-24 11:08:16
 * @FilePath: /ManagingSystem/system.config.js
 */

const debug = process.env.NODE_ENV == "development";
//服务器端口
const serverPort = "4000";

//服务器地址
//开发模式，服务器地址
const httpServerDev = "http://localhost:" + serverPort;
//跨域请求头配置
const defaultOptionsDev = {
	mode: "cors",
	credentials: "include",
	headers: {
		"content-type": "application/json",
	},
};

//部署模式，服务器地址
const httpServerPro = "";
//同域请求头配置
const defaultOptionsProd = {
	credentials: "same-origin",
	headers: {
		"content-type": "application/json",
	},
};

//数据库地址
//开发模式数据库地址
const mongooseConnectDev = "mongodb://localhost:27017/accountSystem";
//部署模式数据库地址
const mongooseConnectPro = "mongodb://localhost:27017/accountSystem";

//上传图片后返回的服务器地址
//可以在 ./service/routes/uploadProductImg.js 中对返回图片的路径进行拼接修改
const uploadImgServerDev = "localhost";
const uploadImgServerPro = "localhost";

module.exports = {
	httpServer: debug ? httpServerDev : httpServerPro,
	serverPort: serverPort,
	defaultOptions: debug ? defaultOptionsDev : defaultOptionsProd,
	mongooseConnect: debug ? mongooseConnectDev : mongooseConnectPro,
	uploadImgServer: debug ? uploadImgServerDev : uploadImgServerPro,
	//是否支持注册功能
	register: true,
};
