/*
 * @Author: cavon 425247833@qq.com
 * @Date: 2024-01-27 14:15:01
 * @LastEditors: cavon 425247833@qq.com
 * @LastEditTime: 2024-01-27 22:34:45
 * @FilePath: /react-course/04_Learn-Log/src/index.js
 */
import ReactDOM from "react-dom/client";
import "./index.css";

// 日志容器
const App = <div className="logs">
  {/* 日志项（列表）容器 */}
  <div className="item">
    {/* 日志日期容器 */}
    <div className="date">
      <div className="mouth">四月</div>
      <div className="day">22</div>
    </div>
    {/* 日志内容容器 */}
    <div className="content">
      <h2 className="desc">学习React</h2>
      <div className="time">40分钟</div>
    </div>
  </div>

  {/* 日志项（列表）容器 */}
  <div className="item">
    {/* 日志日期容器 */}
    <div className="date">
      <div className="mouth">四月</div>
      <div className="day">18</div>
    </div>
    {/* 日志内容容器 */}
    <div className="content">
      <h2 className="desc">学习React</h2>
      <div className="time">40分钟</div>
    </div>
  </div>
</div>;

ReactDOM.createRoot(document.getElementById('root')).render(App);
