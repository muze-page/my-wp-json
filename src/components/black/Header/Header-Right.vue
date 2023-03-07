<script setup>
//文底部
</script>

<template>
  <div class="ac-ln-menu">
    <div class="ac-ln-menu-tray">
      <ul class="ac-ln-menu-items"></ul>
    </div>
  </div>
</template>

<style lang="less" scoped>
.ac-ln-menu {
  letter-spacing: 0em;

  font-size: 12px;
  line-height: 1;
  font-weight: 400;
  font-family: "SF Pro Text", "SF Pro Icons", "Helvetica Neue", "Helvetica",
    "Arial", sans-serif;
  float: right;
  margin-top: 0;
  .ac-ln-menu-tray {
    transition-property: height, visibility;
    transition-timing-function: cubic-bezier(0.4, 0, 0.25, 1);
    transition-duration: 0.4s;
    transition-delay: 0s, 0.4s;

    float: left;
    padding-top: 18px;
  }
}
</style>
