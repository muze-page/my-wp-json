<script lang="ts" setup>
import Aside from "../Aside.vue";
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
//列表2用数据
const two_data = ref();
//列表3用数据
const three_data = ref();

//获取基础数据
async function requestData() {
  const api = `${site}/wp-json/wp/v2/posts/?_fields=categories,title,link,date,featured_media&per_page=11`;
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
    //const cat = { name: "", link: "" };
    //输出值
    const response = await axios.get(api);
    //cat.name = response.data.name;
    //cat.link = response.data.link;
    //return cat;
    return response.data.name;
  } catch (error) {
    console.log(error);
  }
}

onMounted(() => {
  f();
});
//处理对象

async function handleObj(
  obj = {
    date: "",
    title: { rendered: "" },
    titles: "",
    featured_media: 0,
    categories: 0,
  }
) {
  //拿到时间，处理后插入
  obj["date"] = moment(obj.date).format("YYYY 年  M 月 D 日");
  //拿到标题，处理后插入
  obj["titles"] = obj.title.rendered;
  //拿到特色图ID，处理成链接后插入
  obj["featured_media"] = await requestMedia(obj.featured_media);
  //拿到分类，处理后插入
  console.log("二度确认下：" + obj.categories);
  obj["categories"] = await getCategory(obj.categories);
}

const test = { date: "2023-03-04T17:20:41", categories: [1] };
//handleObj(test);
//console.table(test);

//返回11个帖子，需要其中的link\categories\title\date\featured_media

//1、获取基础数据
//2、整理基础数据
//3、分配数据

async function f() {
  //原始内容
  api_data.value = await requestData();
  //处理后的内容
  const data = await requestData();
  for (const key in data) {
    //拿到对象内容
    //处理data[key]
    await handleObj(data[key]);
    console.log("打印的内容：" + data[key].categories);

    console.log("对象的内容" + JSON.stringify(data[key]));
  }
  //api_data.value =
  //api_data.value = await requestMedia();
  const a = await getCategory();

  console.table("处理后的对象" + JSON.stringify(data));
  //console.log("6 - 拿到的值是：" + JSON.stringify(a));

  imgUrl.value = data;
  one_data.value = [data[0]];
  two_data.value = data.slice(1, 5);
  three_data.value = data.slice(5, 12);
}
</script>

<template>
  <!--
  处理前{{ api_data }}
  <hr />
  {{ one_data }}
  <hr />
  {{ two_data }}
  <hr />
  -->

  <section class="everdayfeed">
    <Aside></Aside>
    <div class="section-content">
      <h2 class="section-head">最新消息</h2>

      <LatestNewsOne :data="one_data"></LatestNewsOne>

      <LatestNewsTwo :data="two_data"></LatestNewsTwo>

      <LatestNewsThree :data="three_data"></LatestNewsThree>
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
