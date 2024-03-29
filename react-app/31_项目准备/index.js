/*
 * @Author: cavon 425247833@qq.com
 * @Date: 2024-02-19 20:27:42
 * @LastEditors: cavon 425247833@qq.com
 * @LastEditTime: 2024-03-12 19:12:37
 * @FilePath: /react-course/react-app/src/index.js
 * @Description: JavaScript入口
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// 设置移动端的适配（除以几就是视口的宽度就是多少rem，现在我们设置视口的总宽度为750rem）
document.documentElement.style.fontSize = 100 / 750 + 'vw'; // 除以几视口就是多少，也就是750rem

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);