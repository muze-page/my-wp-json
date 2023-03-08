<script setup>
import "../assets/css/home.css";
import Header from "./Header.vue";
import Footer from "./Footer.vue";
</script>

<template>
  <Header></Header>
  <!-- router-view是路由页面的出口，路由匹配到的组件会渲染在此-->
  <router-view></router-view>

  <Footer></Footer>
</template>

<style lang="less" scoped></style>
