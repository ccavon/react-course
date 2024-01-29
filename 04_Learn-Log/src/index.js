/*
 * @Author: cavon 425247833@qq.com
 * @Date: 2024-01-29 16:44:34
 * @LastEditors: cavon 425247833@qq.com
 * @LastEditTime: 2024-01-29 17:09:41
 * @FilePath: /react-course/04_Learn-Log/src/index.js
 * @Description: 组件
 */

/*
    组件
      - React中组件有两种创建方式
      - 函数式组件
        - 函数式组件就是一个返回JSX的普通函数
        - 组件的首字母必须是大写
      - 类组件
 */
import ReactDOM from 'react-dom/client';
import App from './App';

// 函数组件
// function App() {
//   return <div>Hello React！</div>;
// }

const root = ReactDOM.createRoot(document.getElementById('root'));

// React组件可以直接通过JSX渲染
root.render(<App />);