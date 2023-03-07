<script setup>
import "../../assets/css/home.css";
import LatestNewsOne from "./Latest-News-One.vue";
import LatestNewsTwo from "./Latest-News-Two.vue";
import LatestNewsThree from "./Latest-News-Three.vue";
</script>

<template>
  <section class="everdayfeed">
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
