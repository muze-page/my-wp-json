//导入Vue Router模块中的两个方法
import { createRouter, createWebHistory } from "vue-router";
//导入路由需要用到的自定义组件
import Home from "../components/Home.vue";
import Single from "../components/Single.vue";
import Category from "../components/Category.vue";
import NotFoundComponent from "../components/404.vue";
import Test from "../components/Test.vue";


//定义路由
const routes = [
    { path: "/", component: Home },
    { path: "/single", component: Single },
    { path: "/category", component: Category },
    { path: '/:pathMatch(.*)', component: NotFoundComponent },
    { path: '/test', component: Test },
];

//创建路由对象
const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});
export default router
