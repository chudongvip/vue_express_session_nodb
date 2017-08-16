/**
 * Created by Mark.C on 2017/8/16.
 */
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

// 1. 定义路由组件
import Login from '../components/login.vue';
import Home from '../components/home.vue';
import Times from '../components/times.vue';

// 2. 定义路由
const routes = [
    { path: '/', component: Login },
    { path: '/home', component: Home },
    { path: '/times', component: Times }
];

// 3. 创建路由实例
const router = new VueRouter ({
    mode: 'history',
    routes: routes
});

export default router;