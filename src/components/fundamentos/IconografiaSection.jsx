import { Section, SubTitle } from '../Section.jsx'
import {
  House, MagnifyingGlass, User, Gear, Bell, Check, Eye, Star,
  CheckCircle, WarningCircle, Info, Clock,
} from '@phosphor-icons/react'

const SIZES = [
  { px: 16, use: 'Inline / labels' },
  { px: 20, use: 'Botões / navegação' },
  { px: 24, use: 'UI padrão' },
  { px: 32, use: 'Elementos em destaque' },
  { px: 48, use: 'Hero / ilustrativo' },
]
const STATUS = [
  { Icon: CheckCircle, color: '#30D389', label: 'Sucesso' },
  { Icon: WarningCircle, color: '#FF6566', label: 'Crítico' },
  { Icon: Info, color: '#615FFF', label: 'Info' },
  { Icon: Clock, color: '#FCD341', label: 'Pendente' },
]

export default function IconografiaSection() {
  return (
    <Section
      id="iconografia"
      eyebrow="06 — Fundamentos"
      title="Iconografia"
      desc="Phosphor Icons é o único sistema para UI, documentos e comunicações. Regular para UI geral, Bold em botões, Fill em estados ativos. Nunca misturar pesos na mesma tela."
    >
      <SubTitle>Tamanhos</SubTitle>
      <div className="mb-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {SIZES.map((s) => (
          <div key={s.px} className="flex flex-col items-center gap-3 rounded-vix-input border border-gray-200 p-5 text-center">
            <Star size={s.px} weight="regular" className="text-vix-preto" />
            <div>
              <div className="text-[13px] font-bold text-vix-preto">{s.px}px</div>
              <div className="text-[11px] leading-snug text-gray-500">{s.use}</div>
            </div>
          </div>
        ))}
      </div>

      <SubTitle>Peso Regular — UI geral</SubTitle>
      <div className="mb-12 flex flex-wrap gap-4 rounded-vix-input border border-gray-200 p-6 text-vix-preto">
        {[House, MagnifyingGlass, User, Gear, Bell, Check, Eye, Star].map((Icon, i) => (
          <Icon key={i} size={28} weight="regular" />
        ))}
      </div>

      <SubTitle>Ícones de status</SubTitle>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {STATUS.map(({ Icon, color, label }) => (
          <div key={label} className="flex items-center gap-3 rounded-vix-input border border-gray-200 p-4">
            <Icon size={28} weight="fill" style={{ color }} />
            <div>
              <div className="text-[13px] font-bold text-vix-preto">{label}</div>
              <div className="font-mono text-[11px] uppercase text-gray-500">{color}</div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
