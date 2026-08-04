import { Section } from '../Section.jsx'
import { CopyValue } from '../Copy.jsx'
import tokens from '../../data/tokens.js'

const USE = {
  'space-1': 'Micro — gap de ícone, separador',
  'space-2': 'XS — gap ícone + texto, listas',
  'space-3': 'SM — padding badge, gap de form',
  'space-4': 'MD-SM — gap entre seções pequenas',
  'space-5': 'MD — padding card, gap interno',
  'space-6': 'MD-LG — gap de seção interna',
  'space-7': 'LG — gap entre cards, padding de botão',
  'space-8': 'XL — âncora. Ponto de partida padrão',
  'space-9': '2XL — margens maiores',
  'space-10': '3XL — respiro de seção',
  'space-11': '4XL — padding lateral de seção',
  'space-12': '5XL — padding vertical de seção',
}

export default function EspacamentoSection() {
  const rows = Object.entries(tokens.spacing).filter(([k]) => k.startsWith('space-'))
  return (
    <Section
      id="espacamento"
      eyebrow="08 — Fundamentos"
      title="Espaçamento"
      desc="Sistema derivado do Figma Vixlens 3.0. Base 8px, âncora 40px (space-8). Nunca inventar valores intermediários como 35 ou 45px."
    >
      <div className="flex flex-col gap-2.5">
        {rows.map(([token, value]) => {
          const anchor = token === 'space-8'
          return (
            <div
              key={token}
              className={`grid grid-cols-[70px_56px_1fr] items-center gap-4 rounded-lg px-4 py-2.5 md:grid-cols-[80px_64px_1fr_260px] ${
                anchor ? 'bg-vix-preto text-white' : 'bg-vix-cinza-card'
              }`}
            >
              <div className={`text-[11px] font-bold uppercase tracking-[0.06em] ${anchor ? 'text-gray-400' : 'text-gray-600'}`}>
                {token}
              </div>
              <CopyValue
                value={value}
                mono={false}
                tone={anchor ? 'dark' : 'light'}
                className={`text-[13px] font-bold ${anchor ? 'text-vix-amarelo' : 'text-vix-preto'}`}
              >
                {value}
              </CopyValue>
              <div className="h-1 rounded-full" style={{ width: value, background: anchor ? '#FAC617' : '#1D1D1F' }} />
              <div className={`hidden text-xs md:block ${anchor ? 'text-white/70' : 'text-gray-600'}`}>{USE[token]}</div>
            </div>
          )
        })}
      </div>
    </Section>
  )
}
