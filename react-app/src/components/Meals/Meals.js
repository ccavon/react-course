/*
 * @Author: cavon 425247833@qq.com
 * @Date: 2024-03-11 17:52:36
 * @LastEditors: cavon 425247833@qq.com
 * @LastEditTime: 2024-03-13 15:59:45
 * @FilePath: /react-course/react-app/src/components/Meals/Meals.js
 * @Description: 食物列表的组件
 */
import React from 'react';
import Meal from './Meal/Meal';
import classee from './Meals.module.css';

const Meals = () => {
  return (
    // 现在将滚动条设置给了Meals
    <div className={classee.Meals}>
      <Meal />
      <Meal />
      <Meal />
      <Meal />
      <Meal />
      <Meal />
      <Meal />
      <Meal />
      <Meal />
      <Meal />
      <Meal />
      <Meal />
      <Meal />
    </div>
  );
};

export default Meals;