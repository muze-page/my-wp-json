<script lang="ts" setup>
//第一个
import { defineProps, withDefaults, onMounted, watchEffect } from "vue";

export interface Props {
  data: {
    titles: string;
    link: string;
    categories: string;
    date: string;
    featured_media: string;
  };
}
const props = withDefaults(defineProps<Props>(), {
  data: {
    titles: "我是标题",
    link: "我是链接",
    categories: "新闻稿",
    date: "2023 年 3 月 2 日",
    featured_media:
      "http://magick.plugin/wp-content/uploads/2023/03/2023030806161731.jpg",
  },
});
</script>

<template>
  <el-row :gutter="20" v-if="data.titles">
    <el-col :span="24">
      <a :href="data.link" target="_blank" class="tile tile-hero">
        <div class="tile__media">
          <el-image
            :src="data.featured_media"
            fit="cover"
            :lazy="true"
          ></el-image>
        </div>

        <div class="tile__description">
          <div class="tile__head">
            <div class="tile__category">{{ data.categories }}</div>

            <div class="tile__headline">
              {{ data.titles }}
            </div>
          </div>
          <div class="tile__timestamp">{{ data.date }}</div>
        </div>
      </a>
    </el-col>
  </el-row>
</template>

<style lang="less" scoped>
.tile-hero {
  flex-direction: row;
  width: 100%;
  .tile__media {
    width: 100%;
    height: auto;
    min-height: 590px;
    flex-basis: 472px;
    flex-shrink: 1;
    > div {
      display: inline;
    }
  }
  .tile__description {
    padding: 32px;
    justify-content: space-between;
    flex-basis: 0;
    .tile__head {
      display: flex;
      flex: 1;
      flex-direction: column;
      .tile__category {
        letter-spacing: 0em;
        margin-bottom: auto;
      }
      .tile__headline {
        font-size: 40px;
        line-height: 1.1;
        font-weight: 700;
        letter-spacing: 0em;
        -webkit-line-clamp: 6;
        -webkit-box-orient: vertical;
        display: -webkit-box;
        overflow: hidden;
        font-family: "SF Pro SC", "SF Pro Display", "SF Pro Icons",
          "PingFang SC", "Helvetica Neue", "Helvetica", "Arial", sans-serif;

        margin-bottom: auto;
        margin-top: 8px;
      }
    }
    .tile__timestamp {
      margin-top: 12px;
      font-family: "SF Pro SC", "SF Pro Text", "SF Pro Icons", "PingFang SC",
        "Helvetica Neue", "Helvetica", "Arial", sans-serif;
      letter-spacing: 0em;
    }
  }
}
.tile-hero:hover .tile__media .image {
  transform: scale(1.03);
  transition: @img-tra;
}
</style>
