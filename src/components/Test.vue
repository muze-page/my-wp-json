<script lang="ts" setup>
import { reactive } from "vue";

import { storeToRefs } from "pinia";
import useUserStore from "../store/user";
const userData = reactive({
  username: "",
  password: "",
});

// 实例化 store
const userStore = useUserStore();

//解构
const { name, fullName } = storeToRefs(userStore);
function handleClick() {
  // 不建议这样改
  // name.value = '蝎子莱莱'

  // 推荐的写法！！！
  userStore.updateName("李四");
}

const onLogin = async () => {
  // 使用 actions，当作函数一样直接调用
  // login action 定义为了 async 函数，所以它返回一个 Promise
  await userStore.login(userData);
  userData.username = "";
  userData.password = "";
};
const onLogout = () => {
  userStore.logout();
};
</script>

<template>
  <div>
    <!-- state：通过 store 直接访问 -->
    <br />
    <br />
    <br />
    <br />
    <br />
    <div v-if="userStore.token">
      {{ userStore.username }} <br />

      <el-button type="primary" size="default" @click="onLogout"
        >退出</el-button
      >
    </div>

    <div v-else>
      用户名：<input v-model="userData.username" /> <br />
      密码：<input v-model="userData.password" type="password" /> <br />

      <el-button type="primary" size="default" @click="onLogin">登录</el-button>
    </div>
  </div>
  <hr />
  <div>
    <div>name: {{ name }}</div>
    <div>全名：{{ fullName }}</div>
    <button @click="handleClick">修改</button>
  </div>
</template>
