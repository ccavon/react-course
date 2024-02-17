/*
 * @Author: cavon 425247833@qq.com
 * @Date: 2024-02-17 16:23:17
 * @LastEditors: cavon 425247833@qq.com
 * @LastEditTime: 2024-02-17 21:21:14
 * @FilePath: /react-course/04_Learn-Log/src/Components/UI/ConfirmModal/ConfirmModal.js
 * @Description: 删除对话框
 */
import React from "react";
import Card from "../Card/Card";
import "./ConfirmModal.css";
import Backdrop from "../Backdrop/Backdrop";

const ConfirmModal = (props) => {
  return (
    <Backdrop>
      <Card className="confirmModal">
        <div className="confirmText">
          <p>该操作不可恢复！确认吗？</p>
        </div>
        <div className="confirmButton">
          <button className="okButton" onClick={props.onOk}>确认</button>
          <button className="noButton" onClick={props.onCancel}>取消</button>
        </div>
      </Card>
    </Backdrop>
  );
};

export default ConfirmModal;