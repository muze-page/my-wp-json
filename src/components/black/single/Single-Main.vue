<script lang="ts" setup>
import { Promotion, Link, Share, Message } from "@element-plus/icons-vue";
//核心内容
</script>

<template>
  <div class="article-header">
    <!--分类和时间-->
    <div class="category component">
      <div class="component-content">
        <div class="category-eyebrow">
          <span class="category-eyebrow__category">新闻稿</span>

          <span class="category-eyebrow__date">2023 年 3 月 7 日</span>
        </div>
      </div>
    </div>
    <!--标题-->
    <div class="pagetitle component">
      <div class="component-content">
        <h1 class="hero-headline">
          你好，黄色！Apple 推出新款 iPhone&nbsp;14 和 iPhone&nbsp;14&nbsp;Plus
        </h1>
      </div>
    </div>
    <!--副标题-->
    <div class="article-subhead component">
      <div class="component-content">
        iPhone 14
        系列产品新增美观的黄色配色，具备出类拔萃的电池续航能力、可拍摄专业级照片及视频的强大双摄系统及车祸检测等开创性安全功能
      </div>
    </div>
    <!--社交分享-->
    <div class="sharesheet component">
      <div class="component-content">
        <ul class="sharesheet-options">
          <li class="social-option">
            <el-button size="default" :icon="Promotion"></el-button>
          </li>
          <li class="social-option">
            <el-button size="default" :icon="Share"></el-button>
          </li>
          <li class="social-option">
            <el-button size="default" :icon="Message"></el-button>
          </li>
          <li class="social-option">
            <el-button size="default" :icon="Link"></el-button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.category.component {
  margin-top: 0;
  margin-bottom: 20px;
}

.category-eyebrow {
  font-size: 12px;
  line-height: 1.33337;
  font-weight: 700;
  letter-spacing: 0em;
  font-family: "SF Pro Text", "SF Pro Icons", "Helvetica Neue", "Helvetica",
    "Arial", sans-serif;
}

.category-eyebrow__category {
  text-transform: uppercase;
  color: #6e6e73;
  border-color: #6e6e73;
}
.category-eyebrow__category,
.category-eyebrow__date {
  display: block;
}

.category-eyebrow__date {
  font-size: 14px;
  line-height: 1.28577;
  font-weight: 600;

  font-family: @font-family-main;
  letter-spacing: 0em;
  margin-top: 4px;
  color: @font-color-assist;
}

//标题
.pagetitle.component {
  margin-top: 0;
  margin-bottom: 0;
}
.hero-headline {
  font-size: 48px;
  line-height: 1.08349;
  font-weight: 700;
  //letter-spacing: -.003em;
  letter-spacing: 0em;
  font-family: "SF Pro SC", "SF Pro Display", "SF Pro Icons", "PingFang SC",
    "Helvetica Neue", "Helvetica", "Arial", sans-serif;
}
//副标题
.article-subhead {
  font-size: 24px;
  line-height: 1.16667;
  font-weight: 500;
  letter-spacing: 0.009em;
  font-family: "SF Pro SC", sans-serif;
  margin-top: 20px;
  margin-bottom: 0;
}

.sharesheet {
  margin-bottom: 0;
  margin-top: 24px;
}

//图标
.sharesheet-options {
  height: 42px;
  overflow: visible;
}
.social-option {
  position: relative;
  z-index: 2;
  list-style: none;
  color: currentColor;
  opacity: 1;
  display: block;

  margin-top: 12px;
  .el-button {
    font-size: 24px;
    line-height: 24px;
    height: 24px;
    padding: 6px;
    margin-top: -6px;
    margin-bottom: -6px;

    border: none;
  }
  .el-button:hover {
    background-color: #ecf5ff00;
  }
}
</style>
