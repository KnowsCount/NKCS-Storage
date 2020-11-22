/*
 * @Description: REACT 产品。小型库存管理系统，给学校做。
 * @Date: 2020-11-11 23:16:09
 * @Author: KnowsCount
 * @Github: https://github.com/KnowsCount/NKCS-Storage
 * @LastEditTime: 2020-11-19 23:45:20
 * @FilePath: /ManagingSystem/service/routes/auth.js
 */

let express = require("express");
let router = express.Router();

router.route("/").get(function (req, res, next) {
	let currentUser = req.session.userInfo;
	if (currentUser && currentUser._id && currentUser.username) {
		res.send({
			isAuth: true,
		});
	} else {
		res.send({
			isAuth: false,
		});
	}
});

module.exports = router;
