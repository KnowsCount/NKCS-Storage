/*
 * @Description: REACT 产品。小型库存管理系统，给学校做。
 * @Date: 2020-11-11 23:16:09
 * @Author: KnowsCount
 * @Github: https://github.com/KnowsCount/NKCS-Storage
 * @LastEditTime: 2020-11-19 23:43:22
 * @FilePath: /ManagingSystem/service/models/user.js
 */

let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let userSchema = new Schema({
	username: String,
	password: String,
	salt: String,
	admin: Boolean,
});

/**
 *here can add same methods or statics
 */
userSchema.statics.findByUserName = function (username, cb) {
	return this.find({ username: new RegExp(username, "i") }, cb);
};

module.exports = mongoose.model("User", userSchema);
