import { Section, SubTitle } from '../Section.jsx'
import tokens from '../../data/tokens.js'

const scale = tokens.typography.scale
const META = {
  h1: { name: 'H1 · Display', tracking: '-0.02em' },
  h2: { name: 'H2 · Display', tracking: '-0.02em' },
  h3: { name: 'H3 · Display', tracking: '-0.02em' },
  h4: { name: 'H4 · Seção', tracking: '-0.01em' },
  h5: { name: 'H5 · Seção', tracking: '-0.01em' },
  h6: { name: 'H6 · Seção', tracking: '0' },
  paragraph: { name: 'Parágrafo', tracking: '0' },
  bold: { name: 'Corpo bold', tracking: '0' },
  label: { name: 'Label', tracking: '0.02em' },
  caption: { name: 'Caption', tracking: '0' },
  overline: { name: 'Overline', tracking: '0.08em' },
}
const sampleSize = (px) => Math.min(parseInt(px, 10), 52)

export default function TipografiaSection() {
  return (
    <Section
      id="tipografia"
      eyebrow="04 — Fundamentos"
      title="Tipografia"
      desc="Host Grotesk em todos os elementos digitais. Montserrat/Mont é reservada para impressos. Nunca itálico, nunca caixa alta em parágrafo, no máximo dois pesos por bloco."
    >
      {/* Exemplo de texto — a tipografia em ação */}
      <SubTitle>Exemplo em uso</SubTitle>
      <div className="mb-14 rounded-vix-card border border-gray-200 bg-white p-8 md:p-12">
        <div className="text-[11px] font-medium uppercase tracking-[0.08em] text-vix-azul">Laboratório óptico</div>
        <h3 className="mt-3 text-4xl font-bold leading-[1.05] tracking-[-0.02em] text-vix-preto md:text-6xl">
          Sua ótica cresce com a Matriz Marca Própria.
        </h3>
        <p className="mt-5 max-w-2xl text-lg leading-[1.5] text-gray-600">
          Material, índice e desenho da lente espelhados automaticamente. O consultor abre, confere e
          envia — sem renegociação, sem aditivo. A tipografia carrega a autoridade técnica sem gritar.
        </p>
        <div className="mt-6 flex flex-wrap gap-6">
          <div>
            <div className="text-[11px] font-medium uppercase tracking-[0.08em] text-gray-400">Escala</div>
            <div className="mt-1 text-2xl font-medium text-vix-preto">Centenas de jobs por dia</div>
          </div>
          <div>
            <div className="text-[11px] font-medium uppercase tracking-[0.08em] text-gray-400">Rastreio</div>
            <div className="mt-1 text-2xl font-medium text-vix-preto">Cada um monitorado</div>
          </div>
        </div>
      </div>

      {/* Escala completa */}
      <SubTitle>Escala (Host Grotesk)</SubTitle>
      <div className="flex flex-col divide-y divide-gray-100 overflow-x-auto">
        {Object.entries(scale).map(([key, s]) => (
          <div key={key} className="flex items-baseline gap-6 py-4">
            <div className="w-44 shrink-0">
              <div className="text-[13px] font-bold text-vix-preto">{META[key].name}</div>
              <div className="font-mono text-[11px] leading-relaxed text-gray-500">
                {s.desktop} / {s.mobile} · peso {s.weight}
                {s.lineHeight ? ` · lh ${s.lineHeight}` : ''} · track {META[key].tracking}
              </div>
            </div>
            <div
              className="min-w-0 flex-1 truncate text-vix-preto"
              style={{ fontSize: sampleSize(s.desktop), fontWeight: s.weight, lineHeight: 1.1, letterSpacing: META[key].tracking }}
            >
              Vixlens
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
