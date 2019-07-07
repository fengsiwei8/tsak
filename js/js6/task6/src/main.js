import Vue from 'vue';//固定写法
import App from './App.vue';
//引入axios
import axios from '../node_modules/axios';//引入AXIOS跨域用
Vue.prototype.$axios=axios;
import VueRouter from 'vue-router';//引入并USE
Vue.use(VueRouter);

//引入过滤器文件
import * as custom from './filter/filters.js' // 引入我们刚刚创建的文件
// 全局注册
Object.keys(custom).forEach(key => { Vue.filter(key, custom[key])})


import Element from 'element-ui'//把饿了么的UI组件用用并USE
//将里面的css样式引进
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(Element);

// import EditorBar from 'wangeditor'//把饿了么的UI组件用用并USE
// Vue.use(EditorBar);

//创建组件
import Login from './components/Login.vue';////Login是起名字  './components/Login'是文件地

import Back from './components/Back.vue';

import List from './components/List.vue';

import Edit from './components/Edit.vue';
import Welcome from './components/Welcome.vue';

//2.配置路由   注意：名字

const routes = [
    { path: '/login', component: Login },//path后面是url地址，component后面是文件地址代表的名字。
    { path: '/back', component: Back,
        children: [
            {path: 'list', component: List,name:'list'},
            {path: 'edit', component: Edit,name:'edit'},
            {path: 'welcome', component: Welcome},
        ]
    },
    { path: '*', redirect: '/login' }   /*默认跳转路由*/
]


const router = new VueRouter({

  routes // （缩写）相当于 routes: routes
})



new Vue({
  el: '#app',
  router,
    axios,
  render: h => h(App),
})


