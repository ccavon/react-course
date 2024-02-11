/*
 * @Author: cavon 425247833@qq.com
 * @Date: 2024-02-10 17:02:14
 * @LastEditors: cavon 425247833@qq.com
 * @LastEditTime: 2024-02-11 16:52:14
 * @FilePath: /react-course/04_Learn-Log/src/App.js
 * @Description: 主页入口
 */
import { useRef, useState } from 'react';
import './App.css';

let temp;

const App = () => {

  /**
      获取原生的DOM对象
        1. 可以使用传统的document来对DOM进行操作
        2. 直接从React处获取DOM对象
            步骤：
              1. 创建一个存储DOM对象的容器
                  - 使用  useRef() 钩子函数
                      钩子函数的注意事项：
                        ① React中的钩子函数只能用于函数组件或自定义钩子函数
                        ② 钩子函数只能直接在函数组件中调用
              2. 将容器设置为想要获取DOM对象元素的ref属性
                  <h1 ref={xxx}>...</h1>
                    - React会自动将当前元素的DOM对象，设置为容器current属性
      useRef()
        - 返回的就是一个普通的js对象：{current: undefined}
        - 所以我们直接创建一个js对象，也可以代替useRef()
        - 区别：
            我们创建的对象，组件每次重新渲染都会创建一个新对象；
            而useRef()创建的对象，可以确保每次渲染获取到的都是同一个对象

        - 当你需要一个对象不会因为组件的重新渲染而改变时，就可以使用useRef()

   */

  // const h1Ref = useRef(1); // 创建一个容器
  // console.log(h1Ref); // {current: 1} // 可以传默认值

  // const h1Ref = useRef(); // 创建
  // console.log(h1Ref); // {current: undefined}

  const [count, setCount] = useState(1);

  // const h1Ref = { current: null }; // 等同于useRef();
  // console.log(temp === h1Ref); // false
  // temp = h1Ref; // 虽然重新赋值了，但是因为是普通的js对象，所以每次比较都是false

  const h1Ref = useRef();
  console.log(temp === h1Ref); // 初始化为false，其他为true
  temp = h1Ref; // 当重新赋值之后，因为是钩子函数的特点，所以除了初始化的比较，其每次比较都是true

  const clickHandler = () => {
    // 通过id获取h1
    const header = document.getElementById('header');
    // console.log(header); // <h1 id='header'>我是标题</h1>
    // header.innerHTML = '哈哈哈';

    console.log(h1Ref); // {current: undefined}
    // alert(h1Ref.current); // [object HTMLDivElement]（将h1Ref放在最外层div.app的标签上）
    // alert(h1Ref.current); // [object HTMLHeadingElement]（将h1Ref放在h1.header的标签上）
    console.log(h1Ref.current === header); // true
    h1Ref.current.innerText = '嘻嘻嘻';

  }

  const countAddHandler = () => {
    setCount(prevState => prevState + 1);
  }

  return (
    // <div className='app'>
    // <div className='app' ref={h1Ref}>
    <div className='app'>
      <h1 id='header' ref={h1Ref}>我是标题{count}</h1>
      <button onClick={clickHandler}>1</button>
      <button onClick={countAddHandler}>2</button>
    </div>
  );
}

export default App;