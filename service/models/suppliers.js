/*
 * @Description: REACT 产品。小型库存管理系统，给学校做。
 * @Date: 2020-11-11 23:16:09
 * @Author: KnowsCount
 * @Github: https://github.com/KnowsCount/NKCS-Storage
 * @LastEditTime: 2020-11-19 23:43:29
 * @FilePath: /ManagingSystem/service/models/suppliers.js
 */

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let supplierSchema = new Schema({
    supplierName: String,
    contactPeople: String,
    contactPhone: String,
    address: String,
	payment: Number,
    mem: String,
    accountName: String,
    accountBank: String,
    accountNo: String,
	userId: String
});

/**
 *here can add same methods or statics
 */
supplierSchema.statics.findById = function (supplierId, cb) {
    return this.find({_id:supplierId}, cb);
};

module.exports = mongoose.model('Supplier', supplierSchema);