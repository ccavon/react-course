/*
 * @Author: cavon 425247833@qq.com
 * @Date: 2024-02-12 19:47:48
 * @LastEditors: cavon 425247833@qq.com
 * @LastEditTime: 2024-02-18 22:21:09
 * @FilePath: /react-course/04_Learn-Log/src/Components/LogsForm/LogsForm.js
 * @Description: 表单添加组件
 */

import React, { useRef } from 'react';
import Card from '../UI/Card/Card';
import './LogsForm.css';

const LogsForm = () => {
  /**
      当表单项发生变化时，获取用户输入的内容

      获取到当前触发事件的对象
      事件对象中保存了当前事件触发的所有信息，event.target执行的是触发事件的对象（DOM对象）

      在React中，通常表单不需要自行提交，而是要通过React提交
   */

  const descRef = useRef();

  // 创建三个变量，用来存储表单中的数据
  let inputDate = '';
  let inputDesc = '';
  let inputTime = 0;

  // 创建一个响应函数，监听表单项日期的变化
  const dateChangeHandler = (e) => {
    inputDate = e.target.value;
  }

  // 创建一个响应函数，监听表单项内容的变化
  const descChangeHandler = (e) => {
    // const desc = document.getElementById('desc');
    // console.log(desc.value);
    // console.log(descRef.current.value);
    inputDesc = e.target.value;
  }

  // 创建一个响应函数，监听表单项时长的变化
  const timeChangeHandler = (e) => {
    inputTime = e.target.value;
  }

  // 当表单提交时，汇总表单中的数据
  const formSubmitHandler = (e) => {
    e.preventDefault(); // 取消表单的默认行为
    // 获取表单项中的数据日期、内容、时长
    // console.log(inputDate, inputDesc, inputTime);
    // 将数据拼装为一个对象
    const newLog = {
      date: new Date(inputDate),
      desc: inputDesc,
      time: +inputTime // 隐式转换为number
    };
    console.log(newLog);
  }

  return (
    <Card className="logs-from">
      <form onSubmit={formSubmitHandler}>

        <div className="form-item">
          <label htmlFor="date">日期</label>
          <input type="date" id="date" onChange={dateChangeHandler} />
        </div>

        <div className="form-item">
          <label htmlFor="content">内容</label>
          <input type="text" id="desc" onChange={descChangeHandler} ref={descRef} />
        </div>

        <div className="form-item">
          <label htmlFor="time">时长</label>
          <input type="number" id="time" onChange={timeChangeHandler} />
        </div>

        <div className="form-btn">
          <button>添加</button>
        </div>

      </form>
    </Card>
  );
};

export default LogsForm;