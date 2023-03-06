<script setup></script>

<template>
  简单准备下
  <div class="ls">
    555
    <span>222</span>
  </div>
  <div style="font-size: 20px">
    <!-- 由于SVG图标默认不携带任何属性 -->
    <!-- 你需要直接提供它们 -->
    <Edit style="width: 1em; height: 1em; margin-right: 8px" />
    <Share style="width: 1em; height: 1em; margin-right: 8px" />
    <Delete style="width: 1em; height: 1em; margin-right: 8px" />
    <Search style="width: 1em; height: 1em; margin-right: 8px" />
  </div>
</template>

<style lang="less" scoped>
.ls {
  color: red;
  span {
    color: black;
  }
}
.read-the-docs {
  color: #888;
}
</style>
