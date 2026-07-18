import { readFileSync } from 'node:fs'
import tailwindcssAnimate from 'tailwindcss-animate'

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
        // tokens shadcn (via CSS vars) — mapeados aos tokens Vixlens no index.css
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: { DEFAULT: 'hsl(var(--primary))', foreground: 'hsl(var(--primary-foreground))' },
        secondary: { DEFAULT: 'hsl(var(--secondary))', foreground: 'hsl(var(--secondary-foreground))' },
        muted: { DEFAULT: 'hsl(var(--muted))', foreground: 'hsl(var(--muted-foreground))' },
        accent: { DEFAULT: 'hsl(var(--accent))', foreground: 'hsl(var(--accent-foreground))' },
        destructive: { DEFAULT: 'hsl(var(--destructive))', foreground: 'hsl(var(--destructive-foreground))' },
        popover: { DEFAULT: 'hsl(var(--popover))', foreground: 'hsl(var(--popover-foreground))' },
        card: { DEFAULT: 'hsl(var(--card))', foreground: 'hsl(var(--card-foreground))' },
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
