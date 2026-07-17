import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteStaticCopy } from 'vite-plugin-static-copy'
import { fileURLToPath, URL } from 'node:url'

// assets/ fica na raiz (repo dentro do Google Drive — mover trava).
// Copiamos para dist/assets no build, preservando todas as URLs /assets/...
export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({ targets: [{ src: 'assets', dest: '.' }, { src: 'fotos', dest: '.' }] }),
  ],
  resolve: {
    alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) },
  },
})
