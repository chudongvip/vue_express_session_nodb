import Vue from 'vue'
import App from './App.vue'
import axios from 'axios';
// 引入配置
import config from './config';

if (config.Debug) {
    axios.defaults.baseURL = 'http://localhost:3000/';
} else {

}

// 请求默认配置
axios.defaults.withCredentials = true;
//全局应用
global.axios = axios;

// 获取路由实例
import router from './routers';

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})
