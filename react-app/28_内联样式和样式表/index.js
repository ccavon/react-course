/*
 * @Author: cavon 425247833@qq.com
 * @Date: 2024-02-19 20:27:42
 * @LastEditors: cavon 425247833@qq.com
 * @LastEditTime: 2024-02-20 22:03:41
 * @FilePath: /react-course/react-app/src/index.js
 * @Description: JavaScript入口
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
// 此处的css谁在上面就用谁，因为类重名的情况导致组件间的样式发生覆盖
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
