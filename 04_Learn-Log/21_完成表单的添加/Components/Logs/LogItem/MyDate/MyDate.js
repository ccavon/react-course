/*
 * @Author: cavon 425247833@qq.com
 * @Date: 2024-02-12 17:44:31
 * @LastEditors: cavon 425247833@qq.com
 * @LastEditTime: 2024-02-12 17:44:31
 * @FilePath: /react-course/04_Learn-Log/src/Components/Logs/MyDate.js
 * @Description: 日志日期容器
 */

import React from "react";
import './MyDate.css';

const MyDate = (props) => {

  // 获取月份
  const month = props.date.toLocaleString('zh-CN', { month: 'long' });
  // 获取日期
  const date = props.date.getDate();

  return (
    // {/* 日志日期容器 */}
    <div className="date">
      <div className="month">{month}</div>
      <div className="day">{date}</div>
    </div>
  );
}

export default MyDate;