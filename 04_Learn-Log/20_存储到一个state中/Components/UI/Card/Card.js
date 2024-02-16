/*
 * @Author: cavon 425247833@qq.com
 * @Date: 2024-02-12 17:53:38
 * @LastEditors: cavon 425247833@qq.com
 * @LastEditTime: 2024-02-16 16:11:05
 * @FilePath: /react-course/04_Learn-Log/src/Components/UI/Card/Card.js
 * @Description: 圆角布局公共组件
 */
import React from 'react';
import './Card.css';

const Card = (props) => {
  /**
    props.children 表示组件的标签体
   */
  return (
    <div className={`card ${props.className}`}>
      {props.children}
    </div>
  );
};

export default Card;