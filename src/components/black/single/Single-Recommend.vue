<script lang="ts" setup>
import { reactive } from "vue";
//推荐
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
  ],
});
</script>

<template>
  <aside>
    <div class="component">
      <div class="article-list component-content">
        <h2 class="article-list__heading">最新消息</h2>
        <!---->
        <div class="article-list__item" v-for="item in data.list">
          <a :href="item.link" class="article-list__item__link">
            <div class="article-list__item__img-wrapper">
              <picture>
                <el-image :src="item.img" fit="fill" :lazy="true"></el-image>
              </picture>
            </div>
            <div class="article-list__item__content">
              <div class="article-list__item__category">{{ item.tag }}</div>
              <h3 class="article-list__item__title">
                {{ item.title }}
              </h3>
              <div class="article-list__item__date">{{ item.time }}</div>
            </div>
          </a>
        </div>
        <!---->
      </div>
    </div>
  </aside>
</template>

<style lang="less" scoped>
.component {
  margin-top: 44px;
  margin-bottom: 44px;
}
.article-list {
  border-top: 1px solid #d2d2d7;
  padding-top: 52px;
}

.article-list__heading {
  font-size: 24px;
  line-height: 1.16667;
  font-weight: 700;
  letter-spacing: 0.009em;
  font-family: "SF Pro Display", "SF Pro Icons", "Helvetica Neue", "Helvetica",
    "Arial", sans-serif;
}
.article-list__item {
  margin-top: 0;
  border-bottom: 1px solid #d2d2d7;
  padding-bottom: 32px;
  padding-top: 32px;
}

.article-list__item__link {
  color: #1d1d1f;
  display: flex;
}

//左边
.article-list__item__img-wrapper {
  padding-right: 24px;
  width: 171px;
  picture {
    width: 171px;
    display: block;
    font-size: 0;
    border-radius: 10px;
    overflow: hidden;
    z-index: 0;
    position: relative;
  }
}
//右边
.article-list__item__content {
  display: flex;
  flex-direction: column;
}

.article-list__item__category {
  font-size: 12px;
  line-height: 1.33337;
  font-weight: 600;
  letter-spacing: -0.01em;
  font-family: "SF Pro Text", "SF Pro Icons", "Helvetica Neue", "Helvetica",
    "Arial", sans-serif;
  color: #6e6e73;
  margin-bottom: 4px;
  text-transform: uppercase;
}
.article-list__item__title {
  font-size: 19px;
  line-height: 1.21053;
  font-weight: 700;
  letter-spacing: 0.012em;
  font-family: "SF Pro Display", "SF Pro Icons", "Helvetica Neue", "Helvetica",
    "Arial", sans-serif;
  color: @font-color-main;
}
.article-list__item__date {
  font-size: 14px;
  line-height: 1.28577;
  font-weight: 600;
  letter-spacing: -0.016em;
  font-family: "SF Pro Text", "SF Pro Icons", "Helvetica Neue", "Helvetica",
    "Arial", sans-serif;
  color: @font-color-assist;
  margin-top: 8px;
}
</style>
