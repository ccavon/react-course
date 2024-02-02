/*
 * @Author: cavon 425247833@qq.com
 * @Date: 2024-02-01 21:43:20
 * @LastEditors: cavon 425247833@qq.com
 * @LastEditTime: 2024-02-02 21:21:31
 * @FilePath: /react-course/04_Learn-Log/src/Logs.js
 * @Description: 日志的容器
 */

import LogItem from "./LogItem/LogItem";
import './Logs.css';

const Logs = () => {
  return (
    <div className="logs">
      {/* 在父组件中可以直接在子组件中设置属性 */}
      {/* <LogItem test="123" hello="abc" fn={() => { }} /> */}
      <LogItem date={new Date()} desc={'学习前端'} time={40} />
      <LogItem date={new Date()} desc={'学习React'} time={50} />
    </div>
  );
}

export default Logs;
