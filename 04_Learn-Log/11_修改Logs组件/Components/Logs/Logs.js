/*
 * @Author: cavon 425247833@qq.com
 * @Date: 2024-02-01 21:43:20
 * @LastEditors: cavon 425247833@qq.com
 * @LastEditTime: 2024-02-03 16:00:47
 * @FilePath: /react-course/04_Learn-Log/src/Logs.js
 * @Description: 日志的容器
 */

import LogItem from "./LogItem/LogItem";
import './Logs.css';

const Logs = () => {

  // 模拟一组从服务器中加载的数据
  const logsData = [
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
      time: '410 '
    }
  ];

  // 将数据放入JSX中
  const logsItemData = logsData.map(item => <LogItem key={item.id} date={item.date} desc={item.desc} time={item.time} />);

  return (
    <div className="logs">
      {/* 在父组件中可以直接在子组件中设置属性 */}
      {/* <LogItem test="123" hello="abc" fn={() => { }} /> */}
      {/* <LogItem date={new Date(2023, 11, 24, 14, 42)} desc={'学习前端'} time={40} /> */}
      {/* <LogItem date={new Date(2024, 1, 3, 14, 44)} desc={'学习React'} time={50} /> */}

      {/* <LogItem date={logsData[0].date} desc={logsData[0].desc} time={logsData[0].time} /> */}
      {
        // logsData.map(item => <LogItem key={item.id} date={item.date} desc={item.desc} time={item.time} />)
        // logsData.map(item => <LogItem key={item.id} {...item} />)
        logsItemData
      }
    </div>
  );
}

export default Logs;
