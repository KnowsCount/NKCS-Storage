/*
 * @Description: REACT 产品。小型库存管理系统，给学校做。
 * @Date: 2018-04-01 23:47:56
 * @Author: KnowsCount
 * @Github: https://github.com/KnowsCount/NKCS-Storage
 * @LastEditTime: 2020-11-18 03:17:34
 * @FilePath: /ManagingSystem/src/router.js
 * 
 * _______________#########_______________________ 
 * ______________############_____________________ 
 * ______________#############____________________ 
 * _____________##__###########___________________ 
 * ____________###__######_#####__________________ 
 * ____________###_#######___####_________________ 
 * ___________###__##########_####________________ 
 * __________####__###########_####_______________ 
 * ________#####___###########__#####_____________ 
 * _______######___###_########___#####___________ 
 * _______#####___###___########___######_________ 
 * ______######___###__###########___######_______ 
 * _____######___####_##############__######______ 
 * ____#######__#####################_#######_____ 
 * ____#######__##############################____ 
 * ___#######__######_#################_#######___ 
 * ___#######__######_######_#########___######___ 
 * ___#######____##__######___######_____######___ 
 * ___#######________######____#####_____#####____ 
 * ____######________#####_____#####_____####_____ 
 * _____#####________####______#####_____###______ 
 * ______#####______;###________###______#________ 
 * ________##_______####________####______________ 
 */

import React, {PropTypes} from 'react';
import {Router, Route, IndexRoute, Link} from 'dva/router';
import HomePage from './routes/HomePage/HomePage';
import IndexPage from './routes/IndexPage/IndexPage';
import Orders from './routes/Orders/Orders';
import Storage from './routes/Storage/Storage';
import Stock from './routes/Stock/Stock';
import Funds from './routes/Funds/Funds';
import Resource from './routes/Resource/Resource';
import Settlement from './routes/Settlement/Settlement';
import Bills from './routes/Bills/Bills';
import CustomerBills from './routes/CustomerBills/CustomerBills';
import SupplierBills from './routes/SupplierBills/SupplierBills';
import Manage from './routes/Manage/Manage';
import Customers from './routes/Customers/Customers';
import Products from './routes/Products/Products';
import Suppliers from './routes/Suppliers/Suppliers';
import {requireAuth} from './utils/webSessionUtils';

export default function ({history}) {
    return (
        <Router history={history}>
            <Route path="/" component={HomePage}>

                <IndexRoute component={IndexPage}/>

                <Route path="/orders" onEnter={requireAuth} component={Orders}>
                    <Route path="/orders/*" onEnter={requireAuth} component={Orders}/>
                </Route>

                <Route path="/storage" onEnter={requireAuth} component={Storage}/>

               {/* <Route path="/stock" component={Stock}/>

                <Route path="/funds" component={Funds}/>*/}

                <Route path="/resource" onEnter={requireAuth} component={Resource}/>

				<Route path="/settlement" onEnter={requireAuth} component={Settlement}/>

				<Route path="/bills" onEnter={requireAuth} component={Bills}/>
				<Route component={Bills}>
					<Route path="/customerBills" onEnter={requireAuth} component={CustomerBills}/>
					<Route path="/supplierBills" onEnter={requireAuth} component={SupplierBills}/>
				</Route>

                <Route path="/manage" onEnter={requireAuth} component={Manage}/>

                <Route component={Manage}>
                    <Route path="/customer" onEnter={requireAuth} component={Customers}/>
                    <Route path="/product" onEnter={requireAuth} component={Products}/>
                    <Route path="/supplier" onEnter={requireAuth} component={Suppliers}/>
                </Route>

            </Route>
        </Router>
    );
};
