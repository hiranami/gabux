import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        travel: resolve(__dirname, 'projeto-travel.html'),
        megavarejo: resolve(__dirname, 'projeto-megavarejo.html'),
        spark: resolve(__dirname, 'projeto-spark.html'),
        saferout: resolve(__dirname, 'projeto-saferout.html')
      }
    }
  },
  server: {
    port: 3000
  }
})
