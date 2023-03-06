# 准备

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
npm install axios
```

### 安装less

- [(21条消息) vue3+vite 安装和配置less_vue3安装less_余温无痕的博客-CSDN博客](https://blog.csdn.net/u014678583/article/details/124008200)

```shell
npm i less-loader less 
```

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

