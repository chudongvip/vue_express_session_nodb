## 简介
>本项目是vue js框架 + express nodejs后台框架，利用express-session 模块添加session验证机制，session存储不涉及数据库存储，仅需内存存储；可以根据自己的项目需求来自行更改，简单易懂，前后端分离。server目录可单独做为后端项目运行，其他前端框架也适用；

## 效果图

  登录
  ![Alt text](/login.gif)

  刷新
  ![Alt text](/refresh.gif)

## 使用
  这里需要打开两个node窗口，一个允许vue（开发模式）一个运行express

1.	运行后台服务

    a)	进入项目目录中的server目录  <br />
          <pre><code>cd xx\server</code></pre>
    b)  安装依赖<br />
        <pre><code>npm install</code></pre>
    c)  运行服务<br />
        <pre><code>nodemon bin\www</code></pre>

2.	运行vue

    a)	进入项目根目录<br />
        <pre><code>cd  xx</code></pre>
    b)	安装依赖<br />
        <pre><code>npm install</code></pre>
    c)	运行服务<br />
        <pre><code>npm run dev</code></pre>
