import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
//开发 - 虚拟接口
import { viteMockServe } from 'vite-plugin-mock'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    viteMockServe({// 更多配置见最下方
      //supportTs: true,
      //logger: false,
      //mockPath: "./mock/" // 文件位置
    })

  ],

  server: {
    port: 8080 // 配置Vite服务器端口号
  },


  css: {
    preprocessorOptions: {
      //公共样式
      less: {
        charset: false,
        additionalData: '@import "./src/assets/css/home.less";',
      },
    },
  },




})
