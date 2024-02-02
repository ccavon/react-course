/*
 * @Author: cavon 425247833@qq.com
 * @Date: 2024-02-01 21:45:39
 * @LastEditors: cavon 425247833@qq.com
 * @LastEditTime: 2024-02-02 20:46:45
 * @FilePath: /react-course/04_Learn-Log/src/Components/Logs/LogItem.js
 * @Description: 日志的项（列表）容器
 */
import React from "react";
import MyDate from "./MyDate/MyDate";
import Content from "./LogContent/Content";
import './LogItem.css';

const LogItem = () => {
  return (
    // {/* 日志项（列表）容器 */}
    <div className="item">
      {/* 日志日期容器 */}
      <MyDate />
      {/* 日志内容容器 */}
      <Content />
    </div>
  );
}

export default LogItem;