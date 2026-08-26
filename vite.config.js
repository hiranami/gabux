import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  build: {
    minify: 'esbuild',
    cssMinify: true,
    target: 'es2015',
    cssCodeSplit: true,
    assetsInlineLimit: 4096,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        cineteca: resolve(__dirname, 'projeto-cineteca.html'),
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
