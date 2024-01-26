<!--
 * @Author: cavon 425247833@qq.com
 * @Date: 2024-01-26 21:04:16
 * @LastEditors: cavon 425247833@qq.com
 * @LastEditTime: 2024-01-26 23:20:34
 * @FilePath: /react-course/03_React-Project/README.md\
-->
#### 手动创建React项目

1. 在 03_React-Project 文件夹下面创建 public 文件夹

2. 在 03_React-Project/public 文件夹下创建 index.html 文件
    ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>React项目</title>
    </head>
    <body>
      <!-- public/index.html 是首页的模板，webpack在编译文件时，会以index.html为模板生成index.html -->
      <div id="root"></div>
    </body>
    </html>
    ```

3. 在 03_React-Project 文件夹下面创建 src 文件夹

4. 在 03_React-Project/src 文件夹下面创建 index.js 文件（可以什么都不写）

5. 在终端进入 03_React-Project 文件夹下面，接着输入以下命令
    ```
    yarn init -y
    ```

6. 在项目中安装三个依赖，分别是：react核心库、用react操作dom的react-dom库、提供react开发环境（webpack、测试等等工具）react-scripts库
    ```
    yarn add react react-dom react-scripts
    ```
    输入命令之后，会出现package.json等文件，package.json文件定义了本项目中所需要的各种模块，以及项目的配置信息

7. 以上依赖安装成功之后，将React-dom库引入到 /src/index.js 文件中
    ```javascript
    // 引入ReactDOM
    import ReactDOM from 'react-dom/client';

    // 创建一个JSX
    const App = <div>
      <h1>这是一个React项目</h1>
      <p>我终于有了第一个React项目了～</p>
    </div>;

    // 获取一个根容器
    const root = ReactDOM.createRoot(document.getElementById('root'));

    // 将App渲染进根容器
    root.render(App);
    ```

8. 在终端输入命令对项目进行打包
    ```
      npx react-scripts build
    ```
    输入命令之后，会出现build文件夹，这是打包以后的目录，用于把有用的代码合并成一些文件放到里边，webpack根据index.html进行生成的

9. 启动一个内置的测试服务器，测试的服务器中会实时的对代码进行编译
    ```
    npx react-scripts start
    ```
    注意：此时运行的测试服务器里面，而不是build里面，当删除掉build文件夹对测试服务器是不造成任何影响的<br />
    好处：会根据代码的修改实时的发生变化

10. 优化 8、9 两个命令，在package.json 文件最外层的{}中加入以下代码，用于简化启动项目和打包项目的命令
    ```json
    "scripts": {
      "start": "react-scripts start",
      "build": "react-scripts build"
    }
    ```
    再次启动服务器时，可以在终端输入以下简化的启动命令和打包命令：
    ```
    npm run start
    npm run build
    ```



