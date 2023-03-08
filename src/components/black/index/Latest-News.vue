<script lang="ts" setup>
import HeaderAside from "../Aside.vue";
import LatestNewsOne from "./Latest-News-One.vue";
import LatestNewsTwo from "./Latest-News-Two.vue";
import LatestNewsThree from "./Latest-News-Three.vue";

import { ref, reactive, onMounted } from "vue";
import axios from "axios";

//设定网址
const site = "http://magick.plugin";

//存储数据
const api_data = ref([""]);

//列表1用数据
const one_data = ref();
//列表2用数据
const two_data = ref([]);
//列表3用数据
const three_data = ref([]);

//获取基础数据
const requestData = () => {
  const api = `${site}/wp-json/wp/v2/posts/?_fields=author,id,title,link,date,featured_media&per_page=2`;
  console.log("待检查的API是：" + api);
  axios.get(api).then((response) => {
    console.log(response.data);
    api_data.value = response.data;
    one_data.value = response.data[0];
  });
};

//传入图片ID，获取图片链接
const requestMedia = (media = 1) => {
  const api = `${site}/wp-json/wp/v2/media/` + media;
  axios.get(api).then((response) => {
    console.log(response.data);
  });
};

onMounted(() => {
  //数据初始化
  requestData();
  console.log("图片链接是：");
  const a = requestMedia(2312);
  console.log("拿到的值是：" + a);
});

//返回11个帖子，需要其中的link\tag\title\date\featured_media
</script>

<template>
  {{ one_data }}
  <section class="everdayfeed">
    <!--提示-->
    <HeaderAside></HeaderAside>
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
