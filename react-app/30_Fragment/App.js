/*
 * @Author: cavon 425247833@qq.com
 * @Date: 2024-02-19 21:01:17
 * @LastEditors: cavon 425247833@qq.com
 * @LastEditTime: 2024-02-22 22:33:49
 * @FilePath: /react-course/react-app/src/App.js
 */
// import React from "react";
// import Out from "./Out";

// import React, { Fragment } from "react";

const App = () => {

  /**
      React.Fragment
        - 是一个专门用来作为父容器的组件，它只会将它里边的子元素直接返回，不会创建任何多余的元素
        - 当我们希望有一个父容器，但同时又不希望这个父容器在网页中产生多余的结构时，就可以使用Fragment
   */

  return (
    // <Out>
    //   <div>第一个组件</div>
    //   <div>第二个组件</div>
    //   <div>第三个组件</div>
    // </Out>

    // <React.Fragment>
    //   <div>第一个组件</div>
    //   <div>第二个组件</div>
    //   <div>第三个组件</div>
    // </React.Fragment>

    // <Fragment>
    //   <div>第一个组件</div>
    //   <div>第二个组件</div>
    //   <div>第三个组件</div>
    // </Fragment>

    // <></>使用场景：需要一个父容器，但是又不希望这个父容器在网页当中创建多余的结构
    <>
      <div>第一个组件</div>
      <div>第二个组件</div>
      <div>第三个组件</div>
    </>
  );
};

export default App;
