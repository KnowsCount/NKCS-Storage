/*
 * @Description: REACT 产品。小型库存管理系统，给学校做。
 * @Date: 2018-04-01 23:47:56
 * @Author: KnowsCount
 * @Github: https://github.com/KnowsCount/NKCS-Storage
 * @LastEditTime: 2020-11-21 16:09:59
 * @FilePath: /ManagingSystem/src/utils/webSessionUtils.js
 */
import request from '../utils/request';
import {message} from 'antd';
import {browserHistory} from 'dva/router';

const AUTH_API = `/api/auth`;

export function getCurrentUser() {
    let sessionStorage = window.sessionStorage;
    if (sessionStorage['userInfo']) {
        return JSON.parse(sessionStorage['userInfo']);
    }
    return {};
}

export async function fetchIsAuth(callback) {
    return request(`${AUTH_API}?authToken=${getCurrentUser()['authToken']}`)
        .then(data => callback(data.data.isAuth))
        .catch(e => console.log(e));
}

export function redirect() {
    message.error('去登录！');
    //browserHistory.push 可能会导致路由丢失，推荐使用 reduxRouter
    browserHistory.push('/');
    return null;
}

/*授权验证*/
export function requireAuth(nextState, replace) {
    const userInfo = sessionStorage.getItem('userInfo');
    if(!userInfo || userInfo=='null'){
        message.error('去登录！');
        replace('/');
    }
}
