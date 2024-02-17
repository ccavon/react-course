/*
 * @Author: cavon 425247833@qq.com
 * @Date: 2024-02-17 17:37:25
 * @LastEditors: cavon 425247833@qq.com
 * @LastEditTime: 2024-02-17 18:03:07
 * @FilePath: /react-course/04_Learn-Log/src/Components/UI/BackDrop/BackDrop.js
 * @Description: 对话框外部遮罩层
 */
import React from "react";
import "./BackDrop.css";

const BackDrop = (props) => {
  return (
    <div className="backDrop">
      {props.children}
    </div>
  );
};

export default BackDrop;