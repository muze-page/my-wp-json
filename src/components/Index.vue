<script setup>
import "../assets/css/home.css";
import Header from "./Header.vue";
import Footer from "./Footer.vue";

import useGetData from "@/store/get";
// 实例化 store
const get = useGetData();

//获取顶部11个数据
get.getLatest();

//获取顶部6个数据
get.getCat();
</script>

<template>
  <Header></Header>

  <main id="main" class="main">
    <!-- router-view是路由页面的出口，路由匹配到的组件会渲染在此-->
    <router-view></router-view>
  </main>
  <Footer></Footer>
</template>

<style lang="less" scoped>
main {
  display: block;
}
</style>
