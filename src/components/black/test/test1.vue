<script lang="ts" setup>
import { ref, reactive, watchEffect } from "vue";


import useGetData from "../../../store/get";
// 实例化 store
const get = useGetData();

//获取顶部11个数据
get.getLatest();

//获取顶部6个数据
get.getCat();
</script>

<template>
  <h2 style="text-align: center">测试1</h2>

  {{ get.data.cat }}
</template>
