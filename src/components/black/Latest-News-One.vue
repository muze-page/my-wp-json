<script setup>
//第一个
import { reactive } from "vue";
const data = reactive({
  list: [
    {
      link: "#",
      img: "http://magick.plugin/wp-content/uploads/2023/03/9ec7908a5d9f8d94d26956c81a48f3d6.jpg",
      tag: "更新",
      title: " Apple 女性健康研究促进月经相关科学发展",
      time: "2023 年 3 月 2 日",
    },
  ],
});
</script>

<template>
  <el-row :gutter="20">
    <el-col :span="24" v-for="item in data.list">
      <a :href="item.link" class="tile-hero">
        <div class="tile__media">
          <img :src="item.img" />
        </div>

        <div class="tile__description">
          <div class="tile__head">
            <div class="tile__category">{{ item.tag }}</div>
            <div class="tile__headline">{{ item.title }}</div>
          </div>
          <div class="tile__timestamp">{{ item.time }}</div>
        </div>
      </a>
    </el-col>
  </el-row>
</template>

<style lang="less" scoped>
.tile-hero {
  height: 365px;
  background-color: #fff;
  display: flex;
  border-radius: @redius;
  overflow: hidden;
  z-index: 0;
  position: relative;
  .tile__media {
    min-height: 362px;
    flex-basis: 643px;
    flex-shrink: 1;
    img {
      width: 100%;
      height: auto;
      transition: @img-tra;
    }
  }
  .tile__description {
    padding: 32px;
    justify-content: space-between;
    flex-basis: 0;

    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    flex-grow: 1;
    .title__heard {
      .tile__category {
        color: @font-color-assist;
        letter-spacing: 0em;
        margin-bottom: 8px;
        font-size: 12px;
        line-height: 1.33337;
        font-weight: 700;
      }
      .tile__headline {
        font-size: 32px;
        line-height: 1.125;
        font-weight: 700;
        letter-spacing: 0.004em;
        -webkit-line-clamp: 6;
        -webkit-box-orient: vertical;
        display: -webkit-box;
        overflow: hidden;
        color: #1d1d1f;
        font-family: "SF Pro SC", "SF Pro Display", "SF Pro Icons",
          "PingFang SC", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
      }
    }
    .tile__timestamp {
      font-family: "SF Pro SC", "SF Pro Text", "SF Pro Icons", "PingFang SC",
        "Helvetica Neue", "Helvetica", "Arial", sans-serif;
      letter-spacing: 0em;
      font-size: 14px;
      line-height: 1.28577;
      font-weight: 600;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      color: @font-color-assist;
    }
  }
}
.tile-hero:hover .tile__media img {
  transform: scale(1.03);
  transition: @img-tra;
}
</style>
