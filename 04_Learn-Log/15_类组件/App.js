/*
 * @Author: cavon 425247833@qq.com
 * @Date: 2024-02-11 16:58:37
 * @LastEditors: cavon 425247833@qq.com
 * @LastEditTime: 2024-02-11 22:07:52
 * @FilePath: /react-course/04_Learn-Log/src/App.js
 * @Description: 类组件
 */
import React, { Component } from 'react';
import './App.css';
import User from './components/User';

class App extends Component {
  render() {
    return (
      <div className='app'>
        <User name={'猪八戒'} age={28} gender={'男'} />
      </div>
    )
  }
}

export default App;