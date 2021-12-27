import path from 'path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Components from 'unplugin-vue-components/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Icons from 'unplugin-icons/vite'




// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Vue(),
    Pages(),
    Components({
      resolvers: IconsResolver({
        prefix: false,
        enabledCollections: ['heroicons-outline'],
      }),
    }),
    Icons(),
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
