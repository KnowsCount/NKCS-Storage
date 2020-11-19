/*
 * @Description: REACT 产品。小型库存管理系统，给学校做。
 * @Date: 2020-11-11 23:16:09
 * @Author: KnowsCount
 * @Github: https://github.com/KnowsCount/NKCS-Storage
 * @LastEditTime: 2020-11-19 23:43:04
 * @FilePath: /ManagingSystem/service/models/customers.js
 */

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let customerSchema = new Schema({
    customerName: String,
    contactPeople: String,
    contactPhone: String,
    address: String,
    mem: String,
    accountName: String,
    accountBank: String,
    accountNo: String,
	userId: String
});

/**
 *here can add same methods or statics
 */
customerSchema.statics.findById = function (customerId, cb) {
    return this.find({_id:customerId}, cb);
};

module.exports = mongoose.model('Customer', customerSchema);