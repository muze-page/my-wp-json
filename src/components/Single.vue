<script lang="ts" setup>
//文章页
import SingleMain from "@/components/black/single/Single-Main.vue";
import SingleContact from "@/components/black/single/Single-Contact.vue";
import SingleRecommend from "@/components/black/single/Single-Recommend.vue";
import SingleBrand from "@/components/black/single/Single-Brand.vue";
import Aside from "@/components/black/Aside.vue";

import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";

import useGetData from "../store/get";

//实例化路由
const router = useRouter();
const route = useRoute();

// 实例化 store
const get = useGetData();
const postId = ref(1);
const id = route.params.id;
//对值进行判断
if (typeof id === "string") {
  postId.value = parseInt(id, 10);
} else if (Array.isArray(id)) {
  // handle multiple ids
} else {
  // handle other cases
}

get.getPostData(postId.value);

console.log(route.params.id);
</script>

<template>
  <!--
  拿到的ID：{{ route.params.id }} 拿到的值{{ get.data.post }}
  -->
  <Aside></Aside>
  <section>
    <article class="article">
      <SingleMain></SingleMain>
      <SingleContact></SingleContact>
      <SingleRecommend></SingleRecommend>
    </article>
    <SingleBrand></SingleBrand>
  </section>
</template>

<style lang="less" scoped></style>
