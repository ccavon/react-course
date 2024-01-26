<!--
 * @Author: cavon 425247833@qq.com
 * @Date: 2024-01-26 21:04:16
 * @LastEditors: cavon 425247833@qq.com
 * @LastEditTime: 2024-01-26 21:05:38
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
