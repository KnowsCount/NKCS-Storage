/*
 * @Description: REACT 产品。小型库存管理系统，给学校做。
 * @Date: 2020-11-11 23:16:09
 * @Author: KnowsCount
 * @Github: https://github.com/KnowsCount/NKCS-Storage
 * @LastEditTime: 2020-11-19 23:44:48
 * @FilePath: /ManagingSystem/service/routes/auth.js
 */
let express = require('express');
let router = express.Router();
let ProductStocks = require('../models/productStocks');

router.route('/')
    .get((req, res, next)=>{
		let currentUser = req.session.userInfo;
		let queryCondition = {
			userId: currentUser['_id'],
			type:'in'
		};
		ProductStocks.find(queryCondition,(err, productStocks)=>{
			if(err){
				res.send({
					success: false,
					error: err
				});
			}else {
				let productDuplicates = [];
				let products = [];
				productStocks.map(product=> {
					if(productDuplicates.indexOf(product['productId'])==-1){
						let newProduct = {
							_id: product['productId'],
							productName: product['productName'],
							productUnit: product['productUnit'],
						};
						productDuplicates.push(product['productId']);
						products.push(newProduct);
					}
				});
				res.send({
					success: true,
					products: products
				});
			}
		});
    });

module.exports = router;
