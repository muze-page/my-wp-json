<script lang="ts" setup>
import { ref, reactive, watchEffect } from "vue";

import { storeToRefs } from "pinia";
import useGetData from "../../../store/get";
// 实例化 store
const get = useGetData();
const test = ref();

//顶部11个数据
get.getLatest();

//顶部6个数据
get.getCat();

</script>

<template>
  <h2 style="text-align: center">测试1</h2>

  {{ get.data.cat }}
</template>
