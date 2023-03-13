<script lang="ts" setup>
import axios from "axios";
import { ref } from "vue";

import useGetData from "@/store/get";
// 实例化 store
const store = useGetData();

//新建一个变量，存储待渲染数据
const list = ref({});
//通过axios拿到值
axios
  .get("http://magick.plugin/wp-json/wp/v2/media/2312?_fields=source_url")
  .then((resp) => {
    store.test = resp.data;
  });

store.getLatest();

//list从pinia中取值
list.value = store.test;
</script>

<template>我拿到的值{{ store.data.latest }}</template>

<style scoped></style>
