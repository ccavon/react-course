/*
 * @Author: cavon 425247833@qq.com
 * @Date: 2024-03-11 20:02:29
 * @LastEditors: cavon 425247833@qq.com
 * @LastEditTime: 2024-03-13 15:20:02
 * @FilePath: /react-course/react-app/src/components/Meals/Meal/Meal.js
 * @Description: 食物组件
 */
import React from 'react';
import classes from './Meal.module.css';

const Meal = () => {
  return (
    <div className={classes.Meal}>
      <div className={classes.ImgBox}>
        <img src="/img/meals/1.png" alt="" srcset="" />
      </div>
      <div>
        <h2 className={classes.Title}>汉堡包</h2>
        <p className={classes.Desc}>百分百纯牛肉配搭爽脆酸瓜洋葱粒与美味番茄酱经典滋味让你无法抵挡！</p>
        <div className={classes.PriceWrap}>
          <span className={classes.Price}>12</span>
          <div>数量</div>
        </div>
      </div>
    </div>
  );
};

export default Meal;