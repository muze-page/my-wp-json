<script lang="ts" setup>
import HeaderAside from "../Aside.vue";
import LatestNewsOne from "./Latest-News-One.vue";
import LatestNewsTwo from "./Latest-News-Two.vue";
import LatestNewsThree from "./Latest-News-Three.vue";

import { ref, reactive, onMounted } from "vue";
import axios from "axios";

onMounted(() => {
  //数据初始化
  requestData();
});

//设定网址
const site = "http://magick.plugin";

//存储数据
const api_data = ref(['']);
//获取基础数据
const requestData = () => {
  const api = `${site}/wp-json/wp/v2/posts/?_fields=author,id,excerpt,title,link&per_page=2`;
  console.log("待检查的API是：" + api);
  axios.get(api).then((response) => {
    console.log(response.data);
    api_data.value.push(response.data);
  });
};
</script>

<template>
  {{ api_data }}
  <section class="everdayfeed">
    <!--提示-->
    <HeaderAside></HeaderAside>
    <div class="section-content">
      <h2 class="section-head">最新消息</h2>

      <LatestNewsOne></LatestNewsOne>

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
