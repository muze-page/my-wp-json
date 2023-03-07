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
  <section class="more-from-newsroom">
    <div class="section-content">
      <h2 class="section-head">更多新闻</h2>
      <el-row :gutter="0" class="section-tiles">
        <el-col :span="12" class="tile-item" v-for="item in data.list">
          <a :href="item.link" class="tile tile-list">
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
        </el-col>
      </el-row>
    </div>

    <div class="view-archive-wrapper" round>
      <a href="#" class="nr-cta-primary-light"> 阅读历史文章 </a>
    </div>
  </section>
</template>

<style lang="less" scoped>
.more-from-newsroom {
  padding-top: 80px;
  padding-bottom: 80px;
  background-color: #fff;
  overflow: hidden;

  .section-head {
    margin-bottom: 40px;
    font-family: "SF Pro SC", "SF Pro Display", "SF Pro Icons", "PingFang SC",
      "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  }
  .section-tiles {
    margin-right: -64px;
    margin-top: 0;
    justify-content: flex-start;
  }
}

.tile-item {
  display: flex;
  flex-direction: column;
  width: 457px;
  margin-bottom: 32px;
  margin-right: 0px;
  flex-grow: 1;

  .tile-list {
    border-radius: revert;
    overflow: revert;
    z-index: revert;
    position: revert;
    background-color: transparent;
    flex-direction: row;
    width: 457px;

    height: 100%;
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
          letter-spacing: 0em;
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
        }
      }
      .tile__timestamp {
        margin-top: 8px;

        font-family: "SF Pro SC", "SF Pro Text", "SF Pro Icons", "PingFang SC",
          "Helvetica Neue", "Helvetica", "Arial", sans-serif;

        letter-spacing: 0em;
      }
    }
  }
}

//按钮
.view-archive-wrapper {
  margin-top: 40px;
  font-family: "SF Pro SC", "SF Pro Text", "SF Pro Icons", "PingFang SC",
    "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  letter-spacing: 0em;
  font-size: 17px;
  line-height: 1.23536;
  font-weight: 500;
  text-align: center;
  .nr-cta-primary-light {
    border-radius: 30px;

    transition: background-color 300ms cubic-bezier(0.4, 0, 0.25, 1) 0ms,
      border-color 300ms cubic-bezier(0.4, 0, 0.25, 1) 0ms,
      color 300ms cubic-bezier(0.4, 0, 0.25, 1) 0ms;
    font-size: 17px;
    line-height: 1.23536;
    font-weight: 600;
    letter-spacing: -0.022em;
    font-family: "SF Pro Text", "SF Pro Icons", "Helvetica Neue", "Helvetica",
      "Arial", sans-serif;
    border: 2px solid;
    padding: 10px 24px 10px;
    border-color: #1d1d1f;
    color: #161617;
  }
}

.tile-item:nth-child(odd)::after {
  width: calc(100% + (32px * 2));
}

.tile-item::after {
  content: "";
  flex: 0 0 auto;
  height: 1px;
  display: block;
  background-color: #d0d0d0;
  margin-top: 32px;
}


</style>
