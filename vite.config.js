import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
//配置路径
import path from 'path'
//开发 - 虚拟接口
import { viteMockServe } from 'vite-plugin-mock'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    viteMockServe({// 更多配置见最下方
      //supportTs: true,
      //logger: false,
      mockPath: "./src/mock/" // 文件位置
    })

  ],

  server: {
    port: 8080, // 配置Vite服务器端口号
    hmr: true,//开启热更新
  },

  //配置路径别名
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
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
