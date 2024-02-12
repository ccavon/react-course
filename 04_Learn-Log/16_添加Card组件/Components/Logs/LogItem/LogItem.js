/*
 * @Author: cavon 425247833@qq.com
 * @Date: 2024-02-12 17:43:06
 * @LastEditors: cavon 425247833@qq.com
 * @LastEditTime: 2024-02-12 19:38:17
 * @FilePath: /react-course/04_Learn-Log/src/Components/Logs/LogItem.js
 * @Description: 日志的项（列表）容器
 */
import React from "react";
import MyDate from "./MyDate/MyDate";
import './LogItem.css';
import Card from '../../UI/Card/Card';

const LogItem = (props) => {
  return (
    // {/* 日志项（列表）容器 */}
    <Card className="item">
      {/* 日志日期容器 */}
      <MyDate date={props.date} />
      {/* 日志内容容器 */}
      <div className="content">
        <h2 className="desc">{props.desc}</h2>
        <div className="time">{props.time}分钟</div>
      </div>
    </Card>
  );
}

export default LogItem;