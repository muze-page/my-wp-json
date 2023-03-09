import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],

  css: {
    preprocessorOptions: {
      less: {
        charset: false,
        additionalData: '@import "./src/assets/css/home.less";',
      },
    },
  },

  base: './',
  resolve: {
    alias: {
      '/images': 'src/assets/images',
    },
  },


})
