import { createApp } from 'vue'
import './style.css'


import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//图标
//import * as ElementPlusIconsVue from '@element-plus/icons-vue'

//导入vue-axios模块
import axios from "axios";
import VueAxios from "vue-axios";

//路由
import router from "./router"



import App from './App.vue'

const app = createApp(App)

//注册Element Plus
app.use(ElementPlus)

//注册图标
//for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
//    app.component(key, component)
//}
//注册axios
app.use(VueAxios, axios);

//路由
app.use(router)
app.mount('#app')

