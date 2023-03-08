<script setup>
import "../assets/css/home.css";
import Header from "./Header.vue";
import Home from "./Home.vue";
import Footer from "./Footer.vue";

import Axios from "./black/Axios.vue";
</script>

<template>
  <Header></Header>
  <p>
    <!-- route-link是路由跳转组件，用to来指定要跳转的路由-->
    <router-link to="/home">首页</router-link>
    <router-link to="/single">文章页</router-link>
  </p>
  <!-- router-view是路由页面的出口，路由匹配到的组件会渲染在此-->
  <router-view></router-view>

  <Footer></Footer>
</template>

<style lang="less" scoped></style>
