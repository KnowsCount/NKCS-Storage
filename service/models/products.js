/*
 * @Description: REACT 产品。小型库存管理系统，给学校做。
 * @Date: 2020-11-11 23:16:09
 * @Author: KnowsCount
 * @Github: https://github.com/KnowsCount/NKCS-Storage
 * @LastEditTime: 2020-11-19 23:43:39
 * @FilePath: /ManagingSystem/service/models/products.js
 */

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let productSchema = new Schema({
	productCode: String,
	productName: String,
	productType: String,
	productUnit: String,
	productImg: String,
	userId: String
});

/**
 *here can add same methods or statics
 */
productSchema.statics.findById = function (supplierId, cb) {
    return this.find({_id:supplierId}, cb);
};

module.exports = mongoose.model('Product', productSchema);