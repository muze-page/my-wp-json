<script lang="ts" setup>
import { storeToRefs } from "pinia";
import useStatus from "../../../store/status";
// 实例化 store
const Status = useStatus();
//解构
const { menuSwitch } = storeToRefs(Status);

//通过menuSwitch控制菜单状态，默认为false



</script>

<template>
  <div class="topics--wide"  :class="{ active: menuSwitch }">
    <div class="topics-content">
      <!--开始循环-->
      <div class="topic-group" v-for="indexs of 4">
        <div class="topic-item"  v-for="index of 4">
          <a href="#">AirPods {{ indexs + "-" + index }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.topics--wide {
  visibility: hidden;
  position: relative;
  z-index: 2;
  font-size: 14px;
  line-height: 1.42859;
  font-weight: 400;
  letter-spacing: -0.016em;
  font-family: "SF Pro Text", "SF Pro Icons", "Helvetica Neue", "Helvetica",
    "Arial", sans-serif;
  max-height: 0;
  color: #1d1d1f;

  overflow: hidden;
}
.topics--wide {
  transition-property: max-height, visibility;
  transition-timing-function: cubic-bezier(0.4, 0, 0.25, 1);
  transition-duration: 0.4s, 0s;
  transition-delay: 0s, 0.4s;
}
.topics-content {
  display: flex;
  flex-flow: row nowrap;
  max-width: 980px;
  padding: 40px 22px 64px;
  padding-left: calc(22px + constant(safe-area-inset-left));
  padding-right: calc(22px + constant(safe-area-inset-right));
  margin-left: auto;
  margin-right: auto;
}

.topic-group {
  flex-grow: 0;
  flex-shrink: 1;
  box-sizing: border-box;
  padding-right: 24px;

  flex-basis: 25%;
}
.topic-item {
  opacity: 0;
  transform: translate3d(0, -20px, 0);

  transition-property: transform, opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.25, 1);
  transition-duration: 0.4s, 0.2s;
  transition-delay: 0s;
  transition-delay: 0;
  a {
    color: inherit;
  }
  a:hover {
    color: #06c;
  }
}
.topic-item:not(:first-of-type) {
  margin-top: 12px;
}

@media only screen and (min-width: 768px) {
  .topics--wide {
    transition-delay: 0s;
    visibility: visible;
  }
  .topics-content {
    padding-left: calc(max(22px, env(safe-area-inset-left)));
    padding-right: calc(max(22px, env(safe-area-inset-right)));
  }
  .topic-item {
    opacity: 1;
    transition-duration: 0.4s;
    transform: translate3d(0, 0, 0);
  }
  .topic-item:nth-child(1) {
    transition-delay: 0.2s;
  }
  .topic-item:nth-child(2) {
    transition-delay: 0.25s;
  }
  .topic-item:nth-child(3) {
    transition-delay: 0.3s;
  }
  .topic-item:nth-child(4) {
    transition-delay: 0.35s;
  }
}

//切换菜单
//前
.topics--wide {
  max-height: 0px;
  .topic-item {
    opacity: 0;
    transform: translate3d(0px, 0px, 0px);
  }
}
.active {
  max-height: 220px;
  .topic-item {
    opacity: 1;
    transform: translate3d(0px, -20px, 0px);
  }
}
</style>
