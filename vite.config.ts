import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Components from "unplugin-vue-components/vite";
import { AntDesignVueResolver } from "unplugin-vue-components/resolvers";
import vueJsx from '@vitejs/plugin-vue-jsx'
import {resolve} from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    Components({
      resolvers: [
        AntDesignVueResolver({
          importStyle: false, // css in js
        }),
      ],
    }),
  ],
  resolve: {
    alias: [
      {
        find: "@",
        replacement: resolve(__dirname, "src"),
      },
    ],
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json']
  },
  server: {
    cors: true,
    hmr: true,
    proxy: {
      '/api': {
        target: 'http://localhost:3000/',
        changeOrigin: true,
        rewrite(path) {
            return path.replace(/^\/api/, '')
        },
      }
    }
  }
});
