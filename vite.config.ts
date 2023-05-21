import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },

  server: {
    //host: '0.0.0.0',  //允许外部ip访问
    open: true, // 启动服务后自动打开浏览器
    port: 5173, // 服务端口
    hmr: true,
    proxy: {
      //   若请求的前缀不是这个'/api'，那请求就不会走代理服务器
      '/api': {
        target: 'http://127.0.0.1:8000', //这里写路径
        ws: true, //用于支持websocket
        changeOrigin: true, //用于控制请求头中的host值
        //pathRewrite: { '^/api': '' }, //将所有含/api路径的，去掉/api转发给服务器
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})
