<script setup>
//404页
//图标
import { Close } from "@element-plus/icons-vue";
</script>

<template>
  <aside class="desktop-notification">
    <div id="sdn-content" class="sdn-content">
      <div class="banner-copy">
        <div>
          Apple Newsroom 需要你的许可来<span
            class="banner-trigger"
            id="sdn-trigger"
            >启用桌面通知</span
          >，以便在有新文章发布时向你推送通知。
        </div>
      </div>

      <el-button id="sdn-dismissal" class="icon-close" :icon="Close" circle />
    </div>
  </aside>
</template>

<style lang="less" scoped>
.page-article {
  .desktop-notification {
    padding-top: 16px;
    padding-bottom: 48px;

    //visibility: visible;
  }
  .sdn-content {
    background-color: #f5f5f7;

    //display: block;
    opacity: 1;
    .banner-copy {
      flex-grow: 1;
      display: flex;
      justify-content: center;
    }
    .banner-trigger {
      color: #06c;
    }
    .icon-close {
      font-size: 14px;
      line-height: 0;

      margin-top: -24px;
      margin-bottom: -24px;
      flex: none;
    }
  }
}
//细节调整
.desktop-notification .sdn-content {
  background-color: #fff;
}
//公共
.desktop-notification {
  display: flex;
  justify-content: center;
  color: #1d1d1f;
  box-sizing: border-box;
  margin-bottom: 0;
  transition: margin-bottom 310ms cubic-bezier(0.25, 0.01, 0.25, 1);
  visibility: hidden;
  font-size: 12px;
  line-height: 1.33337;
  font-weight: 600;
  letter-spacing: -0.01em;
  font-family: "SF Pro Text", "SF Pro Icons", "Helvetica Neue", "Helvetica",
    "Arial", sans-serif;
}

.sdn-content {
  display: none;
  justify-content: space-between;
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;
  width: 980px;
  border-radius: 10px;
  padding: 24px 0 24px 24px;
  opacity: 0;
  transition: opacity 310ms ease-in-out;
}
</style>
