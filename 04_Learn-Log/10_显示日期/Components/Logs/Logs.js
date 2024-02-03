/*
 * @Author: cavon 425247833@qq.com
 * @Date: 2024-02-01 21:43:20
 * @LastEditors: cavon 425247833@qq.com
 * @LastEditTime: 2024-02-03 14:54:39
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
      <LogItem date={new Date(2023, 11, 24, 14, 42)} desc={'学习前端'} time={40} />
      <LogItem date={new Date(2024, 1, 3, 14, 44)} desc={'学习React'} time={50} />
    </div>
  );
}

export default Logs;
