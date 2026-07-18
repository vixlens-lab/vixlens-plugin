import { Section, SubTitle } from '../Section.jsx'
import tokens from '../../data/tokens.js'

const RADIUS = [
  { key: 'card', name: 'Card Large', use: 'Cards de conteúdo, seções em destaque' },
  { key: 'button', name: 'Button', use: 'Botões e inputs' },
  { key: 'input', name: 'Input', use: 'Campos de formulário' },
  { key: 'chip', name: 'Chip / Badge', use: 'Tags, badges, chips' },
]

export default function TokensSection() {
  return (
    <Section
      id="tokens"
      eyebrow="05 — Fundamentos"
      title="Tokens de forma"
      desc="Border radius no sistema do preset shadcn/luma (base --radius 10px). Cada valor tem um papel específico — não usar livremente entre contextos."
    >
      <div className="mb-14 grid grid-cols-2 gap-4 md:grid-cols-4">
        {RADIUS.map((r) => {
          const v = tokens.radius[r.key].value
          return (
            <div key={r.key} className="rounded-vix-input border border-gray-200 p-6 text-center">
              <div className="mx-auto mb-4 h-14 w-20 bg-vix-preto" style={{ borderRadius: v }} />
              <div className="text-[13px] font-bold text-vix-preto">{r.name}</div>
              <div className="font-mono text-sm font-bold text-vix-azul">{v}</div>
              <div className="mt-1.5 text-[11px] leading-snug text-gray-500">{r.use}</div>
            </div>
          )
        })}
      </div>

      <SubTitle>Tokens consumíveis</SubTitle>
      <div className="flex flex-col items-start gap-4 rounded-vix-card bg-vix-preto p-8 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="text-lg font-bold text-white">Fonte única de tokens</div>
          <div className="mt-1.5 max-w-xl text-[13px] leading-relaxed text-white/60">
            Cores, raios, espaçamento e tipografia num arquivo só — o site, a skill de UI e qualquer
            produto puxam os mesmos valores. Não copie hex na mão.
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          {[
            { href: '/assets/tokens/vixlens-tokens.json', label: 'JSON', primary: true },
            { href: '/assets/tokens/vixlens-tokens.css', label: 'CSS' },
            { href: '/assets/tokens/vixlens-tailwind-preset.js', label: 'Tailwind' },
          ].map((f) => (
            <a
              key={f.label}
              href={f.href}
              download
              className={`rounded-vix-button px-4 py-2.5 text-sm font-bold transition-colors ${
                f.primary ? 'bg-vix-amarelo text-vix-preto hover:bg-vix-amarelo-hover' : 'border border-white/25 text-white hover:bg-white/10'
              }`}
            >
              {f.label}
            </a>
          ))}
        </div>
      </div>
    </Section>
  )
}
