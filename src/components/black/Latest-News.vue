<script setup>
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
  .section-content {
    margin-left: auto;
    margin-right: auto;
    width: 980px;
    .section-head {
      font-size: 32px;
      line-height: 1.125;
      font-weight: 700;
      letter-spacing: 0.004em;
      font-family: "SF Pro SC", "SF Pro Display", "SF Pro Icons", "PingFang SC",
        "Helvetica Neue", "Helvetica", "Arial", sans-serif;
      margin-bottom: 24px;
    }
  }
}

@media only screen and (max-width: 1068px) {
}
@media only screen and (max-width: 734px) {
}
</style>
