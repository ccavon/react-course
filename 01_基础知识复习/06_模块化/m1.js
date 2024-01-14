/*
 * @Author: cavon 425247833@qq.com
 * @Date: 2024-01-14 15:45:42
 * @LastEditors: cavon 425247833@qq.com
 * @LastEditTime: 2024-01-14 21:48:22
 * @FilePath: /react-course/01_基础知识复习/06_模块化/m1.js
 */
const a = 'm1模块中的变量a';

export const b = 20; // 命名导出 b
export const c = 30; // 命名导出 c

const obj = {
  name: '孙悟空'
};
const fn = () => {
  console.log('我是fn');
}
/*
  作为一个模块，我们不希望模块中所有的内容都暴露给外部
  作为导入方，也不希望导入无用的变量
  export（导出）
    - 导出用来决定一个模块中哪些内容可以被外部查看
    - 导出分成两种：
        1. 默认导出
          - 语法：
              export default xxx
          - 一个模块中只能有一个默认导出
        2. 命名导出
          export const b = 20; // export const/let 变量名 = 值;
  import（导入）
    - 导入用来将外部模块中的内容导入到当前模块中
    - 导入默认模块
        import a from './m1.js';
        - 导入默认模块时，变量名可以自主指定，无需和模块中的变量名对应
        - 在网页中导入模块时，模块的路径必须写完整（/或./或../开头，扩展名也得写上）
    - 导入指定内容
      - import { b, c } from './m1.js';
      - import { b as hello, c } from './m1.js';
        - as 表示设置 b 的别名 hello，调用时必须使用别名 hello
    - 导入默认及指定内容
        import a, { b, c, obj, fn } from './m1.js';
*/
export default a; // 将变量a作为默认导出暴露
export { obj, fn }; // 命名导出