<script setup>
import LatestNewsOne from "./Latest-News-One.vue";
import LatestNewsTwo from "./Latest-News-Two.vue";
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
        <el-col :span="8"><div class="grid-content ep-bg-purple" /></el-col>
        <el-col :span="8"><div class="grid-content ep-bg-purple" /></el-col>
        <el-col :span="8"><div class="grid-content ep-bg-purple" /></el-col>
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
.el-row {
  margin-bottom: 20px;
}

.grid-content {
  background-color: rgb(120, 113, 113);
  border-radius: @redius;
  min-height: 36px;
}
</style>
