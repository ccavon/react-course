/*
 * @Author: cavon 425247833@qq.com
 * @Date: 2024-02-12 17:43:06
 * @LastEditors: cavon 425247833@qq.com
 * @LastEditTime: 2024-02-17 17:58:51
 * @FilePath: /react-course/04_Learn-Log/src/Components/Logs/LogItem.js
 * @Description: 日志的项（列表）容器
 */
import React, { useState } from "react";
import MyDate from "./MyDate/MyDate";
import './LogItem.css';
import Card from '../../UI/Card/Card';
import ConfirmModal from "../../UI/ConfirmModal/ConfirmModal";

const LogItem = (props) => {

  // 添加一个state，记录是否显示确认窗口
  const [showConfirm, setShowConfirm] = useState(false);

  // 删除item的响应数据
  const deleteItemHandler = () => {

    setShowConfirm(true);

    // // 临时性
    // const isDel = window.confirm('该操作不可恢复，确认码？');
    // if (isDel) {
    //   // 删除当前的item，要删除item，其实就是要从数据的state移除指定的数据
    //   // props.onDelLog(props.logIndex);
    //   props.onDelLog();
    //   setShowConfirm(true);
    // }
  }

  //取消函数
  const cancelHandler = () => {
    setShowConfirm(false);
  }

  // 确认函数
  const okHandler = () => {
    props.onDelLog();
  }

  return (
    // {/* 日志项（列表）容器 */}
    <Card className="item">
      {showConfirm && <ConfirmModal confirmText="该操作不可恢复！请确认" onCancel={cancelHandler} onOk={okHandler} />}

      {/* 日志日期容器 */}
      <MyDate date={props.date} />
      {/* 日志内容容器 */}
      <div className="content">
        {/*
            如果将组件中的数据全部写死，将会导致组件无法动态设置，不具有使用价值
            我们希望组件数据可以由外部设置，在组件间，父组件可以通过props（属性）向子组件传递数据
         */}
        <h2 className="desc">{props.desc}</h2>
        <div className="time">{props.time}分钟</div>
      </div>
      {/* 添加一个删除按钮 */}
      <div>
        <div className="delete" onClick={deleteItemHandler}>×</div>
      </div>
    </Card>
  );
}

export default LogItem;