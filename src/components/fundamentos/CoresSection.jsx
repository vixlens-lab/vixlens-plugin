import { Section, SubTitle } from '../Section.jsx'
import { CopyValue } from '../Copy.jsx'
import tokens from '../../data/tokens.js'

const c = tokens.color

function Swatch({ name, hex, note, big }) {
  const dark = ['#1D1D1F', '#0439D9', '#134B97', '#00782D', '#4B5563', '#374151', '#6B7280'].includes(hex.toUpperCase())
  return (
    <div className="overflow-hidden rounded-vix-input border border-gray-200">
      <div className={big ? 'h-28' : 'h-20'} style={{ background: hex }}>
        {hex.toUpperCase() === '#FFFFFF' && <div className="h-full w-full border-b border-gray-100" />}
      </div>
      <div className="px-3 py-2.5">
        <div className="text-[13px] font-bold text-vix-preto">{name}</div>
        <CopyValue value={hex} className="text-[11px] uppercase text-gray-600">{hex}</CopyValue>
        {note && <div className="mt-1 text-[11px] leading-snug text-gray-500">{note}</div>}
      </div>
    </div>
  )
}

export default function CoresSection() {
  const primary = [
    { name: 'Preto Vixlens', hex: c.preto.value, note: 'Cor de maior presença. Nunca #000000.' },
    { name: 'Amarelo', hex: c.amarelo.value, note: 'CTA e destaque. Sempre com texto preto.' },
    { name: 'Azul', hex: c.azul.value, note: 'Acento ~5%. Nunca dominante.' },
    { name: 'Branco', hex: c.branco.value, note: 'Estrutural — fundo padrão.' },
  ]
  const support = [
    { name: 'Cinza card', hex: c['cinza-card'].value, note: 'Fundo de card. Nunca dominante.' },
    { name: 'Cinza borda', hex: c['cinza-borda'].value, note: 'Bordas e placeholder.' },
    { name: 'Amarelo light', hex: c['amarelo-light'].value, note: 'Fundo suave.' },
  ]
  const grays = Object.entries(c.gray).filter(([k]) => k !== 'comment').map(([k, v]) => ({ name: `gray-${k}`, hex: v.value }))
  const reflecta = Object.entries(c.reflecta).filter(([k]) => k !== 'comment').map(([k, v]) => ({ name: k, hex: v.value }))
  const callouts = Object.entries(c.callout)
    .filter(([k]) => k !== 'comment')
    .map(([k, v]) => ({ name: k, hex: v.bar, note: `bar · fundo ${v.bg}` }))

  return (
    <Section
      id="cores"
      eyebrow="03 — Fundamentos"
      title="Cores"
      desc="A paleta Vixlens é intencionalmente restrita. Quatro cores primárias, usadas com rigor. Preto lidera — é a cor de maior presença. Amarelo e Azul são de impacto. Branco é estrutural."
    >
      {/* Regra 60-30-10 — barra de proporção + legenda */}
      <div className="mb-14 rounded-vix-card border border-gray-200 p-6 md:p-8">
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <span className="text-[15px] font-bold text-vix-preto">Regra 60-30-10</span>
          <span className="text-[13px] text-gray-600">a proporção que mantém a identidade coesa.</span>
        </div>

        <div className="mt-5 flex h-5 w-full overflow-hidden rounded-full">
          <div className="w-[60%] bg-vix-preto" />
          <div className="w-[30%] bg-vix-amarelo" />
          <div className="w-[10%] bg-vix-azul" />
        </div>

        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-3">
          <div className="flex items-start gap-3">
            <span className="mt-1 h-9 w-9 shrink-0 rounded-xl bg-vix-preto" />
            <div>
              <div className="text-xl font-extrabold leading-tight text-vix-preto">60%</div>
              <div className="text-[13px] leading-snug text-gray-600">Preto &amp; Branco — dominam todo layout</div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="mt-1 h-9 w-9 shrink-0 rounded-xl bg-vix-amarelo" />
            <div>
              <div className="text-xl font-extrabold leading-tight text-vix-preto">30%</div>
              <div className="text-[13px] leading-snug text-gray-600">Amarelo — destaques, CTAs, faixas</div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="mt-1 h-9 w-9 shrink-0 rounded-xl bg-vix-azul" />
            <div>
              <div className="text-xl font-extrabold leading-tight text-vix-preto">10%</div>
              <div className="text-[13px] leading-snug text-gray-600">Azul — acento de último recurso. Nunca em hero ou header.</div>
            </div>
          </div>
        </div>
      </div>

      <SubTitle>Primárias</SubTitle>
      <div className="mb-12 grid grid-cols-2 gap-[30px] md:grid-cols-4">
        {primary.map((s) => <Swatch key={s.name} {...s} big />)}
      </div>

      <SubTitle>Apoio</SubTitle>
      <div className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-4">
        {support.map((s) => <Swatch key={s.name} {...s} />)}
      </div>

      <SubTitle>Rampa neutra (cinza)</SubTitle>
      <div className="mb-12 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
        {grays.map((s) => <Swatch key={s.name} {...s} />)}
      </div>

      <SubTitle>Reflecta — por tipo de AR</SubTitle>
      <div className="mb-12 grid grid-cols-1 gap-4 md:grid-cols-3">
        {reflecta.map((s) => <Swatch key={s.name} {...s} />)}
      </div>

      <SubTitle>Callouts (dashboards e documentos)</SubTitle>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {callouts.map((s) => <Swatch key={s.name} {...s} />)}
      </div>
    </Section>
  )
}
