<script lang="ts" setup>
import useGetData from "@/store/get";
import SingleFunctionQr from "@/components/black/single/Single-Function-Qr.vue";
import { Link, Share, Message } from "@element-plus/icons-vue";

import { ref, onMounted, watchEffect } from "vue";
// 实例化 store
const store = useGetData();
//从pinia中取出值
const data = ref();
watchEffect(() => {
  data.value = store.data.post;
});
onMounted(() => {
  data.value = store.data.post;
});

//核心内容
</script>

<template>
  <div class="article-header">
    <!--分类和时间-->
    <div class="category component">
      <div class="component-content">
        <div class="category-eyebrow">
          <span class="category-eyebrow__category"> {{ data.cat }}</span>

          <span class="category-eyebrow__date"> {{ data.data }}</span>
        </div>
      </div>
    </div>
    <!--标题-->
    <div class="pagetitle component">
      <div class="component-content">
        <h1 class="hero-headline">
          {{ data.title }}
        </h1>
      </div>
    </div>
    <!--副标题-->
    <div class="article-subhead component">
      <div class="component-content">
        {{ data.excerpt }}
      </div>
    </div>
    <!--社交分享-->
    <div class="sharesheet component">
      <div class="component-content">
        <ul class="sharesheet-options">
          <li class="social-option">
            <SingleFunctionQr></SingleFunctionQr>
          </li>
          <li class="social-option">
            <el-button text size="default" :icon="Share"></el-button>
          </li>
          <li class="social-option">
            <el-button text size="default" :icon="Message"></el-button>
          </li>
          <li class="social-option">
            <el-button text size="default" :icon="Link"></el-button>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <!--文章内容-->
  <div class="entry-content">
    {{ data.content }}
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
  //z-index: 2;
  list-style: none;
  color: currentColor;
  opacity: 1;
  display: block;

  margin-top: 12px;
  //模态框
  :deep(.modal-content-container) {
    border-radius: @redius;
    header {
      button {
        border: none;
        i {
          height: 36px;
          width: 36px;
          svg {
            height: 36px;
            width: 36px;
          }
        }
      }
    }
  }
}
</style>
