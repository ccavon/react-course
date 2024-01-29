/*
 * @Author: cavon 425247833@qq.com
 * @Date: 2024-01-29 17:16:46
 * @LastEditors: cavon 425247833@qq.com
 * @LastEditTime: 2024-01-29 17:27:16
 * @FilePath: /react-course/04_Learn-Log/src/App.js
 * @Description: 类组件
 */
import React from "react";

// import React, { Component } from "react";
// class App extends Component {}

/**
 * 类组件必须要继承React.Component
 *  相较于函数组件，类组件的编写要麻烦一些，但是他俩的功能是一样的
 * */
class App extends React.Component {
  // 类组件中，必须添加一个render()方法，且方法的返回值要是一个JSX
  render() {
    return <div>我是一个类组件</div>;
  }
}

export default App;