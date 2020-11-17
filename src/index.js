/*
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
 * @Author: your name
 * @Date: 20
 * 
 * 8-04-01 23:47:56
 * @LastEditTime: 2020-11-14 16:46:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ManagingSystem/src/index.js
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
