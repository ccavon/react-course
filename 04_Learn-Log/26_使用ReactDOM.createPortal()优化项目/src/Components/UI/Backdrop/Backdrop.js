/*
 * @Author: cavon 425247833@qq.com
 * @Date: 2024-02-17 17:37:25
 * @LastEditors: cavon 425247833@qq.com
 * @LastEditTime: 2024-02-17 21:32:19
 * @FilePath: /react-course/04_Learn-Log/src/Components/UI/Backdrop/Backdrop.js
 * @Description: 对话框外部遮罩层
 */
import React from "react";
import "./Backdrop.css";
import ReactDOM from "react-dom";

// 获取backdrop的根元素
const backdropRoot = document.getElementById("backdrop-root");

const Backdrop = (props) => {
  // return (
  //   <div className="backdrop">
  //     {props.children}
  //   </div>
  // );
  return ReactDOM.createPortal(<div className="backdrop">{props.children}</div>, backdropRoot);
};

export default Backdrop;