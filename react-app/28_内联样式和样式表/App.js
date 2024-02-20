/*
 * @Author: cavon 425247833@qq.com
 * @Date: 2024-02-19 21:01:17
 * @LastEditors: cavon 425247833@qq.com
 * @LastEditTime: 2024-02-20 21:50:20
 * @FilePath: /react-course/react-app/src/App.js
 */
import React, { useState } from "react";
import "./App.css";

const App = () => {

  const [redBorder, setRedBorder] = useState(true);

  // const pStyle = {
  //   color: "red",
  //   background: "#bfa",
  //   border: redBorder ? "4px solid red" : "4px solid blue"
  // };

  const clickHandler = () => {
    setRedBorder(false);
  }

  return (
    <div>
      {/* <p style={pStyle}>我是一个段落</p> */}
      <p className={`p1 ${redBorder ? "" : "buleBorder"}`}>我是一个段落</p>
      <button onClick={clickHandler}>点我一下</button>
    </div>
  );
};

export default App;
