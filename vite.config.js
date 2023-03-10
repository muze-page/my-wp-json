import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],

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
