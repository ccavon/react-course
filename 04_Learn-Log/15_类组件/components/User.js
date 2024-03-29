/*
 * @Author: cavon 425247833@qq.com
 * @Date: 2024-02-11 17:48:13
 * @LastEditors: cavon 425247833@qq.com
 * @LastEditTime: 2024-02-18 22:18:37
 * @FilePath: /react-course/04_Learn-Log/src/components/User.js
 * @Description: 类组件
 */
import React, { Component } from 'react';

class User extends Component {
  /**
    类组件的props时存储到累的实例对象中，可以直接通过是实例对象访问，this.props

    类组件中state统一存储到了实例对象的state属性中，
      可以通过this.state来访问
      通过this.setState()对其进行修改

      当我们通过this.setState()修改state时，React只会修改设置了的属性，

    函数组件中，响应函数直接以函数的形式定义在组件中，
      但是在类组件中，响应函数是以类的方法来定义，之前的属性都会保留
      但是这仅限于直接存储于state中的属性

    获取DOM对象
      1. 创建一个属性，用来存储DOM对象
          divRef = React.createRef();
      2. 将这个属性设置为指定元素的ref值
   */

  // 创建属性存储DOM对象
  divRef = React.createRef();

  // 像state中添加属性
  state = {
    count: 0,
    test: '哈哈',
    obj: { name: '孙悟空', age: 18 }
  };

  // 为了省事，在类组件中响应函数都应该以箭头函数的形式定义
  clickHandler = () => {
    this.setState({ count: this.state.count + 1 });
    // this.setState(prevState => {
    //   return {
    //     count: prevState.count + 1
    //   }
    // });

    // this.setState({ obj: { name: '沙和尚' } }); // 此时的浏览器渲染的age会丢失
    this.setState({ obj: { ...this.state.obj, name: '沙和尚' } }); // 用展开符进行覆盖，浏览器渲染的age就不会丢失了

    // console.log(this.divRef);
  }

  render() {

    // console.log(this.props);
    // console.log(this.divRef.current); // 获取最外层div

    return (
      <div ref={this.divRef}>
        <h1>{this.state.count} -- {this.state.test}</h1>
        <h2>{this.state.obj.name} -- {this.state.obj.age}</h2>
        <button onClick={this.clickHandler}>click</button>
        <ul>
          <li>姓名：{this.props.name}</li>
          <li>年龄：{this.props.age}</li>
          <li>性别：{this.props.gender}</li>
        </ul>
      </div>
    );
  }
}

export default User;