/*
 * @Description: REACT 产品。小型库存管理系统，给学校做。
 * @Date: 2018-04-01 23:47:56
 * @Author: KnowsCount
 * @Github: https://github.com/KnowsCount/NKCS-Storage
 * @LastEditTime: 2020-11-24 11:35:33
 * @FilePath: /ManagingSystem/src/index.js
 *
 *                        _oo0oo_
 *                       o8888888o
 *                       88" . "88
 *                       (| -_- |)
 *                       0\  =  /0
 *                     ___/`---"\___
 *                   ." \\|     |// ".
 *                  / \\|||  :  |||// \
 *                 / _||||| -:- |||||- \
 *                |   | \\\  - /// |   |
 *                | \_|  ""\---/""  |_/ |
 *                \  .-\__  "-"  ___/-. /
 *              ___". ."  /--.--\  `. ."___
 *           ."" "<  `.___\_<|>_/___." >" "".
 *          | | :  `- \`.;`\ _ /`;.`/ - ` : | |
 *          \  \ `_.   \_ __\ /__ _/   .-` /  /
 *      =====`-.____`.___ \_____/___.-`___.-"=====
 *                        `=---="
 *
 *
 *      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 *
 *            佛祖保佑       永不宕机     永无BUG
 */

import "./index.html";
import "./index.less";
import dva from "dva";
import { browserHistory } from "dva/router";
import Home from "./models/home";
import Orders from "./models/orders";
import Stocks from "./models/stocks";
import Buy from "./models/buy";
import Manage from "./models/manage";
import systemUser from "./models/systemUser";
import Customers from "./models/customers";
import Products from "./models/products";
import Suppliers from "./models/suppliers";
import Settlement from "./models/settlement";
import Resource from "./models/resource";
import customerBills from "./models/customerBills";
import supplierBills from "./models/supplierBills";
import Router from "./router";

// 1. Initialize
const app = dva({
	history: browserHistory,
});

// 2. Plugins
//app.use({});

// 3. Model
app.model(Home);
app.model(Orders);
app.model(Stocks);
/*app.model(require("./models/storage"));*/
/*app.model(require("./models/funds"));*/
app.model(Buy);
app.model(Manage);
app.model(systemUser);
app.model(Customers);
app.model(Products);
app.model(Suppliers);
app.model(Settlement);
app.model(Resource);
app.model(customerBills);
app.model(supplierBills);

// 4. Router
app.router(Router);

// 5. Start
app.start("#root");
