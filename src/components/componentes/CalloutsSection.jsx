import { Section } from '../Section.jsx'
import tokens from '../../data/tokens.js'
import { Star, Info, WarningCircle, CheckCircle } from '@phosphor-icons/react'

const CALLOUTS = [
  { key: 'highlight', Icon: Star, title: 'Destaque', text: 'Informação de maior relevância no documento. Barra amarela.' },
  { key: 'informative', Icon: Info, title: 'Informativo', text: 'Contexto ou nota complementar. Barra roxa.' },
  { key: 'critical', Icon: WarningCircle, title: 'Crítico', text: 'Alerta, restrição ou risco. Barra coral.' },
  { key: 'success', Icon: CheckCircle, title: 'Sucesso', text: 'Confirmação ou resultado positivo. Barra verde.' },
]

export default function CalloutsSection() {
  const c = tokens.color.callout
  return (
    <Section
      id="callouts"
      eyebrow="13 — Componentes"
      title="Callouts"
      desc="Componentes de destaque em documentos e comunicações internas. Quatro tipos — Destaque, Informativo, Crítico e Sucesso — com barra lateral de 4px. Cores do token JSON."
    >
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {CALLOUTS.map(({ key, Icon, title, text }) => (
          <div
            key={key}
            className="flex items-start gap-3 rounded-r-lg border-l-4 p-4"
            style={{ background: c[key].bg, borderColor: c[key].bar }}
          >
            <Icon size={22} weight="fill" style={{ color: c[key].bar }} className="mt-0.5 shrink-0" />
            <div>
              <div className="text-sm font-bold text-vix-preto">{title}</div>
              <div className="mt-0.5 text-[13px] leading-relaxed text-gray-600">{text}</div>
              <div className="mt-1.5 font-mono text-[10px] uppercase text-gray-400">
                bg {c[key].bg} · bar {c[key].bar}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
