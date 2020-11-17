/*
 * @Description: REACT 产品。小型库存管理系统，给学校做。
 * @Date: 2018-04-01 23:47:56
 * @Author: KnowsCount
 * @Github: https://github.com/KnowsCount/NKCS-Storage
 * @LastEditTime: 2020-11-18 03:17:09
 * @FilePath: /ManagingSystem/src/index.js
 * 
 *                        _oo0oo_
 *                       o8888888o
 *                       88" . "88
 *                       (| -_- |)
 *                       0\  =  /0
 *                     ___/`---'\___
 *                   .' \\|     |// '.
 *                  / \\|||  :  |||// \
 *                 / _||||| -:- |||||- \
 *                |   | \\\  - /// |   |
 *                | \_|  ''\---/''  |_/ |
 *                \  .-\__  '-'  ___/-. /
 *              ___'. .'  /--.--\  `. .'___
 *           ."" '<  `.___\_<|>_/___.' >' "".
 *          | | :  `- \`.;`\ _ /`;.`/ - ` : | |
 *          \  \ `_.   \_ __\ /__ _/   .-` /  /
 *      =====`-.____`.___ \_____/___.-`___.-'=====
 *                        `=---='
 * 
 * 
 *      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * 
 *            佛祖保佑       永不宕机     永无BUG
 */

import './index.html';
import './index.less';
import dva from 'dva';
import {browserHistory} from 'dva/router';

// 1. Initialize
const app = dva({
	history: browserHistory
});

// 2. Plugins
//app.use({});

// 3. Model
app.model(require('./models/home'));
app.model(require('./models/orders'));
/*app.model(require('./models/stocks'));*/
app.model(require('./models/storage'));
/*app.model(require('./models/funds'));*/
app.model(require('./models/manage'));
app.model(require('./models/systemUser'));
app.model(require('./models/customers'));
app.model(require('./models/products'));
app.model(require('./models/suppliers'));
app.model(require('./models/settlement'));
app.model(require('./models/resource'));
app.model(require('./models/customerBills'));
app.model(require('./models/supplierBills'));

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
