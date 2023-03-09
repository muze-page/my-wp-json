<script lang="ts" setup>
//文章页
import SingleMain from "./black/single/Single-Main.vue";
import SingleContact from "./black/single/Single-Contact.vue";
import SingleRecommend from "./black/single/Single-Recommend.vue";
import SingleBrand from "./black/single/Single-Brand.vue";
</script>

<template>
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
