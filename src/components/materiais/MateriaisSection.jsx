import { Section, SubTitle } from '../Section.jsx'
import { ArrowSquareOut, DownloadSimple } from '@phosphor-icons/react'

const GRUPOS = [
  {
    grupo: 'Papelaria',
    cards: [
      { t: 'Cartão de visita', d: 'Modelo com os dados do consultor. Edita, troca nome e telefone, exporta pra gráfica.', b: [['Abrir no Google', 'open'], ['Baixar PDF', 'pdf']] },
      { t: 'Papel timbrado', d: 'Cabeçalho oficial pra cartas, ofícios e documentos internos.', b: [['Abrir no Google Docs', 'open'], ['Baixar PDF', 'pdf']] },
      { t: 'Assinatura de e-mail', d: 'Assinatura padronizada pra Gmail/Outlook, com logo e contatos.', b: [['Copiar assinatura', 'open']] },
    ],
  },
  {
    grupo: 'Comercial',
    cards: [
      { t: 'Proposta comercial', d: 'Modelo de proposta pronto pra preencher e enviar ao cliente.', b: [['Abrir no Google Docs', 'open'], ['Baixar PDF', 'pdf']] },
      { t: 'Apresentação de vendas', d: 'Deck de vendas pro consultor apresentar a Vixlens.', b: [['Abrir no Google Slides', 'open'], ['Baixar PDF', 'pdf']] },
      { t: 'Tabela de preços', d: 'Planilha de preços atualizada, pronta pra consulta e envio.', b: [['Abrir no Google Sheets', 'open'], ['Baixar PDF', 'pdf']] },
    ],
  },
  {
    grupo: 'Institucional',
    cards: [
      { t: 'Apresentação institucional', d: 'Quem é a Vixlens — pra parceiros, eventos e imprensa.', b: [['Abrir no Google Slides', 'open'], ['Baixar PDF', 'pdf']] },
      { t: 'Flyer / folder', d: 'Material de divulgação pra ótica e ponto de venda.', b: [['Baixar PDF', 'pdf']] },
    ],
  },
]

function DisabledBtn({ label, kind }) {
  const Icon = kind === 'pdf' ? DownloadSimple : ArrowSquareOut
  return (
    <span
      aria-disabled="true"
      className="inline-flex cursor-default items-center gap-1.5 rounded-full border border-gray-200 bg-vix-cinza-card px-3 py-1.5 text-[11px] font-bold text-gray-400"
    >
      <Icon size={13} weight="bold" />
      {label}
    </span>
  )
}

export default function MateriaisSection() {
  return (
    <Section
      id="materiais"
      eyebrow="14 — Materiais"
      title={
        <span className="inline-flex flex-wrap items-center gap-3">
          Materiais
          <span className="rounded-full bg-vix-cinza-card px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.06em] text-gray-500">
            Em breve
          </span>
        </span>
      }
      desc="Modelos prontos pro dia a dia — papelaria, comercial e institucional. Editáveis no Google (Docs, Sheets, Slides) e no celular. Os arquivos estão sendo organizados; em breve com download e link de edição."
    >
      {GRUPOS.map((g, i) => (
        <div key={g.grupo} className={i > 0 ? 'mt-14' : ''}>
          <SubTitle>{g.grupo}</SubTitle>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {g.cards.map((card) => (
              <div key={card.t} className="flex flex-col gap-3 rounded-vix-input border border-gray-200 bg-white p-6">
                <div className="flex items-center justify-between gap-2.5">
                  <div className="text-[15px] font-bold text-vix-preto">{card.t}</div>
                  <span className="shrink-0 rounded-vix-chip bg-vix-cinza-card px-2 py-1 text-[9px] font-bold uppercase tracking-[0.08em] text-gray-500">
                    Em breve
                  </span>
                </div>
                <p className="flex-1 text-[13px] leading-relaxed text-gray-500">{card.d}</p>
                <div className="flex flex-wrap gap-1.5">
                  {card.b.map(([label, kind]) => (
                    <DisabledBtn key={label} label={label} kind={kind} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </Section>
  )
}
