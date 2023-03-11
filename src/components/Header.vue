<script lang="ts" setup>
//头部
import HeaderLeft from "./black/Header/Header-Left.vue";
import HeaderRight from "./black/Header/Header-Right.vue";
import HeaderMenu from "./black/Header/Header-Menu.vue";

import { storeToRefs } from "pinia";
import useStatus from "../store/status";

// 实例化 store
const Status = useStatus();
//解构
const { menuSwitch, shade } = storeToRefs(Status);
</script>

<template>
  <nav id="ac-localnav" :class="{ 'active-nav': menuSwitch }">
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
  <!--遮罩-->
  <div
    id="topics-curtain"
    class="topics-curtain"
    :class="{ 'active-shade': shade }"
  ></div>
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
      clear: both; //在左右两侧均不允许浮动元素。
    }

    //详情菜单
  }

  .ac-ln-content::before,
  .ac-ln-content::after {
    content: " ";
    display: table;
  }
}

//遮罩
#topics-curtain {
  background: rgba(0, 0, 0, 0.4);
  opacity: 0;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}
#topics-curtain {
  transition-property: opacity, z-index;
  transition-timing-function: cubic-bezier(0.4, 0, 0.25, 1);
  transition-duration: 0.4s;
  transition-delay: 0s;
}
//菜单切换
#ac-localnav.active-nav {
  //切换背景色
  .ac-ln-background {
    backdrop-filter: saturate(180%) blur(20px);
    background-color: rgba(255, 255, 255, 0.9);
  }

}
//遮罩切换
.active-shade {
  opacity: 1 !important;
  z-index: 9996 !important;
}
</style>
