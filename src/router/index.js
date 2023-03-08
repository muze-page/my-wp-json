//导入Vue Router模块中的两个方法
import { createRouter, createWebHistory } from "vue-router";
//导入路由需要用到的自定义组件
import Home from "../components/Home.vue";
import Single from "../components/Single.vue";
import NotFoundComponent from "../components/404.vue";


//定义路由
const routes = [
    { path: "/", component: Home },
    { path: "/single", component: Single },
    { path: '/:pathMatch(.*)', component: NotFoundComponent },
];

//创建路由对象
const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});
export default router
