<script lang="ts" setup>
//第一个
import { ref, reactive } from "vue";
import useGetData from "../../../store/get";




// 实例化 store
const get = useGetData();
//拿到需要的数据
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
data.value = [get.data.latest[0]];
</script>

<template>
  

  <el-row :gutter="20">
    <el-col :span="24" v-for="item in data" :key="item.id">
      <a :href="item.url" target="_blank" class="tile tile-hero">
        <div class="tile__media">
          <el-image :src="item.image" fit="cover" :lazy="true"></el-image>
        </div>

        <div class="tile__description">
          <div class="tile__head">
            <router-link :to="{ name: 'single', params: { id: item.id } }">传一下：{{ item.id }}</router-link>
            <div class="tile__category">{{ item.cat }}</div>

            <div class="tile__headline">
              {{ item.title }}
            </div>
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
    min-height: 590px;
    flex-basis: 472px;
    flex-shrink: 1;
    > div {
      display: inline;
    }
  }
  .tile__description {
    padding: 32px;
    justify-content: space-between;
    flex-basis: 0;
    .tile__head {
      display: flex;
      flex: 1;
      flex-direction: column;
      .tile__category {
        letter-spacing: 0em;
        margin-bottom: auto;
      }
      .tile__headline {
        font-size: 40px;
        line-height: 1.1;
        font-weight: 700;
        letter-spacing: 0em;
        -webkit-line-clamp: 6;
        -webkit-box-orient: vertical;
        display: -webkit-box;
        overflow: hidden;
        font-family: "SF Pro SC", "SF Pro Display", "SF Pro Icons",
          "PingFang SC", "Helvetica Neue", "Helvetica", "Arial", sans-serif;

        margin-bottom: auto;
        margin-top: 8px;
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
