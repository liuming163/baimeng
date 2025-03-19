import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'url'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver({
        importStyle: 'sass'
      })],
    }),
    Components({
      resolvers: [ElementPlusResolver({
        importStyle: 'sass'
      })],
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/assets/styles/theme.scss" as *;`,
      },
    },
  },
  resolve: {
    // 别名
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
    // 省略文件扩展名
    extensions: ['.js', '.json', '.jsx', '.mjs', '.ts', '.tsx', '.vue'],
  },
  server: {
    host: '0.0.0.0',
    port: 5026,
    open: true, // 自动打开浏览器
    proxy: {
      '/api': {
        target: 'https://hotapi.xinjudata.com', // 代理目标的基础路径
        changeOrigin: true, // 允许跨域,
        rewrite: (path) => path.replace(/^\/api/, ''), // 重写路径: 去掉路径中开头的
      },
    }, // 代理配置
  },
})
