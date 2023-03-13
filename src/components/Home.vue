<script lang="ts" setup>
//首页
import LatestNews from "./black/index/Latest-News.vue";
import Featured from "./black/index/Featured.vue";
import MoreNews from "./black/index/More-News.vue";

import { ref, watchEffect } from "vue";

import useGetData from "@/store/get";
// 实例化 store
const store = useGetData();

//存储数据
const data = ref({});

//执行函数，将数据存入pinia
//拿到11行数据
store.getLatest();
//拿到分类文章
store.getCat();
</script>

<template>
  <LatestNews></LatestNews>
  <Featured></Featured>
  <MoreNews></MoreNews>
</template>

<style lang="less" scoped></style>
