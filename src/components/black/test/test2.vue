<script>
import { ref } from "vue";
import { inject } from "vue";

export default {
  setup() {
    const textColors = inject("textColor"); // 获取父组件提供的颜色变量

    const textColor = ref("black");

    return {
      textColor,
      textColors,
    };
  },
};
</script>

<template>
  <div :style="{ color: textColor }">Sample Text</div>
  <h1>666</h1>
  <!-- 使用textColor变量来渲染文字颜色 -->
</template>
