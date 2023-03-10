<script lang="ts" setup>
//404页
import { ref } from "vue";
import { Search } from "@element-plus/icons-vue";

const activeIndex = ref("2");
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};

const test = ref();
const clickMenu = () => {
  test.value.open(3);
};
const clickMenus = () => {
  test.value.close(3);
};
</script>

<template>

  <hr />
  <el-button type="primary" size="default" @click="clickMenu"
    >打开菜单</el-button
  >
  <el-button type="primary" size="default" @click="clickMenus"
    >收回菜单</el-button
  >



  <el-menu
    ref="test"
    :default-active="activeIndex"
    class="el-menu"
    mode="horizontal"
    :ellipsis="false"
    @select="handleSelect"
  >
    <el-menu-item index="0">
      <el-link href="/" class="title">Newsroom</el-link>
    </el-menu-item>
    <div class="flex-grow" />
    <el-menu-item index="1">
      <el-icon><Search /></el-icon>
      Newsroom 搜索
    </el-menu-item>
    <el-sub-menu index="2">
      <template #title> 热门话题 - 2 </template>
      <el-menu-item index="2-1">item one</el-menu-item>
      <el-menu-item index="2-2">item two</el-menu-item>
      <el-menu-item index="2-3">item three</el-menu-item>
      <el-sub-menu index="2-4">
        <template #title>item four</template>
        <el-menu-item index="2-4-1">item one</el-menu-item>
        <el-menu-item index="2-4-2">item two</el-menu-item>
        <el-menu-item index="2-4-3">item three</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
    <el-sub-menu index="3">
      <template #title>Workspace - 3</template>
      <el-menu-item index="3-1">item one</el-menu-item>
      <el-menu-item index="3-2">item two</el-menu-item>
      <el-menu-item index="3-3">item three</el-menu-item>
    </el-sub-menu>
  </el-menu>



</template>

<style lang="less" scoped>
.flex-grow {
  flex-grow: 1;
}
.el-menu {
  max-width: 980px;
  margin: 0 auto;
}
.title {
  font-size: 21px;
  line-height: 1.14286;
  font-weight: 600;
  letter-spacing: 0.011em;
  font-family: "SF Pro Display", "SF Pro Icons", "Helvetica Neue", "Helvetica",
    "Arial", sans-serif;
  cursor: default;
  display: block;
  float: left;
  margin: 14px 0 -14px;
  padding: 0;
  height: 52px;
  white-space: nowrap;

  color: #1d1d1f;
  -webkit-transition: color 0.5s cubic-bezier(0.28, 0.11, 0.32, 1);
  transition: color 0.5s cubic-bezier(0.28, 0.11, 0.32, 1);
}
</style>
