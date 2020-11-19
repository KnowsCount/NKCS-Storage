/*
 * @Description: REACT 产品。小型库存管理系统，给学校做。
 * @Date: 2020-11-11 23:16:09
 * @Author: KnowsCount
 * @Github: https://github.com/KnowsCount/NKCS-Storage
 * @LastEditTime: 2020-11-19 23:41:58
 * @FilePath: /ManagingSystem/service/models/storage.js
 */
let mongoose =  require('mongoose');
let Schema = mongoose.Schema;

let storageSchema = new Schema({
	createInstance: Date,
	sequence: Number,
	noteNumber: String,
	supplierId: String,
	supplierName: String,
	totalAmount: Number,
	paymentAmount: Number,
	debtAmount: Number,
	mem: String,
	products: Array,
	userId: String
});

/**
 *here can add same methods or statics
 */
storageSchema.statics.findByStorageId=function(storageId, cb){
    return this.find({_id:storageId}, cb);
};

module.exports = mongoose.model('Storage', storageSchema);