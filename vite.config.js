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
        pre_registro_peru: resolve(__dirname, 'pre_registro_peru.html'),
        pre_registro_miami: resolve(__dirname, 'pre_registro_miami.html'),
        wait_list_online: resolve(__dirname, 'wait_list_online.html'),
      },
    },
  },
})
