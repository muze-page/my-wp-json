<script lang="ts" setup>
import { ref, reactive, watchEffect } from "vue";

import { storeToRefs } from "pinia";
import useGetData from "../../../store/get";
// 实例化 store
const get = useGetData();
const test = ref();

//解构
//const { name, fullName } = storeToRefs(get);
//const click = async () => {
//  test.value = await get.getLatest();
//};
//watchEffect(() => {
//  click();
//});

get.getLatest();
test.value = get.data.latest;
</script>

<template>
  <h2 style="text-align: center">测试123</h2>
  {{ test }}
  <el-button type="primary" size="default" 
    >点我获取数据</el-button
  >
</template>
