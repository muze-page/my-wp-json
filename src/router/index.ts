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
    { path: "/",name:'index', component: Home },
    { path: "/:id",name:'single', component: Single },
    { path: "/category",name:'category', component: Category },
    { path: '/:pathMatch(.*)',name:'notfound', component: NotFoundComponent },
    { path: '/test',name:'test', component: Test },
];

//创建路由对象
const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});
export default router
