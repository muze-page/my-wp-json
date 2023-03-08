

//导入Vue Router模块中的两个方法
import { createRouter, createWebHashHistory } from "vue-router";
//导入路由需要用到的自定义组件
import Home from "../components/Home.vue";
import Single from "../components/Single.vue";


//定义路由
const routes = [
    { path: "/home", component: Home },
    { path: "/single", component: Single },
];

//创建路由对象
const router = createRouter({
    history: createWebHashHistory(),
    routes: routes,
});
export default router
