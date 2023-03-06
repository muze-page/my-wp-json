<script setup>
//更多
import { reactive } from "vue";
const data = reactive({
  list: [
    {
      link: "#",
      img: "http://magick.plugin/wp-content/uploads/2023/03/2023030609415480.jpg",
      tag: "更新",
      title: " 依托 Apple Watch，研究人员探索更多心脏健康功能0",
      time: "2023 年 2 月 21 日",
    },
    {
      link: "#",
      img: "http://magick.plugin/wp-content/uploads/2023/03/2023030609571941.jpg",
      tag: "特写",
      title: "McIntosh S.E.E.D. 在美国南部与非裔土地所有者共同保护土地和传统",
      time: "2023 年 2 月 15 日",
    },
    {
      link: "#",
      img: "http://magick.plugin/wp-content/uploads/2023/03/2023030609582753.jpg",
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
  <h2 class="section-head">更多新闻</h2>
  <el-row :gutter="20">
    <el-col :span="12" v-for="item in data.list">
      <div class="tile-item">
        <a :href="item.link" class="tile-list">
          <div class="tile__media">
            <img :src="item.img" />
          </div>
          <div class="tile__description">
            <div class="tile__head">
              <div class="tile__category">{{ item.tag }}</div>
              <div class="tile__headline">
                {{ item.title }}
              </div>
            </div>
            <div class="tile__timestamp">{{ item.time }}</div>
          </div>
        </a>
      </div>
    </el-col>
  </el-row>
</template>

<style lang="less" scoped>
.tile-item {
  display: flex;
  flex-direction: column;
  width: 457px;
  margin-bottom: 32px;
  margin-right: 64px;
  flex-grow: 1;
  position: relative;
  .tile-list {
    border-radius: revert;
    overflow: revert;
    z-index: revert;
    position: revert;
    background-color: transparent;
    flex-direction: row;
    width: 457px;

    display: flex;
    .tile__media {
      width: 132px;
      height: 132px;
      min-height: auto;
      flex-basis: auto;
      flex-shrink: 1;

      border-radius: 16px;
      overflow: hidden;
      z-index: 0;
      position: relative;

      direction: ltr;

      flex-grow: 0;
      img {
        width: 100%;
        height: auto;
        transition: @img-tra;
      }
    }
    .tile__description {
      padding: 0 0 0 24px;
      justify-content: center;
      flex-basis: 0;

      display: flex;
      flex-direction: column;
      flex-shrink: 0;
      flex-grow: 1;
      .tile__head {
        .tile__category {
          margin-bottom: 4px;

          font-family: "SF Pro SC", "SF Pro Text", "SF Pro Icons", "PingFang SC",
            "Helvetica Neue", "Helvetica", "Arial", sans-serif;

          font-size: 12px;
          line-height: 1.33337;
          font-weight: 700;

          color: @font-color-assist;
        }
        .tile__headline {
          font-family: "SF Pro SC", "SF Pro Text", "SF Pro Icons", "PingFang SC",
            "Helvetica Neue", "Helvetica", "Arial", sans-serif;

          letter-spacing: 0em;

          font-size: 17px;
          line-height: 1.23536;
          font-weight: 700;

          -webkit-line-clamp: 6;
          -webkit-box-orient: vertical;
          display: -webkit-box;
          overflow: hidden;

          color: @font-color-main;
        }
      }
      .tile__timestamp {
        margin-top: 8px;

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
}
//辅助
.grid-content {
  background-color: rgb(120, 113, 113);
  border-radius: @redius;
  min-height: 36px;
}
//标题
.section-head {
  margin-bottom: 40px;
  font-family: "SF Pro SC", "SF Pro Display", "SF Pro Icons", "PingFang SC",
    "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  font-size: 32px;
  line-height: 1.125;
  font-weight: 700;
  letter-spacing: 0.004em;
}

.tile-list:hover .tile__media img {
  transform: scale(1.03);
  transition: @img-tra;
}
</style>
