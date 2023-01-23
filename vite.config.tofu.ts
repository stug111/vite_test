import { defineConfig } from 'vite'
import { resolve } from 'path'
import plugins from './config/plugins'

// https://vitejs.dev/config/
export default defineConfig({
  plugins,
  build: {
    rollupOptions: {
      input: {
        app: resolve(__dirname, 'index_tofu.html'),
      },
      output: {
        dir: 'dist_tofu',
      },
      
    }
  }
})
