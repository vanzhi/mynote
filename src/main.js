// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import 'bootstrap'
// import bootstrap from 'bootstrap'
import Vue from 'vue'
import VueRouter from 'vue-router'
import api from './config/api'

import App from './App.vue'
import routes from './config/routes'
import templateRoutes from './config/templateRoutes'

// 放在sass引入css文件会报错，也不知道为什么
// import bootstrap from './style/3rd/bootstrap.css'

// 引入element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import { Button, Select } from 'element-ui'

console.log(Button, Select)

Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.prototype.$api = api;

const router = new VueRouter({
	routes : templateRoutes
});
new Vue ({
	router,
	el: '#app',
	render: (h) => h(App)
})
