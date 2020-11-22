/*
 * @Description: REACT 产品。小型库存管理系统，给学校做。
 * @Date: 2020-11-11 23:16:09
 * @Author: KnowsCount
 * @Github: https://github.com/KnowsCount/NKCS-Storage
 * @LastEditTime: 2020-11-19 23:42:07
 * @FilePath: /ManagingSystem/service/models/settlement.js
 */
let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let settlementSchema = new Schema({
	createInstance: Date,
	userId: String,
	userName: String,
	settlementAmount: Number,
	products: Array,
	userId: String,
});

/**
 *here can add same methods or statics
 */
/*settlementSchema.statics.findByOrderId=function(orderId, cb){
    return this.find({_id:orderId}, cb);
};*/

module.exports = mongoose.model("Settlement", settlementSchema);
