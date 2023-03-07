<script setup>
import "../assets/css/home.css";
import Header from "./Header.vue";
import LatestNews from "./black/index/Latest-News.vue";
import Featured from "./black/index/Featured.vue";
import MoreNews from "./black/index/More-News.vue";
import Footer from "./Footer.vue";

import Axios from "./black/Axios.vue";
</script>

<template>
  <Header></Header>
  <LatestNews></LatestNews>
  <Featured></Featured>
  <MoreNews></MoreNews>
  <Footer></Footer>
</template>

<style lang="less" scoped></style>
