<script setup>
import HeaderLeft from "./black/Header/Header-Left.vue";
import HeaderRight from "./black/Header/Header-Right.vue";
import HeaderMenu from "./black/Header/Header-Menu.vue";

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

      <HeaderMenu></HeaderMenu>
    </div>
  </nav>
</template>

<style lang="less" scoped>
//顶部
#ac-localnav {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 52px;
  min-width: 1024px;
  z-index: 9997;
}

//公用
#ac-localnav {
  height: 4.05882rem;
  //固定顶部
  position: sticky;

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
      background-color: rgba(255, 255, 255, 0.7);

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

      backdrop-filter: saturate(180%) blur(20px);
    }
    //菜单布局
    .ac-ln-content {
      margin: 0 auto;
      max-width: 980px;
      padding: 0 22px;
      position: relative;
      z-index: 2;
      padding-left: calc(max(22px, env(safe-area-inset-left)));
      padding-right: calc(max(22px, env(safe-area-inset-right)));
    }
    .ac-ln-content::after {
      clear: both;//在左右两侧均不允许浮动元素。
    }

    //详情菜单
  }
  .ac-ln-content::before,
  .ac-ln-content::after {
    content: " ";
    display: table;
  }
}
</style>
