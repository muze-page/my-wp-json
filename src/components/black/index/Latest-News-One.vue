<script setup>
//第一个
import { ref, reactive, onMounted } from "vue";


import axios from "axios";

//基础数据
const data = reactive({
  list: [
    //{
    //  link: "#",
    //  img: "http://magick.plugin/wp-content/uploads/2023/03/9ec7908a5d9f8d94d26956c81a48f3d6.jpg",
    //  tag: "更新",
    //  title: " Apple 女性健康研究促进月经相关科学发展",
    //  time: "2023 年 3 月 2 日",
    //},
  ],
});

//获取媒体图片链接
let api_media = ref("");
let media_url = ref("");

onMounted(() => {
  //数据初始化
  requestData();
  //获取图片链接
  requestMedia();
});

//获取基础数据
const requestData = () => {
  const site = "http://magick.plugin";
  const api = `${site}/wp-json/wp/v2/posts/2311`;
  console.log("待检查的API是：" + api);
  axios.get(api).then((response) => {
    console.log(response.data);
    data.list.push(response.data);
    api_media.value = data.list[0].featured_media;
  });
};

//获取图片链接
const requestMedia = () => {
  const api = "http://magick.plugin/wp-json/wp/v2/media/2312";
  axios.get(api).then((response) => {
    console.log(response.data);
    media_url.value = response.data.source_url;
    media_url.value = "url(" + media_url.value + ")";
  });
};

//返回11个帖子，需要其中的link\tag\title\date\featured_media
</script>

<template>
  <!--
  <h1>111{{ media_url ?? "没有值" }}</h1>
-->
  <el-row :gutter="20">
    <el-col :span="24" v-for="item in data.list">
      <a :href="item.link" target="_blank" class="tile tile-hero">
        <div class="tile__media">
          <div class="image image-hero"></div>
          <!--
          <img
            :src="
              media_url ??
              'http://magick.plugin/wp-content/uploads/2023/03/9ec7908a5d9f8d94d26956c81a48f3d6.jpg'
            "
          />
          -->
        </div>

        <div class="tile__description">
          <div class="tile__head">
            <div class="tile__category">{{ item.tag ?? "默认" }}</div>
            <div class="tile__headline">{{ item.title.rendered }}</div>
          </div>
          <div class="tile__timestamp">{{ item.date }}</div>
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
    min-height: 362px;
    flex-basis: 643px;
    flex-shrink: 1;
    .image {
      transition: @img-tra;
    }
    .image-hero {
      background: v-bind("media_url") no-repeat top;

      background-size: cover;
      height: 100%;
    }
  }
  .tile__description {
    padding: 32px;
    justify-content: space-between;
    flex-basis: 0;
    .tile__head {
      .tile__category {
        letter-spacing: 0em;
        margin-bottom: 8px;
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
        font-family: "SF Pro SC", "SF Pro Display", "SF Pro Icons",
          "PingFang SC", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
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
