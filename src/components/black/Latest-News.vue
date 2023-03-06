<script setup>
import LatestNewsOne from "./Latest-News-One.vue";
import LatestNewsTwo from "./Latest-News-Two.vue";
import LatestNewsThree from "./Latest-News-Three.vue";
</script>

<template>
  <section class="everdayfeed">
    <div class="section-content">
      <h2>最新消息</h2>
      <el-row :gutter="20">
        <LatestNewsOne></LatestNewsOne>
      </el-row>
      <el-row :gutter="20">
        <LatestNewsTwo></LatestNewsTwo>
      </el-row>
      <el-row :gutter="20">
        <LatestNewsThree></LatestNewsThree>
      </el-row>
    </div>
  </section>
</template>

<style lang="less" scoped>
@redius: 16px;
@font-color-assist: #6e6e73;
.everdayfeed {
  padding-bottom: 80px;
  overflow: hidden;
  background-color: #f5f5f7;
  margin-top: 0;
}
.section-content {
  margin-left: auto;
  margin-right: auto;
  width: 980px;
}

.grid-content {
  background-color: rgb(120, 113, 113);
  border-radius: @redius;
  min-height: 36px;
}

@media only screen and (max-width: 1068px) {
}
@media only screen and (max-width: 734px) {
}
</style>
