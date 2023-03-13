<script lang="ts" setup>
//第二个
import { ref, reactive, watchEffect } from "vue";
import useGetData from "@/store/get";
// 实例化 store
const store = useGetData();

//需要的数据
const data = ref([
  {
    id: "",
    url: "",
    date: "",
    title: "",
    image: "",
    cat: "",
  },
]);

watchEffect(() => {
  data.value = store.data.latest.slice(1, 5);
});

//const data = reactive({
//  list: [
//    {
//      link: "#",
//      img: "http://magick.plugin/wp-content/uploads/2023/03/5af76af474e023b42408a4fcf02f148a.jpg",
//      tag: "更新",
//      title: " 依托 Apple Watch，研究人员探索更多心脏健康功能0",
//      time: "2023 年 2 月 21 日",
//    },
//    {
//      link: "#",
//      img: "http://magick.plugin/wp-content/uploads/2023/03/2023030608522233.jpg",
//      tag: "特写",
//      title: "McIntosh S.E.E.D. 在美国南部与非裔土地所有者共同保护土地和传统",
//      time: "2023 年 2 月 15 日",
//    },
//    {
//      link: "#",
//      img: "http://magick.plugin/wp-content/uploads/2023/03/2023030608522269.jpg",
//      tag: "特写",
//      title: "iPad 助力中国餐饮零售行业焕发新生",
//      time: "2023 年 2 月 8 日",
//    },
//    {
//      link: "#",
//      img: "http://magick.plugin/wp-content/uploads/2023/03/2023030608522248.jpg",
//      tag: "新闻稿",
//      title: "Apple 公布第一季度业绩",
//      time: "2023 年 2 月 8 日",
//    },
//  ],
//});
</script>

<template>
  <el-row :gutter="20">
    <el-col :span="12" v-for="item in data" style="margin-top: 36px">
      <a :href="`single/${item.id}`" class="tile tile-2up">
        <div class="tile__media">
          <el-image :src="item.image" fit="fill" :lazy="true"></el-image>
        </div>

        <div class="tile__description">
          <div class="tile__head">
            <div class="tile__category">{{ item.cat }}</div>
            <div class="tile__headline">{{ item.title }}</div>
          </div>
          <div class="tile__timestamp">{{ item.date }}</div>
        </div>
      </a>
    </el-col>
  </el-row>
</template>

<style lang="less" scoped>
.tile-2up {
  flex-direction: column;
  width: 472px;
  height: 100%;

  .tile__media {
    width: 100%;
    height: 266px;
    min-height: auto;
    flex-basis: auto;
    flex-shrink: 1;

    direction: ltr;
  }
  .tile__description {
    padding: 32px;
    justify-content: space-between;
    flex-basis: auto;

    .tile__head {
      .tile__category {
        margin-bottom: 8px;
        letter-spacing: 0em;
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
      }
    }
  }
  .tile__timestamp {
    margin-top: 12px;
    font-family: "SF Pro SC", "SF Pro Text", "SF Pro Icons", "PingFang SC",
      "Helvetica Neue", "Helvetica", "Arial", sans-serif;
    letter-spacing: 0em;
  }
}
</style>
