/*
 * @Description: REACT 产品。小型库存管理系统，给学校做。
 * @Date: 2020-11-11 23:16:09
 * @Author: KnowsCount
 * @Github: https://github.com/KnowsCount/NKCS-Storage
 * @LastEditTime: 2020-11-19 23:42:36
 * @FilePath: /ManagingSystem/service/models/orders.js
 */

let mongoose =  require('mongoose');
let Schema = mongoose.Schema;

let orderSchema = new Schema({
    createInstance: Date,
	sequence: Number,
    orderNumber: String,
    customerId: String,
    customerName: String,
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
orderSchema.statics.findByOrderId=function(orderId, cb){
    return this.find({_id:orderId}, cb);
};

module.exports = mongoose.model('Order', orderSchema);