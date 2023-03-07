<script setup>
import FeaturedSlide from "./Featured-Slide.vue";
</script>

<template>
  <section class="featured">
    <div class="section-content">
      <div class="section-head">特写</div>
      <div class="featured-view-all-wrapper">
        <a href="#" class="nr-cta-primary-dark">查看全部</a>
      </div>
      <FeaturedSlide></FeaturedSlide>

    </div>
  </section>
</template>

<style lang="less" scoped>


.featured {
  background-color: #161617;
  color: #fff;
  overflow: hidden;
  padding-top: 80px;
  padding-bottom: 80px;
  .section-content {
    display: flex;
    flex-wrap: wrap;
    .section-head {
      margin-top: 0;
      color: #fff;
      flex: 1;
    }
    .featured-view-all-wrapper {
      margin: 0;
      margin-bottom: 24px;
      height: 100%;
      align-self: flex-end;
      .nr-cta-primary-dark {
        letter-spacing: 0em;
        font-family: "SF Pro SC", "SF Pro Text", "SF Pro Icons", "PingFang SC",
          "Helvetica Neue", "Helvetica", "Arial", sans-serif;
      }
    }
  }
}



</style>
