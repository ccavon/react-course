/*
 * @Author: cavon 425247833@qq.com
 * @Date: 2024-01-27 14:15:01
 * @LastEditors: cavon 425247833@qq.com
 * @LastEditTime: 2024-01-27 15:27:06
 * @FilePath: /react-course/04_Learn-Log/src/index.js
 */
import ReactDOM from "react-dom/client";

ReactDOM.createRoot(
  document.getElementById('root')
).render(
  // 日志容器
  <div className="logs">
    {/* 日志项（列表）容器 */}
    <div className="item">
      {/* 日志日期容器 */}
      <div className="date">
        <div className="mouth">四月</div>
        <div className="day">18</div>
      </div>
      {/* 日志内容容器 */}
      <div className="content">
        <h1 className="desc">学习React</h1>
        <div className="time">40分钟</div>
      </div>
    </div>
  </div>
);
