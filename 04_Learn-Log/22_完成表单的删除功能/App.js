/*
 * @Author: cavon 425247833@qq.com
 * @Date: 2024-02-12 17:42:26
 * @LastEditors: cavon 425247833@qq.com
 * @LastEditTime: 2024-02-16 21:16:15
 * @FilePath: /react-course/04_Learn-Log/src/App.js
 * @Description: 主页入口
 */

import Logs from './Components/Logs/Logs';
import LogsForm from './Components/LogsForm/LogsForm';
import './index.css';
import './App.css';
import { useState } from 'react';

const App = () => {
  // 数据
  // const logsData = [];
  const [logsData, setLogsData] = useState([
    {
      id: '001',
      date: new Date(2024, 12, 3, 15, 41),
      desc: '学习React',
      time: '180'
    },
    {
      id: '002',
      date: new Date(2023, 11, 20, 13, 20),
      desc: '学习JavaScript',
      time: '230'
    },
    {
      id: '003',
      date: new Date(2023, 10, 18, 11, 30),
      desc: '学习Vue',
      time: '280'
    },
    {
      id: '004',
      date: new Date(2023, 9, 6, 9, 28),
      desc: '学习HTML',
      time: '320'
    },
    {
      id: '005',
      date: new Date(2023, 8, 1, 8, 8),
      desc: '学习CSS',
      time: '410'
    }
  ]);

  /**
      下一步：
        将LogsForm中的数据传递给App组件，然后App组件将新的日志添加到数组（logsData）中
   */

  // 定义一个函数
  const saveLogHandler = (newLog) => {
    // 向新的日志中添加id
    newLog.id = Date.now() + '';
    console.log(newLog);
    // 将新的数据添加到数组中
    // logsData.push(newLog);
    // setLogsData([...logsData, newLog]); // 新数据在后面
    setLogsData([newLog, ...logsData]); // 新数据在前面
  }

  // 定义一个函数，从数据中删除一条日志
  const delLogByIndex = (index) => {
    console.log(index);
    setLogsData(prevState => {
      const newData = [...prevState];
      newData.splice(index, 1);
      return newData;
    });
  }

  return <div className='app'>
    {/* 引入LogsForm */}
    <LogsForm onSaveLog={saveLogHandler} />
    <Logs logsData={logsData} onDelLog={delLogByIndex} />
  </div>;
}

export default App;