import { Section, SubTitle } from '../Section.jsx'
import {
  House, MagnifyingGlass, User, Gear, Bell, Check, Eye, Star,
  CheckCircle, WarningCircle, Info, Clock, ArrowSquareOut,
} from '@phosphor-icons/react'
import {
  Home as LuHome, Search as LuSearch, User as LuUser, Settings as LuSettings,
  Bell as LuBell, Check as LuCheck, Eye as LuEye, Star as LuStar,
} from 'lucide-react'

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
      eyebrow="07 — Fundamentos"
      title="Iconografia"
      desc="Phosphor é o sistema principal de ícones da Vixlens (UI, documentos, comunicações); os componentes shadcn/ui usam Lucide internamente. Regular para UI geral, Bold em botões, Fill em estados ativos. Nunca misturar pesos na mesma tela."
    >
      <SubTitle>Bibliotecas</SubTitle>
      <div className="mb-12 grid grid-cols-1 gap-4 md:grid-cols-2">
        {/* Phosphor — principal */}
        <div className="flex flex-col rounded-vix-card border border-gray-200 p-6">
          <div className="flex items-start justify-between gap-3">
            <div>
              <div className="text-[15px] font-bold text-vix-preto">Phosphor Icons</div>
              <div className="mt-0.5 text-[12px] leading-relaxed text-gray-500">Ícones da UI, documentos e comunicações Vixlens.</div>
            </div>
            <span className="shrink-0 rounded-vix-chip bg-vix-amarelo-light px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.06em] text-vix-preto">Principal</span>
          </div>
          <div className="mt-5 flex flex-wrap gap-4 text-vix-preto">
            {[House, MagnifyingGlass, User, Gear, Bell, Check, Eye, Star].map((Icon, i) => (
              <Icon key={i} size={26} weight="regular" />
            ))}
          </div>
          <a
            href="https://phosphoricons.com"
            target="_blank"
            rel="noopener"
            className="mt-6 inline-flex w-fit items-center gap-1.5 rounded-vix-button border border-gray-200 px-3.5 py-2 text-[12px] font-bold text-vix-preto transition-colors hover:bg-gray-50"
          >
            <ArrowSquareOut size={14} weight="bold" /> Acessar Phosphor
          </a>
        </div>

        {/* Lucide — shadcn */}
        <div className="flex flex-col rounded-vix-card border border-gray-200 p-6">
          <div className="flex items-start justify-between gap-3">
            <div>
              <div className="text-[15px] font-bold text-vix-preto">Lucide</div>
              <div className="mt-0.5 text-[12px] leading-relaxed text-gray-500">Usada internamente pelos componentes shadcn/ui.</div>
            </div>
            <span className="shrink-0 rounded-vix-chip bg-gray-100 px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.06em] text-gray-500">shadcn</span>
          </div>
          <div className="mt-5 flex flex-wrap gap-4 text-vix-preto">
            {[LuHome, LuSearch, LuUser, LuSettings, LuBell, LuCheck, LuEye, LuStar].map((Icon, i) => (
              <Icon key={i} size={26} strokeWidth={2} />
            ))}
          </div>
          <a
            href="https://lucide.dev/icons/"
            target="_blank"
            rel="noopener"
            className="mt-6 inline-flex w-fit items-center gap-1.5 rounded-vix-button border border-gray-200 px-3.5 py-2 text-[12px] font-bold text-vix-preto transition-colors hover:bg-gray-50"
          >
            <ArrowSquareOut size={14} weight="bold" /> Acessar Lucide
          </a>
        </div>
      </div>

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
