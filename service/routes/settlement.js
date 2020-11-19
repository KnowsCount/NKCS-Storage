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
let Settlement = require('../models/settlement');
let constants = require('../constants/constants');

router.route('/')
    .get((req, res, next)=>{
        let {page, productName}=req.query;
        let limit = constants.PAGE_SIZE;
        let skip = (page - 1) * limit;
		let currentUser = req.session.userInfo;
        let queryCondition = {
        	userId: currentUser['_id']
		};
        if(productName){
			queryCondition['productName'] = new RegExp(productName);
		}
		Settlement.count(queryCondition, (err, count)=>{
			Settlement.find(queryCondition)
                .limit(limit)
                .skip(skip)
                .exec((err, settlements)=>{
                    if(err){
                        res.send({
                            success: false,
                            error: err
                        });
                    }else {
                        res.send({
                            success: true,
                            settlements: settlements,
                            page: {
                                total: count,
                                current: page
                            }
                        });
                    }
                });
        });
    });

router.route('/:settlementId')
    .get((req, res, next)=>{
        let settlementId = req.params.settlementId;
		Settlement.find({_id:settlementId},(err, settlement)=>{
			if(err) {
				res.send({
					success: false,
					error: err
				});
			}else {
				console
				res.send({
					success: true,
					settlementItems: settlement[0].products
				});
			}
		});
    });

module.exports = router;
