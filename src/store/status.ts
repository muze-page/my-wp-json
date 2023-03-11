/**
 * 控制状态
 */

import { defineStore } from "pinia";

// 创建 store
const useStatus = defineStore("users", {
    // 定义状态：一个函数，返回一个对象
    state: () => ({
        menuSwitch: false,//菜单状态
        shade:false,//页面遮罩
     
    }),
  
    // 定义 getters，等同于组件的计算属性
    getters: {
      // getter 函数接收 state 作为参数，推荐使用箭头函数
      
    },
  
    // 定义 actions，有同步和异步两种类型
    actions: {
      // 异步 action，一般用来处理异步逻辑

  
      // 同步 action
        //改变菜单状态
        changeMenu() {
            this.menuSwitch = !this.menuSwitch;
            //改变遮罩状态
            this.changeShade();
        },
        //改变遮罩状态
        changeShade() {
            this.shade = !this.shade;
        }
    },
  });
  
  export default useStatus;
  