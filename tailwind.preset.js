import { readFileSync } from 'node:fs'
import tailwindcssAnimate from 'tailwindcss-animate'

// Preset do Tailwind do DS — o que as telas Vixlens herdam.
//
// Nas telas (tailwind.config.js):
//
//   import vixlens from 'vixlens-ds/tailwind.preset.js'
//   export default {
//     presets: [vixlens],
//     content: [
//       './src/**/*.{js,jsx,ts,tsx}',
//       './node_modules/vixlens-ds/dist-lib/**/*.js', // <- sem isto as classes
//     ],                                              //    dos componentes somem
//   }
//
// O `content` fica de fora do preset de proposito: cada tela varre os proprios
// arquivos, e o Tailwind nao sabe adivinhar isso.

// Single source: le os tokens do DS (mesmo JSON que serve o site/skill).
const t = JSON.parse(readFileSync(new URL('./assets/tokens/vixlens-tokens.json', import.meta.url), 'utf8'))
const c = t.color
const clean = (obj) => Object.fromEntries(Object.entries(obj).filter(([k]) => k !== 'comment').map(([k, v]) => [k, v.value]))

export default {
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
        // tokens shadcn (via CSS vars) — mapeados aos tokens Vixlens no theme.css
        border: 'hsl(var(--border) / <alpha-value>)',
        input: 'hsl(var(--input) / <alpha-value>)',
        ring: 'hsl(var(--ring) / <alpha-value>)',
        background: 'hsl(var(--background) / <alpha-value>)',
        foreground: 'hsl(var(--foreground) / <alpha-value>)',
        primary: { DEFAULT: 'hsl(var(--primary) / <alpha-value>)', foreground: 'hsl(var(--primary-foreground) / <alpha-value>)' },
        secondary: { DEFAULT: 'hsl(var(--secondary) / <alpha-value>)', foreground: 'hsl(var(--secondary-foreground) / <alpha-value>)' },
        muted: { DEFAULT: 'hsl(var(--muted) / <alpha-value>)', foreground: 'hsl(var(--muted-foreground) / <alpha-value>)' },
        accent: { DEFAULT: 'hsl(var(--accent) / <alpha-value>)', foreground: 'hsl(var(--accent-foreground) / <alpha-value>)' },
        destructive: { DEFAULT: 'hsl(var(--destructive) / <alpha-value>)', foreground: 'hsl(var(--destructive-foreground) / <alpha-value>)' },
        popover: { DEFAULT: 'hsl(var(--popover) / <alpha-value>)', foreground: 'hsl(var(--popover-foreground) / <alpha-value>)' },
        card: { DEFAULT: 'hsl(var(--card) / <alpha-value>)', foreground: 'hsl(var(--card-foreground) / <alpha-value>)' },
      },
      // Borda padrao de TUDO. O preflight do Tailwind emite
      // `*{border-color: theme(borderColor.DEFAULT, currentColor)}`, entao
      // declarar aqui faz a borda do tema valer sem depender de ordem de CSS.
      // (Nao tente resolver isso com uma regra `*` no theme.css: o Tailwind v3
      // nao emite @layer nativo, o preflight sai sem camada, e quem for
      // importado primeiro perde.)
      borderColor: {
        DEFAULT: 'hsl(var(--border))',
      },
      borderRadius: {
        ...Object.fromEntries(Object.entries(t.radius).map(([k, v]) => ['vix-' + k, v.value])),
        xl: 'calc(var(--radius) + 4px)',
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      spacing: Object.fromEntries(Object.entries(t.spacing).filter(([k]) => k.startsWith('space-')).map(([k, v]) => [k.replace('space-', 'vix-'), v])),
      maxWidth: {
        'vix-produto': t.layout['container-produto'].value,
        'vix-site': t.layout['container-ds-site'].value,
      },
      fontFamily: { vix: ['Host Grotesk', 'sans-serif'] },
      // Escala tipográfica gerada do token (single source):
      //  • text-vix-h1 … text-vix-overline (desktop) + -m (mobile): size+lh+peso+tracking.
      //  • text-xs / text-sm / text-base: utilities-base do Tailwind ligadas ao token
      //    (caption 12 / label 14 / paragraph 16) — o que o shadcn usa na UI sai daqui.
      fontSize: {
        ...Object.fromEntries(
          Object.entries(t.typography.scale).flatMap(([k, v]) => {
            const meta = {
              lineHeight: v.lineHeight ? String(parseInt(v.lineHeight, 10) / 100) : '1.4',
              fontWeight: String(v.weight),
              letterSpacing: v.tracking || '0em',
            }
            return [
              ['vix-' + k, [v.desktop, meta]],
              ['vix-' + k + '-m', [v.mobile, meta]],
            ]
          }),
        ),
        xs: [t.typography.scale.caption.desktop, { lineHeight: '1rem' }],
        sm: [t.typography.scale.label.desktop, { lineHeight: '1.25rem' }],
        base: [t.typography.scale.paragraph.desktop, { lineHeight: '1.5rem' }],
      },
    },
  },
  plugins: [tailwindcssAnimate],
}
