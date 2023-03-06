<script setup>
import axios from "axios";
let api = "https://dongbd.com/wp-json/wp/v2/posts";
axios.get(api).then((response) => {
  console.log(response);
});
</script>

<template>axios</template>

<style lang="less" scoped></style>
