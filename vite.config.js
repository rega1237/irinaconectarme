import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        conectarme: resolve(__dirname, 'conectarme.html'),
        presencial: resolve(__dirname, 'presencial.html'),
        success: resolve(__dirname, 'success.html'),
        online: resolve(__dirname, 'online.html'),
        pre_registro_peru: resolve(__dirname, 'pre_registro_peru.html'),
        pre_registro_miami: resolve(__dirname, 'pre_registro_miami.html'),
        wait_list_online: resolve(__dirname, 'wait_list_online.html'),
        masterclass: resolve(__dirname, 'masterclass.html'),
        main_js: './main.js',
        peru: './javascript/pre_register_peru.js',
        miami: './javascript/pre_register_miami.js',
        wait_list: './javascript/waitListOnline.js',
        navbar: './javascript/navbar.js',
        houston: './javascript/subscriptionHouston.js',
        testimonials: './javascript/testimonials.js',
        menu_mobile_submenus: './javascript/mobile_menu_dropdown.js',
        online: './javascript/online.js'
      },
    },
  },
})
