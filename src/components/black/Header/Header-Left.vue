<script setup>
//文底部
</script>

<template>
  <div class="ac-ln-title">
    <a href="#">Newsroom</a>
  </div>
</template>

<style lang="less" scoped>
.ac-ln-title {
  font-size: 21px;
  line-height: 1.14286;
  font-weight: 600;
  letter-spacing: 0.011em;
  font-family: "SF Pro Display", "SF Pro Icons", "Helvetica Neue", "Helvetica",
    "Arial", sans-serif;
  cursor: default;
  display: block;
  float: left;
  margin: 14px 0 -14px;
  padding: 0;
  height: 52px;
  white-space: nowrap;
  a {
    display: inline-block;
    letter-spacing: inherit;
    line-height: inherit;
    margin: 0;
    text-decoration: none;
    white-space: nowrap;
  }
}

//菜单颜色
.ac-ln-title,
.ac-ln-title a {
  color: #1d1d1f;
  -webkit-transition: color 0.5s cubic-bezier(0.28, 0.11, 0.32, 1);
  transition: color 0.5s cubic-bezier(0.28, 0.11, 0.32, 1);
}
</style>
