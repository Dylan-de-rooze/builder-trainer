import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  base: '/builder-trainer/',
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate'
    })
  ]
})