import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      // Define multiple entry points for the build
      input: {
        // The entry for your public website
        main: resolve(__dirname, 'index.html'),
        // The entry for your extension's popup
        popup: resolve(__dirname, 'popup.html'),
      },
      output: {
        // Keep asset names simple and predictable
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`,
      }
    }
  }
})
