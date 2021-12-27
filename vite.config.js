import path from 'path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Vue(),
    Pages(),
  ],
  server: {
    port : 3333
  },
  resolve:{
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
})
