import { Section, SubTitle } from '../Section.jsx'
import tokens from '../../data/tokens.js'

const scale = tokens.typography.scale
const NAMES = {
  h1: 'H1 · Display', h2: 'H2 · Display', h3: 'H3 · Display',
  h4: 'H4 · Seção', h5: 'H5 · Seção', h6: 'H6 · Seção',
  paragraph: 'Parágrafo', bold: 'Corpo bold', label: 'Label', caption: 'Caption', overline: 'Overline',
}
// tamanho de amostra limitado pra caber sem estourar
const sampleSize = (px) => Math.min(parseInt(px, 10), 56)

export default function TipografiaSection() {
  return (
    <Section
      id="tipografia"
      eyebrow="04 — Fundamentos"
      title="Tipografia"
      desc="Host Grotesk em todos os elementos digitais. Montserrat/Mont é reservada para impressos. Nunca itálico, nunca caixa alta em parágrafo, no máximo dois pesos por bloco."
    >
      <SubTitle>Escala (Host Grotesk)</SubTitle>
      <div className="flex flex-col divide-y divide-gray-100 overflow-x-auto">
        {Object.entries(scale).map(([key, s]) => (
          <div key={key} className="flex items-baseline gap-6 py-4">
            <div className="w-40 shrink-0">
              <div className="text-[13px] font-bold text-vix-preto">{NAMES[key]}</div>
              <div className="font-mono text-[11px] text-gray-500">
                {s.desktop} · {s.mobile} · {s.weight}{s.lineHeight ? ` · ${s.lineHeight}` : ''}
              </div>
            </div>
            <div
              className="min-w-0 flex-1 truncate text-vix-preto"
              style={{ fontSize: sampleSize(s.desktop), fontWeight: s.weight, lineHeight: 1.1 }}
            >
              Vixlens
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
