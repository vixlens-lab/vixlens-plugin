import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'
import { readFileSync } from 'node:fs'

// Build da BIBLIOTECA (o que as telas consomem).
// O site de documentacao continua no vite.config.js e sai em dist/ — este sai
// em dist-lib/ pra um build nao apagar o outro.

const pkg = JSON.parse(readFileSync(new URL('./package.json', import.meta.url), 'utf8'))

// Tudo que e dependencia fica externo: o React, o Radix e o resto vem da tela,
// senao cada app carregaria uma segunda copia de cada um (e duas copias de
// React quebram hooks em runtime).
const externos = [
  ...Object.keys(pkg.dependencies || {}),
  ...Object.keys(pkg.peerDependencies || {}),
  'react/jsx-runtime',
]

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) },
  },
  build: {
    outDir: 'dist-lib',
    emptyOutDir: true,
    sourcemap: true,
    lib: {
      entry: fileURLToPath(new URL('./src/lib.js', import.meta.url)),
      formats: ['es'],
      fileName: () => 'vixlens-ds.js',
    },
    rollupOptions: {
      external: (id) => externos.some((e) => id === e || id.startsWith(e + '/')),
    },
  },
})
