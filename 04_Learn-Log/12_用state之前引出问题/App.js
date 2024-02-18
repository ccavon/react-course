/*
 * @Author: cavon 425247833@qq.com
 * @Date: 2024-01-29 18:30:11
 * @LastEditors: cavon 425247833@qq.com
 * @LastEditTime: 2024-02-18 22:17:27
 * @FilePath: /react-course/04_Learn-Log/src/App.js
 * @Description: 主页入口
 */
import './App.css';

const App = () => {

  /*
    当点击 +时，数字增大
    当点击 -时，数字减少
   */

  // 创建一个变量存储数字
  let counter = 2;

  const addHandler = () => {
    // 点击数字都+1
    // alert('+1');
    counter++;
  }

  const lessHandler = () => {
    // 点击数字都-1
    // alert('-1');
    counter--;
  }

  return <div className='app'>
    <h1>{counter}</h1>
    <button onClick={lessHandler}>-</button>
    <button onClick={addHandler}>+</button>
  </div>;
}

export default App;