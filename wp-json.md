# 准备

## 参考

- [Vue3+TS+Vite 入门指南 - 掘金 (juejin.cn)](https://juejin.cn/post/7059977654866280456)

## 编程环境

### VS Code

- Element UI Snippets（Element Pro 提示）

## 环境配置

### 安装Element Pro

- https://element-plus.org/zh-CN

> 最近看蛮多用ant的，但想着还是先用Element练练手吧

```shell
npm install element-plus --save
```

配置`main.js`

```js
import { createApp } from 'vue'
import './style.css'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'


import App from './App.vue'

const app = createApp(App)

app.use(ElementPlus)
app.mount('#app')


```

安装图标

```shell
npm install @element-plus/icons-vue
```

配置`main.js`

```js
import { createApp } from 'vue'
import './style.css'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import * as ElementPlusIconsVue from '@element-plus/icons-vue'



import App from './App.vue'

const app = createApp(App)

app.use(ElementPlus)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.mount('#app')


```



### 安装Axios

- [Axios 中文文档 | Axios 中文网 | Axios 是一个基于 promise 的网络请求库，可以用于浏览器和 node.js (axios-http.cn)](https://www.axios-http.cn/)

```shell
npm install axios vue-axios
```

配置

```js
//导入Vue框架中的createApp方法
import { createApp } from "vue";
//导入样式文件
import "./style.css";
//导入自定义根组件
import App from "./App.vue";

//导入vue-axios模块
import axios from "axios";
import VueAxios from "vue-axios";

//挂载根组件
const app = createApp(App);
//注册axios
app.use(VueAxios, axios);
//进行应用挂载
app.mount("#app");
```



### 安装less

- https://blog.csdn.net/weixin_43575792/article/details/122841064

```shell
npm i less-loader less 
```

在以下路径新建global.less文件，写入全局变量。

```shell
src/assets/css/global.less
```



配置`vite.config.js`

```js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],

  css: {
    preprocessorOptions: {
      less: {
        charset: false,
        additionalData: '@import "./src/assets/css/global.less";',
      },
    },
  },


})

```

> 要在这里载入公共样式，避免覆盖组件内样式

使用

```vue
<style lang="less" scoped>
.ls {
  color: red;
  span {
    color: black;
  }
}
</style>
```

css中引入

```css
//载入公共变量
@import "global.less";
```



更多

- [(21条消息) vue中运用scss方法复用样式_vue样式复用_Z1LR的博客-CSDN博客](https://blog.csdn.net/zr1l1997/article/details/116161912)
- [优雅的使用 Less - 掘金 (juejin.cn)](https://juejin.cn/post/7035590363418984455)

### 安装Moment处理时间

- [Moment.js 中文网 (momentjs.cn)](http://momentjs.cn/)
- [moment常用方法总结 - 掘金 (juejin.cn)](https://juejin.cn/post/7041014604713394206)

安装

```shell
npm install moment
```

实例

```js
import moment from "moment";
const handleObj = (obj = { date: "", time: "" }) => {
  //拿到时间，处理后插入
  obj["time"] = moment(obj.date).format("YYYY 年  M 月 D日");
};

const test = { date: "2023-03-04T17:20:41", time: "" };
handleObj(test);
console.table(test);
```



## 安装路由

- [Vue Router | Vue.js 的官方路由 (vuejs.org)](https://router.vuejs.org/zh/)

```shell
npm install vue-router
```

### 使用

- [(21条消息) vite中引入vue-router路由，以及文件简称-CSDN博客](https://blog.csdn.net/yunchong_zhao/article/details/122586201)

在src文件下新建router文件夹，其中新建index.js文件，写入以下内容

```js
//导入Vue Router模块中的两个方法
import { createRouter, createWebHashHistory } from "vue-router";
//导入路由需要用到的自定义组件
import Home from "../components/Home.vue";
import Single from "../components/Single.vue";


//定义路由
const routes = [
    { path: "/home", component: Home },
    { path: "/single", component: Single },
];

//创建路由对象
const router = createRouter({
    history: createWebHashHistory(),
    routes: routes,
});
export default router

```

在main.js文件中添加以下内容

```js
//路由
import router from "./router"

//路由
app.use(router)
```

## 安装Typescript

- [(21条消息) Vite 学习 - TS 在 Vite 中的使用_vite ts_皮蛋很白的博客-CSDN博客](https://blog.csdn.net/u012961419/article/details/110520129)

### 步骤一

```shell
# 仅仅为了使用 tsc 命令，所以作为开发依赖安装
npm install -D typescript
```

### 步骤二

编写配置文件，在项目目录下新建tsconfig.json文件，写入以下内容

```json
{
  "compilerOptions": {
    // TypeScript 默认会把代码编译为 ECMAScript 3
    // esnext 表示仅仅校验转换 TypeScript 类型，不进行语法编译
    "target": "esnext",
    "module": "esnext",
    // 开启严格模式，这使得对“this”的数据属性进行更严格的推断成为可能
    "strict": true,
    "jsx": "preserve",
    "moduleResolution": "node"
  },

  // 配置需要校验的文件
  "include": [
    "src/**/*.ts",
    "src/**/*.vue"
  ],

  // 排除不需要 TypeScript 校验的文件
  "exclude": [
    "node_modules"
  ]
}

```

### 步骤三

将 `main.js` 改为 `main.ts`，并将 `index.html` 中引入的 `main.js` 改为 `main.ts`。

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <link rel="icon" type="image/svg+xml" href="/vite.svg" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Vite + Vue</title>
</head>

<body class="page-article">
  <div id="app"></div>
  <script type="module" src="/src/main.ts"></script>
</body>

</html>
```



### 步骤四

在 `/src` 目录下创建一个 `.ts` 文件，添加 `.vue` 文件的类型声明

```js
// /src/shims-vue.d.ts
declare module '*.vue' {
  // Vue 3
  import { defineComponent } from 'vue'
  const Component: ReturnType<typeof defineComponent>
  export default Component
}

```



现在，可以在vue文件中，通过

```vue
<script lang="ts" setup>
</script>
```

的方式。来使用Typescript了。

# VITE

## 图片

### 图片应该放哪里？

- [Vue项目中图片资源应该存放public还是assets文件夹下？_51CTO博客_vue assets文件夹](https://blog.51cto.com/u_15718546/5614167)

- 项目中必须用的图片，放assets下，这会是项目的一部分
- 项目中供客户替换的图片，放public下

### 使用方法

#### assets

- [解决vite使用alias引入图片不显示的问题 - 掘金 (juejin.cn)](https://juejin.cn/post/7009441745301667853)

封装函数使用

```js
//utils.js

const getSrc = (name) => {
    if (typeof name === 'undefined') return 'error.png'
    const path = `/src/assets/images/${name}.png`
    const modules = import.meta.globEager('/src/assets/images/*')
    return modules[path]?.default
}
```

使用

```vue
//app.vue

<img :src="getSrc('about')" alt="" />
```

import.meta.globEager('/src/assets/images/*')会动态获取到/src/assets/images下的所有图片（不包括子文件夹），并且把图片的路径作为key值变成一个modules。这时传入图片的文件名modules[path].default，就把图片的路径动态映射出来。

***注意传入的是字符串，我因为忘了是字符串，查错找了一阵子。***

#### public

将图片icon_large.svg放置于public目录下，可在组件中通过以下方式访问

```css
background-image: url(/icon_large.svg);
```



## 配置

### vite.config.js 配置全局src别名“@“

- [(21条消息) vite.config.js 配置全局src别名“@“_vite src 别名_Leon4055的博客-CSDN博客](https://blog.csdn.net/weixin_41258075/article/details/122326095)

```js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path' // 关键代码

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
    // 关键代码
      '@': path.resolve(__dirname, './src')
    }
  }
})


```

使用

```js
import Layout from "@/layout/index.vue";
//此时的根目录为src
```



# VUE使用

- [(21条消息) vue项目的样式加载顺序_vue组件样式加载_我有脾气v的博客-CSDN博客](https://blog.csdn.net/qq_36344795/article/details/107014223)

## 技巧

- [(21条消息) Vue3新属性 — css中使用v-bind（v-bind in css）_vue3 css v-bind_ciarlatani的博客-CSDN博客](https://blog.csdn.net/weixin_52235488/article/details/126290046)
- Axios异步请求：https://www.bilibili.com/video/BV1WP4y187Tu/

# Rest APi

## 获取数据

### 根据特色图片ID获取图片链接

```shell
http://magick.plugin/wp-json/wp/v2/media/2312?_fields=source_url
```



```shell
//获取指定要求的数据并只显示2个：http://magick.plugin/wp-json/wp/v2/posts/?_fields=categories,title,link,date,featured_media&per_page=2
//根据特色图片ID获取图片链接：http://magick.plugin/wp-json/wp/v2/media/2312    source_url
//根据分类ID获取分类名：http://magick.plugin/wp-json/wp/v2/categories/1
```



# 问题

## Typescript问题

### 此模块是使用 “export =” 声明的，只能在使用“allowSyntheticDefaultImports”标志时用于默认导入

tsconfig.json文件中 `compilerOptions` 对象下 增加 `"allowSyntheticDefaultImports": true` 即可。