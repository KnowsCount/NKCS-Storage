/*
 * @Description: REACT 产品。小型库存管理系统，给学校做。
 * @Date: 2020-11-11 23:16:09
 * @Author: KnowsCount
 * @Github: https://github.com/KnowsCount/NKCS-Storage
 * @LastEditTime: 2020-11-19 23:44:28
 * @FilePath: /ManagingSystem/service/utils/utils.js
 */

function getAuthToken(len) {
	let tokenStr = "0123456789abcdefghijklmnopqrstuvwxy";
	let token = "";
	for (let i = 0; i < len; i++) {
		token += tokenStr[Math.floor(Math.random() * tokenStr.length)];
	}
	return token;
}

function getOrderNumber(number) {
	return getNumber("MDC", number);
}

function getNoteNumber(number) {
	return getNumber("MDS", number);
}

function getNumber(prefix, number) {
	let date = new Date();
	let year = date.getFullYear();
	let month = prefixO(date.getMonth() + 1);
	let day = prefixO(date.getDate());
	return prefix + year + month + day + prefixOOO(number);
}

function prefixO(number) {
	return ("0" + number).substr(-2);
}

function prefixOOO(number) {
	return ("000" + number).substr(-4);
}

module.exports = {
	getAuthToken: getAuthToken,
	getOrderNumber: getOrderNumber,
	getNoteNumber: getNoteNumber,
};
