import React, { Component, PropTypes } from "react";
import { Button } from "antd";
import { message } from "antd";
import AddSupplierTitle from "../SupplierCommon/SupplierTitle/SupplierTitle";
import AddSupplierForm from "../SupplierCommon/SupplierForm/SupplierForm";
import { connect } from "dva";
import {
	addSupplier,
	supplierWrapper,
	buttonGroup,
	confirmButton,
	cancelButton,
} from "./index.css";

class AddSupplier extends Component {
	constructor(props) {
		super(props);
		this.handleConfirm = this.handleConfirm.bind(this);
		this.handleCancel = this.handleCancel.bind(this);
	}

	handleConfirm() {
		/**
		 * 数据保存前，做数据校验,
		 * 所有数据均为必填项，包括：客户名称，联系人，联系方式，地址
		 */
		let { onConfirm } = this.props;
		this.refs.addSupplierForm.validateFields((err, values) => {
			if (!!err) {
				return;
			}
			onConfirm(values);
		});
	}

	handleCancel() {
		let { onCancel } = this.props;
		onCancel();
	}

	render() {
		let { supplier, disabled } = this.props;
		return (
			<div className={addSupplier}>
				<div className={supplierWrapper}>
					<AddSupplierTitle titleText={"供应商资料"} />
					<AddSupplierForm
						supplier={supplier}
						disabled={disabled}
						ref="addSupplierForm"
					/>
				</div>
				<div className={buttonGroup}>
					{disabled ? null : (
						<Button
							type="primary"
							className={confirmButton}
							onClick={this.handleConfirm}
						>
							确定
						</Button>
					)}

					<Button
						type="ghost"
						className={cancelButton}
						onClick={this.handleCancel}
					>
						取消
					</Button>
				</div>
			</div>
		);
	}
}

function mapStateToProps({ suppliers }) {
	return { suppliers };
}

export default connect(mapStateToProps)(AddSupplier);
