/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
const path = require('path');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts()],
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, '/src') }
    ],
  },
  test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: './src/setup.ts',
    coverage: {
      reporter: ['text', 'json', 'html'],
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/lib/index.tsx'),
      name: 'Danger',
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['react', 'classnames'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          react: 'React',
          classnames: 'classes'
        }
      }
    }

  },

});
