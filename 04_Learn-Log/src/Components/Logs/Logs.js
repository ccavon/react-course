/*
 * @Author: cavon 425247833@qq.com
 * @Date: 2024-02-01 21:43:20
 * @LastEditors: cavon 425247833@qq.com
 * @LastEditTime: 2024-02-02 18:13:12
 * @FilePath: /react-course/04_Learn-Log/src/Logs.js
 * @Description: 日志的容器
 */

import LogItem from "./LogItem/LogItem";
import './Logs.css';

const Logs = () => {
  return (
    <div className="logs">
      <LogItem />
      <LogItem />
      <LogItem />
    </div>
  );
}

export default Logs;
