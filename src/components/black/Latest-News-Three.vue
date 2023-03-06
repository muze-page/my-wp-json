<script setup>
//第二个
import { reactive } from "vue";

const data = reactive({
  list: [
    {
      link: "#",
      img: "http://magick.plugin/wp-content/uploads/2023/03/5af76af474e023b42408a4fcf02f148a.jpg",
      tag: "更新",
      title: " 依托 Apple Watch，研究人员探索更多心脏健康功能0",
      time: "2023 年 2 月 21 日",
    },
    {
      link: "#",
      img: "http://magick.plugin/wp-content/uploads/2023/03/2023030608522233.jpg",
      tag: "特写",
      title: "McIntosh S.E.E.D. 在美国南部与非裔土地所有者共同保护土地和传统",
      time: "2023 年 2 月 15 日",
    },
    {
      link: "#",
      img: "http://magick.plugin/wp-content/uploads/2023/03/2023030608522269.jpg",
      tag: "特写",
      title: "iPad 助力中国餐饮零售行业焕发新生",
      time: "2023 年 2 月 8 日",
    },
    {
      link: "#",
      img: "http://magick.plugin/wp-content/uploads/2023/03/2023030608522248.jpg",
      tag: "新闻稿",
      title: "Apple 公布第一季度业绩",
      time: "2023 年 2 月 8 日",
        },
        {
      link: "#",
      img: "http://magick.plugin/wp-content/uploads/2023/03/2023030608522248.jpg",
      tag: "新闻稿",
      title: "Apple 公布第一季度业绩",
      time: "2023 年 2 月 8 日",
        },
        {
      link: "#",
      img: "http://magick.plugin/wp-content/uploads/2023/03/2023030608522248.jpg",
      tag: "新闻稿",
      title: "Apple 公布第一季度业绩",
      time: "2023 年 2 月 8 日",
    },
  ],
});
</script>

<template>
   <el-row :gutter="20">
  <el-col :span="8" v-for="item in data.list" style="margin-top: 36px">
    <a :href="item.link" class="tile-3up">
      
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
.tile-3up {
  flex-direction: column;
  width: 303px;
  height: 100%;

  background-color: #fff;
  display: flex;
  border-radius: 16px;
  overflow: hidden;
  z-index: 0;
  position: relative;
  .tile__media {
    width: 100%;
    height: 170px;
    min-height: auto;
    flex-basis: auto;
    flex-shrink: 1;

    direction: ltr;

    position: relative;
    z-index: 0;
    flex-grow: 0;
    overflow: hidden;
    img {
      width: 100%;
      height: auto;
      transition: @img-tra;
    }
  }
  .tile__description {
    padding: 24px;
    justify-content: space-between;
    flex-basis: auto;
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    flex-grow: 1;
    .tile__head {
      .tile__category {
        color: @font-color-assist;
        margin-bottom: 8px;
        letter-spacing: 0em;
        font-size: 12px;
        line-height: 1.33337;
        font-weight: 700;
        font-family: "SF Pro SC", "SF Pro Text", "SF Pro Icons", "PingFang SC",
          "Helvetica Neue", "Helvetica", "Arial", sans-serif;
      }
      .tile__headline {
        font-size: 24px;
        line-height: 1.16667;
        font-weight: 700;
        letter-spacing: 0.009em;
        font-family: "SF Pro SC", "SF Pro Display", "SF Pro Icons",
          "PingFang SC", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
        -webkit-line-clamp: 6;
        -webkit-box-orient: vertical;
        display: -webkit-box;
        overflow: hidden;

        color: #1d1d1f;
      }
    }
  }
  .tile__timestamp {
    margin-top: 12px;
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
.tile-3up:hover .tile__media img {
  transform: scale(1.03);
  transition: @img-tra;
}
</style>
