<script lang="ts" setup>
import LatestNewsOne from "./Latest-News-One.vue";
import LatestNewsTwo from "./Latest-News-Two.vue";
import LatestNewsThree from "./Latest-News-Three.vue";
import moment from "moment";

import { ref, reactive, onMounted } from "vue";
import axios from "axios";

//获取指定要求的数据：http://magick.plugin/wp-json/wp/v2/posts/?_fields=categories,title,link,date,featured_media&per_page=2
//根据特色图片ID获取图片链接：http://magick.plugin/wp-json/wp/v2/media/2312    source_url
//根据分类ID获取分类名：http://magick.plugin/wp-json/wp/v2/categories/1
//设定网址
const site = "http://magick.plugin";

//存储基础数据
const api_data = ref([]);

//获取图片数据
const imgUrl = ref("");

//列表1用数据
const one_data = ref();

//获取基础数据
async function requestData() {
  const api = `${site}/wp-json/wp/v2/posts/?_fields=categories,title,link,date,featured_media&per_page=2`;
  console.log("待检查的API是：" + api);
  try {
    const response = await axios.get(api);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

//传入图片ID，获取图片链接
async function requestMedia(media = 2312) {
  //查询网址
  const api = `${site}/wp-json/wp/v2/media/` + media + `?_fields=source_url`;
  console.log("待检查的API是：" + api);
  try {
    //输出值
    const response = await axios.get(api);
    return response.data.source_url;
  } catch (error) {
    console.log(error);
  }
}

//传入分类ID，获取分类名和链接

async function getCategory(id = 1) {
  //查询网址
  const api = `${site}/wp-json/wp/v2/categories/` + id + `?_fields=name,link`;
  try {
    const cat = { name: "", link: "" };
    //输出值
    const response = await axios.get(api);
    cat.name = response.data.name;
    cat.link = response.data.link;
    return cat;
  } catch (error) {
    console.log(error);
  }
}

onMounted(() => {});
//处理对象
const handleObj = (obj = { date: "", time: "" }) => {
  //拿到时间，处理后插入
  obj["time"] = moment(obj.date).format("YYYY 年  M 月 D日");
};

const test = { date: "2023-03-04T17:20:41", time: "" };
handleObj(test);
console.table(test);

//返回11个帖子，需要其中的link\categories\title\date\featured_media

//1、获取基础数据
//2、整理基础数据
//3、分配数据

async function f() {
  api_data.value = await requestData();
  //拿到需处理的数组
  const data = await requestData();
  for (const key in data) {
    //拿到对象内容

    console.log(JSON.stringify(data[key]));
  }
  //api_data.value =
  //api_data.value = await requestMedia();
  const a = await getCategory();

  console.table(data);
  console.log("6 - 拿到的值是：" + JSON.stringify(a));
}
f();
</script>

<template>
  {{ api_data }}
  <hr />
  {{ imgUrl }}
  <hr />
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
