/*
 * @Description: REACT 产品。小型库存管理系统，给学校做。
 * @Date: 2020-11-11 23:16:09
 * @Author: KnowsCount
 * @Github: https://github.com/KnowsCount/NKCS-Storage
 * @LastEditTime: 2020-11-19 23:42:23
 * @FilePath: /ManagingSystem/service/models/productStocks.js
 */

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let productStocksSchema = new Schema({
	productId: String,
	productName: String,
	quantity: String,
	price: Number,
	amount: Number,
	productUnit: String,
	type: String,
	userId: String
});

/**
 *here can add same methods or statics
 */
productStocksSchema.statics.findById = function (productId, cb) {
    return this.find({productId:productId}, cb);
};

module.exports = mongoose.model('ProductStocks', productStocksSchema);