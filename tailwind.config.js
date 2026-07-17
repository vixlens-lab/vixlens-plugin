import { readFileSync } from 'node:fs'

// Single source: lê os tokens do DS (mesmo JSON que serve o site/skill).
const t = JSON.parse(readFileSync(new URL('./assets/tokens/vixlens-tokens.json', import.meta.url), 'utf8'))
const c = t.color
const clean = (obj) => Object.fromEntries(Object.entries(obj).filter(([k]) => k !== 'comment').map(([k, v]) => [k, v.value]))

export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'vix-preto': c.preto.value,
        'vix-branco': c.branco.value,
        'vix-cinza-card': c['cinza-card'].value,
        'vix-amarelo': c.amarelo.value,
        'vix-amarelo-hover': c['amarelo-hover'].value,
        'vix-amarelo-light': c['amarelo-light'].value,
        'vix-azul': c.azul.value,
        'vix-cinza': c['cinza-borda'].value,
        reflecta: clean(c.reflecta),
        gray: clean(c.gray),
      },
      borderRadius: Object.fromEntries(Object.entries(t.radius).map(([k, v]) => ['vix-' + k, v.value])),
      spacing: Object.fromEntries(Object.entries(t.spacing).filter(([k]) => k.startsWith('space-')).map(([k, v]) => [k.replace('space-', 'vix-'), v])),
      maxWidth: {
        'vix-produto': t.layout['container-produto'].value,
        'vix-site': t.layout['container-ds-site'].value,
      },
      fontFamily: { vix: ['Host Grotesk', 'sans-serif'] },
    },
  },
  plugins: [],
}
