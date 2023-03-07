<script setup>
import HeaderLeft from "./black/Header/Header-Left.vue";
import HeaderRight from "./black/Header/Header-Right.vue";
//头部
</script>

<template>
  <nav id="ac-localnav">
    <div class="ac-ln-wrapper">
      <!--背景-->
      <div class="ac-ln-background"></div>
      <!--菜单布局-->
      <div class="ac-ln-content">
        <!--标题-->
        <HeaderLeft></HeaderLeft>

        <!--搜索-->
        <HeaderRight></HeaderRight>
      </div>
      <!--详情菜单-->
      <div class="topics--wide"></div>
    </div>
  </nav>
</template>

<style lang="less" scoped>
//公用
#ac-localnav {
  height: 3.05882rem;
  .ac-ln-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: auto;
    min-height: 100%;
    z-index: 1;
    //背景
    .ac-ln-background {
      transition-property: backdrop-filter, -webkit-backdrop-filter,
        background-color;
      transition-timing-function: cubic-bezier(0.4, 0, 0.25, 1);
      transition-duration: 0.4s;
      transition-delay: 0s;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
    }
    //菜单布局
    .ac-ln-content {
      margin: 0 auto;
      max-width: 980px;
      padding: 0 22px;
      position: relative;
      z-index: 2;
      padding-left: calc(22px + constant(safe-area-inset-left));
      padding-right: calc(22px + constant(safe-area-inset-right));
    }
    //详情菜单
    .topics--wide {
      letter-spacing: 0em;

      visibility: hidden;
      position: relative;
      z-index: 2;
      font-size: 14px;
      line-height: 1.42859;
      font-weight: 400;

      font-family: "SF Pro Text", "SF Pro Icons", "Helvetica Neue", "Helvetica",
        "Arial", sans-serif;
      max-height: 0;
      color: #1d1d1f;
      overflow: hidden;
    }
  }
}



</style>
