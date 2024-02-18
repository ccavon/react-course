/*
 * @Author: cavon 425247833@qq.com
 * @Date: 2024-02-12 17:42:50
 * @LastEditors: cavon 425247833@qq.com
 * @LastEditTime: 2024-02-18 22:24:52
 * @FilePath: /react-course/04_Learn-Log/src/Logs.js
 * @Description: 日志的容器
 */

import Card from "../UI/Card/Card";
import LogItem from "./LogItem/LogItem";
import './Logs.css';

const Logs = (props) => {

  /**
    logsData 用来存储学习的日志
      这个数据除了当前组件Logs需要使用外，LogsForm也需要使用，
      当遇到一个数据需要被多个组件使用时，我们可以将数据放入到这些组件共同的祖先元素中，
      这样就可以使得多个组件都难方便的访问到这个数据

    state的提升
   */

  // 模拟一组从服务器中加载的数据
  // const logsData = [
  //   {
  //     id: '001',
  //     date: new Date(2024, 12, 3, 15, 41),
  //     desc: '学习React',
  //     time: '180'
  //   },
  //   {
  //     id: '002',
  //     date: new Date(2023, 11, 20, 13, 20),
  //     desc: '学习JavaScript',
  //     time: '230'
  //   },
  //   {
  //     id: '003',
  //     date: new Date(2023, 10, 18, 11, 30),
  //     desc: '学习Vue',
  //     time: '280'
  //   },
  //   {
  //     id: '004',
  //     date: new Date(2023, 9, 6, 9, 28),
  //     desc: '学习HTML',
  //     time: '320'
  //   },
  //   {
  //     id: '005',
  //     date: new Date(2023, 8, 1, 8, 8),
  //     desc: '学习CSS',
  //     time: '410'
  //   }
  // ];

  // 将数据放入JSX中
  let logsItemData = props.logsData.map(
    (item, index) => <LogItem
      key={item.id}
      date={item.date}
      desc={item.desc}
      time={item.time}
      // logIndex={index}
      // onDelLog={props.onDelLog}
      onDelLog={() => props.onDelLog(index)}
    />
  );

  if (logsItemData.length === 0) {
    logsItemData = <p className="no-logs">没有找到日志</p>;
  }

  return (
    <Card className="logs">
      {/* 在父组件中可以直接在子组件中设置属性 */}
      {/* {logsItemData} */}
      {logsItemData.length !== 0 ? logsItemData : <p className="no-logs">没有找到日志</p>}
    </Card>
  );
}

export default Logs;
