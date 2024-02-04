/*
 * @Author: cavon 425247833@qq.com
 * @Date: 2024-01-29 18:30:11
 * @LastEditors: cavon 425247833@qq.com
 * @LastEditTime: 2024-02-04 16:42:00
 * @FilePath: /react-course/04_Learn-Log/src/App.js
 * @Description: 主页入口
 */
import { useState } from 'react';
import './App.css';

const App = () => {

  /**
    state
      - state 实际就是一个被React管理的变量，当我们通过setState()修改变量的值时，会触发组件的自动重新渲染
      - 只有state值发生变化时，组件才会重新渲染
      - 当state值是一个对象时，修改时是使用新的对象去替换已有对象
      - 当通过setState()去修改一个state时，并不表示修改当前的state，它修改的是组件下一次渲染时state值
      - setState()会触发组件的重新渲染，它是异步的
          所以，当调用setState()需要用旧state的值时，一定要注意，
          有可能会出现计算错误的情况
          为了避免这种情况，可以通过为setState()传递回调函数的形式修改state值
   */

  console.log('函数执行了 ---› 组件创建完毕！');

  const [counter, setCounter] = useState(1);
  const [user, setUser] = useState({ name: '孙悟空', age: 18 });

  /*
    当点击 +时，数字增大
    当点击 -时，数字减少
   */
  const addHandler = () => {
    // 点击数字都+1
    // setCounter(counter + 1); // 修改counter值
    // setCounter(2); // 会进行比较，当counter=2了，就不再重新渲染

    setTimeout(() => {
      // setCounter(counter + 1);
      /*
        setState()中回调函数的返回值将会成为新的state值
          回调函数执行时，React会将最新的state值作为参数传递
       */
      // setCounter(() => {
      //   return counter + 1;
      // });
      // prevCounter每次都是最新的
      setCounter(prevCounter => {
        return prevCounter + 1;
      });
    }, 1000);
  }

  const updateUserHandler = () => {
    // setUser({ name: '猪八戒', age: 28 });

    // 如果直接修改旧的state对象，由于对象还是那个对象，所以不会生效
    // user.name = '猪八戒';
    // console.log(user);
    // setUser(user);

    const newUser = Object.assign({}, user); // 浅复制
    // console.log(newUser); // {name: '孙悟空', age: 18}
    // console.log(newUser === user); // false

    // newUser.name = '猪八戒';
    // setUser(newUser); // 每次都会重新渲染网页，是因为进行了浅复制，每次都是新对象，所以每次都会触发render

    setUser({ ...user, name: '猪八戒' }); // 使用展开运算符进行浅复制
  }

  console.log(counter);
  return <div className='app'>
    <h1>{counter} -- {user.name} -- {user.age}</h1>
    <button onClick={addHandler}>按钮1</button>
    <button onClick={updateUserHandler}>按钮2</button>
  </div>;
}

export default App;