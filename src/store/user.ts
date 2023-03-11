// store/user.js

import axios from "axios";
import { defineStore } from "pinia";

// 创建 store
const useUserStore = defineStore("user", {
  // 定义状态：一个函数，返回一个对象
  state: () => ({
    username: "",
    token: "",
    name:"雷猴",
  }),

  // 定义 getters，等同于组件的计算属性
  getters: {
    // getter 函数接收 state 作为参数，推荐使用箭头函数
    hello: (state) => "Hello!" + state.username,
    fullName: (state) => {
      return '我叫 ' + state.name
    }
  },

  // 定义 actions，有同步和异步两种类型
  actions: {
    // 异步 action，一般用来处理异步逻辑
    async login(userData:{}) {
      const result = await axios.post("/api/user/login", userData);
      const { data, code } = result.data;
      if (code === 0) {
        // action 中修改状态
        this.username = data.username;
        this.token = data.token;
      }
    },

    // 同步 action
    logout() {
      this.token = "";
      this.username = "";
    },

    updateName(name:string) {
      this.name = name
    }
  },
});

export default useUserStore;
