/*
 * @Author: cavon 425247833@qq.com
 * @Date: 2024-02-12 19:47:48
 * @LastEditors: cavon 425247833@qq.com
 * @LastEditTime: 2024-02-18 22:23:55
 * @FilePath: /react-course/04_Learn-Log/src/Components/LogsForm/LogsForm.js
 * @Description: 表单添加组件
 */

import React, { useRef, useState } from 'react';
import Card from '../UI/Card/Card';
import './LogsForm.css';

const LogsForm = (props) => {

  const descRef = useRef();
  const [inputDate, setInputDate] = useState('');
  const [inputDesc, setInputDesc] = useState('');
  const [inputTime, setInputTime] = useState('');

  // 创建一个响应函数，监听表单项日期的变化
  const dateChangeHandler = (e) => {
    setInputDate(e.target.value);
  }

  // 创建一个响应函数，监听表单项内容的变化
  const descChangeHandler = (e) => {
    setInputDesc(e.target.value);
  }

  // 创建一个响应函数，监听表单项时长的变化
  const timeChangeHandler = (e) => {
    setInputTime(e.target.value);
  }

  // 当表单提交时，汇总表单中的数据
  const formSubmitHandler = (e) => {
    e.preventDefault(); // 取消表单的默认行为
    // 将数据拼装为一个对象
    const newLog = {
      date: new Date(inputDate),
      desc: inputDesc,
      time: +inputTime // 隐式转换为number
    };
    // 当要添加新的日志时，调用父组件传递过来的函数
    props.onSaveLog(newLog);

    // 清空表单项
    setInputDate('');
    setInputDesc('');
    setInputTime('');
  }

  return (
    <Card className="logs-from">
      <form onSubmit={formSubmitHandler}>

        <div className="form-item">
          <label htmlFor="date">日期</label>
          <input type="date" id="date" onChange={dateChangeHandler} value={inputDate} />
        </div>

        <div className="form-item">
          <label htmlFor="content">内容</label>
          <input type="text" id="desc" onChange={descChangeHandler} ref={descRef} value={inputDesc} />
        </div>

        <div className="form-item">
          <label htmlFor="time">时长</label>
          <input type="number" id="time" onChange={timeChangeHandler} value={inputTime} />
        </div>

        <div className="form-btn">
          <button>添加</button>
        </div>

      </form>
    </Card>
  );
};

export default LogsForm;