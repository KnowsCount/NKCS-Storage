<h1 align="center">📦 NKCS Storage Management System</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-v19112020-blue.svg?cacheSeconds=2592000" />
  <img alt="Database" src="https://img.shields.io/badge/database-MongoDB-lightgrey" />
  <img alt="Database" src="https://img.shields.io/badge/framework-dva-orange" />
</p>



> REACT 产品。小型库存管理系统，给 NKCS 开发。

<center><img alt="image" src="./src/assets/homepage.png" style="zoom:20%" /></center>

---

### 🛠 技术之使用

- 前端技术：React + React-Router + Redux + React-Redux + Redux-Saga + Webpack
- 前端脚手架：dva
- UI 组件库：ant-design
- 数据库：mongodb

*御用后端技术：Express + Mongoose*

配色：

<p style="color:#a82831;">-（NKCS 红）#a82831</p>

---

### ✔️ 已实现功能
1. 登录注册功能**（有问题）**
2. 基础数据管理功能，包括：
    1. 客户管理
    2. 商品管理
    3. 供应商管理
3. 订单及进货单管理功能，包括：
    1. 订单管理
    2. 入库管理
4. 物资管理功能
5. 结算管理功能
6. 账单管理功能，包括：
    1. 客户对账管理
    2. 供应商对账管理

---

### 🗃 豫先须准备

1. 安装 MongoDB 并正确启动
2. 全局安装 pm2： `npm install -g pm2`
3. 安装前端依赖包 `npm install`
4. 因为采用前后端分离模式开发，如果要在开发模式运行则执行以下命令：
    - 启动 node server 开发服务 `npm run start:dev`
    - 启动前端 dev server `npm start`
5. 如果以发布模式运行则执行以下命令：
    - 前端资源打包 `npm run build    `
    - 启动 node server 部署服务 `npm run start:prod`

---

以上内容供健忘的我参考。¯\\_(ツ)\_/¯

