/*
 * @Description: REACT 产品。小型库存管理系统，给学校做。
 * @Date: 2018-04-01 23:47:56
 * @Author: KnowsCount
 * @Github: https://github.com/KnowsCount/NKCS-Storage
 * @LastEditTime: 2020-11-19 23:26:03
 * @FilePath: /ManagingSystem/src/routes/IndexPage/IndexPage.js
 */
import React, { Component, PropTypes } from "react";
import { connect } from "dva";
import { Link } from "dva/router";
import { normal, title, welcome, list } from "./index.css";

function IndexPage() {
	return (
		<div className={normal}>
			<h1 className={title}>欢迎来到 NKCS 库存管理系统</h1>
			<div className={welcome} />
			{/*<ul className={list}>
				<li>To get started, edit <code>src/index.js</code> and save to reload.</li>
				<li><a href="https://github.com/dvajs/dva-docs/blob/master/v1/en-us/getting-started.md" target="_blank">Getting
					Started</a></li>
			</ul>*/}
		</div>
	);
}

IndexPage.propTypes = {};

export default connect()(IndexPage);
