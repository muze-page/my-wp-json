<script lang="ts" setup>
//文章页
import SingleMain from "@/components/black/single/Single-Main.vue";
import SingleContact from "@/components/black/single/Single-Contact.vue";
import SingleRecommend from "@/components/black/single/Single-Recommend.vue";
import SingleBrand from "@/components/black/single/Single-Brand.vue";
import Aside from "@/components/black/Aside.vue";

import { ref, Ref, watchEffect } from "vue";
import { useRouter, useRoute } from "vue-router";

import useGetData from "../store/get";

//实例化路由
const router = useRouter();
const route = useRoute();

// 实例化 store
const store = useGetData();
//拿到当前文章ID
//const ids = route.params.id as string;//类型断言，肯定是字符串，而不是字符串数组
const id = Number(route.params.id);
//根据当前文章ID拿到值并存入pinia
store.getPostData(id);
</script>

<template>
  <!--
    拿到的ID：{{ route.params.id }}
   拿到的值{{ get.data.post }}
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
