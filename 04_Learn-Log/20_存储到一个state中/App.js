/*
 * @Author: cavon 425247833@qq.com
 * @Date: 2024-02-12 17:42:26
 * @LastEditors: cavon 425247833@qq.com
 * @LastEditTime: 2024-02-12 21:10:36
 * @FilePath: /react-course/04_Learn-Log/src/App.js
 * @Description: 主页入口
 */

import Logs from './Components/Logs/Logs';
import LogsForm from './Components/LogsForm/LogsForm';
import './index.css';
import './App.css';

const App = () => {
  return <div className='app'>
    {/* 引入LogsForm */}
    <LogsForm />
    <Logs />
  </div>;
}

export default App;