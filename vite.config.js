import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        presencial: resolve(__dirname, 'presencial.html'),
        success: resolve(__dirname, 'success.html'),
        online: resolve(__dirname, 'online.html'),
      },
    },
  },
})
