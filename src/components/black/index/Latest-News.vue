<script lang="ts" setup>
import LatestNewsOne from "./Latest-News-One.vue";
import LatestNewsTwo from "./Latest-News-Two.vue";
import LatestNewsThree from "./Latest-News-Three.vue";

import { ref, reactive, onMounted } from "vue";
import axios from "axios";

//获取指定要求的数据：http://magick.plugin/wp-json/wp/v2/posts/?_fields=categories,title,link,date,featured_media&per_page=2
//根据特色图片ID获取图片链接：http://magick.plugin/wp-json/wp/v2/media/2312    source_url
//根据分类ID获取分类名：http://magick.plugin/wp-json/wp/v2/categories/1
//设定网址
const site = "http://magick.plugin";

//存储基础数据
const api_data = ref([""]);

//获取图片数据
const imgUrl = ref("");

//列表1用数据
const one_data = ref();

//获取基础数据
const requestData = () => {
  const api = `${site}/wp-json/wp/v2/posts/?_fields=categories,title,link,date,featured_media&per_page=2`;
  console.log("待检查的API是：" + api);
  axios.get(api).then((response) => {
    console.log(response.data);
    api_data.value = response.data;
  });
};

//传入图片ID，获取图片链接
const requestMedia = (media = 2312) => {
  //查询网址
  const api = `${site}/wp-json/wp/v2/media/` + media;
  //输出值
  axios.get(api).then((response) => {
    console.log(response.data.source_url);
    imgUrl.value = response.data.source_url;
    console.log("图像URL是：" + imgUrl.value);
  });
};

//传入分类ID，获取分类名和链接
const category = reactive({ name: "", link: "" });
const getCategory = (id = 1) => {
  //查询网址
  const api = `${site}/wp-json/wp/v2/categories/` + id;
  //输出值
  axios.get(api).then((response) => {
    console.log(response.data.source_url);
    category.name = response.data.name;
    category.link = response.data.link;
    console.log("图像URL是：" + imgUrl.value);
  });
};

onMounted(() => {
  //  //数据初始化
  requestData();
  //获取图片链接
  requestMedia();
  getCategory();
});

//返回11个帖子，需要其中的link\categories\title\date\featured_media

//1、获取基础数据
//2、整理基础数据
//3、分配数据
</script>

<template>
  {{ api_data }}
  <hr />
  {{ imgUrl }}
  <hr />
  {{ category }}
  <hr />

  <section class="everdayfeed">
    
    
    <div class="section-content">
      <h2 class="section-head">最新消息</h2>

      <LatestNewsOne :item="one_data"></LatestNewsOne>

      <LatestNewsTwo></LatestNewsTwo>

      <LatestNewsThree></LatestNewsThree>
    </div>
  </section>
</template>

<style lang="less" scoped>
.everdayfeed {
  padding-bottom: 80px;
  overflow: hidden;
  background-color: #f5f5f7;
  margin-top: 0;
}

@media only screen and (max-width: 1068px) {
}
@media only screen and (max-width: 734px) {
}
</style>
