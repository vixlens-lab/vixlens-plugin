import { Section, SubTitle } from '../Section.jsx'
import { CopyValue, CodeBlock } from '../Copy.jsx'
import tokens from '../../data/tokens.js'
import { Star, Info, WarningCircle, CheckCircle } from '@phosphor-icons/react'
import { PropsTable, DosDonts } from './ComponentDocs.jsx'

const CALLOUT_TYPES = [
  { prop: 'Destaque', tipo: 'barra amarela', padrao: '—', desc: 'Informação de maior relevância no documento. Quando algo precisa saltar aos olhos.' },
  { prop: 'Informativo', tipo: 'barra roxa', padrao: '—', desc: 'Contexto ou nota complementar. Quando há informação de apoio, não urgente.' },
  { prop: 'Crítico', tipo: 'barra coral', padrao: '—', desc: 'Alerta, restrição ou risco. Quando ignorar a informação tem consequência.' },
  { prop: 'Sucesso', tipo: 'barra verde', padrao: '—', desc: 'Confirmação ou resultado positivo. Quando algo foi concluído com êxito.' },
]

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
              <div className="mt-1.5 flex flex-wrap items-center gap-x-0.5 font-mono text-[10px] uppercase text-gray-600">
                bg <CopyValue value={c[key].bg} size={11} className="text-[10px] uppercase text-gray-600" />
                · bar <CopyValue value={c[key].bar} size={11} className="text-[10px] uppercase text-gray-600" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <SubTitle className="mt-14">Tipos &amp; quando usar</SubTitle>
      <PropsTable rows={CALLOUT_TYPES} />

      <SubTitle className="mt-12">Do &amp; Don't</SubTitle>
      <DosDonts
        dos={[
          'Escolher o tipo pelo significado da mensagem.',
          'Texto curto e acionável.',
          'De 1 a 2 callouts por documento.',
        ]}
        donts={[
          'Usar Crítico para tudo.',
          'Empilhar muitos callouts seguidos.',
          'Usar a cor sem o significado correspondente.',
        ]}
      />

      <SubTitle className="mt-12">Código</SubTitle>
      <CodeBlock
        code={`import { Star } from '@phosphor-icons/react'

<div
  className="flex items-start gap-3 rounded-r-lg border-l-4 p-4"
  style={{ background: '#FFFBEB', borderColor: '#FCD341' }}
>
  <Star weight="fill" style={{ color: '#FCD341' }} />
  <div>
    <div className="font-bold">Destaque</div>
    <p>Mensagem do callout.</p>
  </div>
</div>`}
      />
    </Section>
  )
}
