
/**
 * 配置路由
 */
import React from 'react';
import ReactDOM from 'react-dom';
// 引入react-router-dom
import { BrowserRouter as Router, Route ,Switch } from 'react-router-dom';

import * as serviceWorker from './serviceWorker';
// 引入布局组件
import HomeLayout from './layouts/HomeLayout';
// import HomePage from './pages/Home'; // 首页
import LoginPage from './pages/Login'; // 登录页
// import UserAddPage from './pages/UserAdd'; // 添加用户页
// import UserListPage from './pages/UserList'; // 用户列表页
// import UserEditPage from './pages/UserEdit'; // 用户编辑页面
// import BookAddPage from './pages/BookAdd'; // 添加图书页
// import BookEditPage from './pages/BookEdit'; // 用户编辑页面

// 渲染
ReactDOM.render((
  <Router>
    <Switch>
      <Route path="/login" component={LoginPage} />
      <Route path="/" component={HomeLayout}/>
    </Switch>
  </Router>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

 //     <Route path="/" component={HomePage} />
  //     <Route path="/user/add" component={UserAddPage} />
  //     <Route path="/user/list" component={UserListPage} />
  //     <Route path="/user/edit/:id" component={UserEditPage} />
  //     <Route path="/book/add" component={BookAddPage} />
  //     <Route path="/book/list" component={BookListPage} />
  //     <Route path="/book/edit/:id" component={BookEditPage} />