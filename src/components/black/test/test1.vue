<script>
import { provide } from "vue";
import ComponentB from "./test2.vue";

export default {
  components: {
    ComponentB,
  },
  setup() {
    const changeTextColor = (newColor) => {
      textColor.value = newColor; // 修改被提供的textColor变量的值
    };

    provide("textColor", textColor); // 将textColor变量暴露给下层组件
    return {
      changeTextColor,
    };
  },
};
</script>

<template>
    <button @click="changeTextColor('red')">change to red</button> <!-- 点击改变文字颜色 -->
    <ComponentB/>
  </template>