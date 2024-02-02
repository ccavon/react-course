/*
 * @Author: cavon 425247833@qq.com
 * @Date: 2024-02-02 18:13:56
 * @LastEditors: cavon 425247833@qq.com
 * @LastEditTime: 2024-02-02 18:15:29
 * @FilePath: /react-course/04_Learn-Log/src/Components/Logs/LogContent/Content.js
 * @Description: 日志内容的容器
 */
import React from "react";
import './Content.css';

const Content = () => {
  return (
    // 日志内容容器
    <div className="content">
      <h2 className="desc">学习React</h2>
      <div className="time">40分钟</div>
    </div>
  )
}
export default Content;