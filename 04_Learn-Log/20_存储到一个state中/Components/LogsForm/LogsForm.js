/*
 * @Author: cavon 425247833@qq.com
 * @Date: 2024-02-12 19:47:48
 * @LastEditors: cavon 425247833@qq.com
 * @LastEditTime: 2024-02-16 16:06:21
 * @FilePath: /react-course/04_Learn-Log/src/Components/LogsForm/LogsForm.js
 * @Description: 表单添加组件
 */

import React, { useRef, useState } from 'react';
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
  // let inputDate = '';
  // let inputDesc = '';
  // let inputTime = 0;

  // const [inputDate, setInputDate] = useState('');
  // const [inputDesc, setInputDesc] = useState('');
  // const [inputTime, setInputTime] = useState('');

  // 将表单数据统一到一个state中
  const [formDate, setFormDate] = useState({
    inputDate: '',
    inputDesc: '',
    inputTime: ''
  });

  // 创建一个响应函数，监听表单项日期的变化
  const dateChangeHandler = (e) => {
    console.log(e.target.value);
    // inputDate = e.target.value;
    // setInputDate(e.target.value);
    setFormDate({ ...formDate, inputDate: e.target.value });
  }

  // 创建一个响应函数，监听表单项内容的变化
  const descChangeHandler = (e) => {
    console.log('desc发生变化了');
    // const desc = document.getElementById('desc');
    // console.log(desc.value);

    // console.log(descRef.current.value);

    console.log(e.target.value);
    // inputDesc = e.target.value;
    // setInputDesc(e.target.value);
    setFormDate({ ...formDate, inputDesc: e.target.value });
  }

  // 创建一个响应函数，监听表单项时长的变化
  const timeChangeHandler = (e) => {
    console.log(e.target.value);
    // inputTime = e.target.value;
    // setInputTime(e.target.value);
    setFormDate({ ...formDate, inputTime: e.target.value });
  }

  // 当表单提交时，汇总表单中的数据
  const formSubmitHandler = (e) => {
    e.preventDefault(); // 取消表单的默认行为
    console.log('表单提交了');

    // 获取表单项中的数据日期、内容、时长
    // console.log(inputDate, inputDesc, inputTime);
    // 将数据拼装为一个对象
    const newLog = {
      // date: new Date(inputDate),
      // desc: inputDesc,
      // time: +inputTime // 隐式转换为number
      date: new Date(formDate.inputDate),
      desc: formDate.inputDesc,
      time: +formDate.inputTime // 隐式转换为number
    };
    console.log(newLog);

    // 清空表单项
    // setInputDate('');
    // setInputDesc('');
    // setInputTime('');

    setFormDate({ inputDate: '', inputDesc: '', inputTime: '' });
  }

  /**
      提交表单后如何清空表单的旧数据，现在这种表单，在React我们称为非受控组件

      我们可以将表单中的数据存储到state中，然后将state设置为表单项value值，这样当表单项发生变化，state会随之变化，
      反之，state发生变化，表单项也会跟着改变，这种操作我们就称为双向绑定
      这样一来，表单就成为了一个受控组件
   */

  return (
    <Card className="logs-from">
      <form onSubmit={formSubmitHandler}>

        <div className="form-item">
          <label htmlFor="date">日期</label>
          {/* <input type="date" id="date" onChange={dateChangeHandler} value={inputDate} /> */}
          <input type="date" id="date" onChange={dateChangeHandler} value={formDate.inputDate} />
        </div>

        <div className="form-item">
          <label htmlFor="content">内容</label>
          {/* <input type="text" id="desc" onChange={descChangeHandler} ref={descRef} value={inputDesc} /> */}
          <input type="text" id="desc" onChange={descChangeHandler} ref={descRef} value={formDate.inputDesc} />
        </div>

        <div className="form-item">
          <label htmlFor="time">时长</label>
          {/* <input type="number" id="time" onChange={timeChangeHandler} value={inputTime} /> */}
          <input type="number" id="time" onChange={timeChangeHandler} value={formDate.inputTime} />
        </div>

        <div className="form-btn">
          <button>添加</button>
        </div>

      </form>
    </Card>
  );
};

export default LogsForm;