/*
 * @Author: cavon 425247833@qq.com
 * @Date: 2024-02-12 19:47:48
 * @LastEditors: cavon 425247833@qq.com
 * @LastEditTime: 2024-02-12 21:28:46
 * @FilePath: /react-course/04_Learn-Log/src/Components/LogsForm/LogsForm.js
 * @Description: 表单添加组件
 */

import React from 'react';
import Card from '../UI/Card/Card';
import './LogsForm.css';

const LogsForm = () => {
  return (
    <Card className="logs-from">
      <form>

        <div className="form-item">
          <label htmlFor="date">日期</label>
          <input type="date" id="date" />
        </div>

        <div className="form-item">
          <label htmlFor="content">内容</label>
          <input type="text" id="content" />
        </div>

        <div className="form-item">
          <label htmlFor="time">时长</label>
          <input type="number" id="time" />
        </div>

        <div className="form-btn">
          <button>添加</button>
        </div>

      </form>
    </Card>
  );
};

export default LogsForm;