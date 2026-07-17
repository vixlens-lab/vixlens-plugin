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
const px = (v) => parseInt(v, 10)
const lhNum = (v) => (v ? px(v) / 100 : 1.15)
// escala real preservada: fator único por linha p/ caber sem perder a proporção desktop↔mobile
const CAP = 60
const factor = (dpx) => Math.min(1, CAP / px(dpx))

export default function TipografiaSection() {
  return (
    <Section
      id="tipografia"
      eyebrow="04 — Fundamentos"
      title="Tipografia"
      desc="Host Grotesk em todos os elementos digitais. Montserrat/Mont é reservada para impressos. Nunca itálico, nunca caixa alta em parágrafo, no máximo dois pesos por bloco."
    >
      {/* Baixar as fontes */}
      <SubTitle>Baixar as fontes</SubTitle>
      <div className="mb-14 grid grid-cols-1 gap-5 md:grid-cols-2">
        {/* Host Grotesk */}
        <div className="rounded-vix-card bg-vix-preto p-8">
          <div className="text-[11px] font-medium uppercase tracking-[0.08em] text-white/40">Web · Digital</div>
          <div className="mt-2 text-5xl font-bold leading-none text-white" style={{ fontFamily: "'Host Grotesk', sans-serif" }}>Host Grotesk</div>
          <div className="mt-3 text-[11px] font-semibold uppercase tracking-[0.08em] text-vix-amarelo">Site · Plataformas · UI</div>
          <p className="mt-4 text-xs leading-relaxed text-white/45">Disponível via Google Fonts. Pesos 300 · 400 · 500 · 600 · 700 · 800.</p>
          <div className="mt-5 flex flex-col gap-1.5">
            {[['Regular', 400], ['SemiBold', 600], ['Bold', 700], ['ExtraBold', 800]].map(([n, w]) => (
              <div key={n} className="flex items-center border-b border-white/5 py-1.5 last:border-0">
                <span className="w-24 shrink-0 text-xs text-white/45">{n}</span>
                <span className="flex-1 text-right text-white" style={{ fontWeight: w, color: w === 800 ? '#FAC617' : '#fff' }}>Aa Bb Cc</span>
                <span className="w-8 shrink-0 text-right text-[10px] text-white/30">{w}</span>
              </div>
            ))}
          </div>
          <a href="https://fonts.google.com/specimen/Host+Grotesk" target="_blank" rel="noopener" className="mt-6 inline-flex rounded-full bg-vix-amarelo px-5 py-2.5 text-sm font-bold text-vix-preto transition-colors hover:bg-vix-amarelo-hover">
            Abrir no Google Fonts
          </a>
        </div>
        {/* Mont */}
        <div className="rounded-vix-card border border-gray-200 bg-white p-8">
          <div className="text-[11px] font-medium uppercase tracking-[0.08em] text-gray-400">Print · Documentos</div>
          <div className="mt-2 text-5xl font-black leading-none tracking-[0.04em] text-vix-preto">Mont</div>
          <div className="mt-3 text-[11px] font-semibold uppercase tracking-[0.08em] text-vix-cinza">Propostas · Manuais · PDFs</div>
          <p className="mt-4 text-xs leading-relaxed text-gray-400">Licença comercial requerida. Substituta web: Montserrat (Google Fonts).</p>
          <div className="mt-5 flex flex-col gap-1.5">
            {[['Light', 300], ['Regular', 400], ['SemiBold', 600], ['Black', 900]].map(([n, w]) => (
              <div key={n} className="flex items-center border-b border-gray-100 py-1.5 text-vix-preto last:border-0">
                <span className="w-24 shrink-0 text-xs text-gray-400">{n}</span>
                <span className="flex-1 text-right" style={{ fontWeight: w }}>Aa Bb Cc</span>
                <span className="w-8 shrink-0 text-right text-[10px] text-gray-300">{w}</span>
              </div>
            ))}
          </div>
          <a href="/assets/fontes/mont/vixlens-mont.zip" download className="mt-6 inline-flex items-center gap-2 rounded-full bg-vix-preto px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-[#333333]">
            Baixar Mont (.zip)
          </a>
        </div>
      </div>

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

      {/* Escala completa — equivalência desktop ↔ mobile */}
      <SubTitle>Escala (Host Grotesk) — desktop ↔ mobile</SubTitle>
      <p className="-mt-2 mb-6 max-w-2xl text-[13px] leading-relaxed text-gray-500">
        Cada nível colapsa de desktop para mobile mantendo a proporção. As amostras abaixo estão
        renderizadas na escala real (H1 cai de <b className="text-vix-preto">96&nbsp;px → 48&nbsp;px</b>),
        com o line-height e o tracking exatos de cada nível.
      </p>
      <div className="flex flex-col gap-3">
        {Object.entries(scale).map(([key, s]) => {
          const same = s.desktop === s.mobile
          const f = factor(s.desktop)
          const lh = lhNum(s.lineHeight)
          const tk = META[key].tracking
          return (
            <div key={key} className="rounded-vix-card border border-gray-200 p-5 md:p-6">
              {/* cabeçalho da linha: nome + specs */}
              <div className="mb-4 flex flex-wrap items-center gap-x-3 gap-y-2">
                <div className="mr-1 text-[13px] font-bold text-vix-preto">{META[key].name}</div>
                <span className="rounded-full bg-vix-preto px-2.5 py-0.5 font-mono text-[11px] font-medium text-white">
                  {s.desktop} → {s.mobile}
                </span>
                <span className="rounded-full bg-gray-100 px-2.5 py-0.5 font-mono text-[11px] text-gray-600">peso {s.weight}</span>
                <span className="rounded-full bg-gray-100 px-2.5 py-0.5 font-mono text-[11px] text-gray-600">lh {s.lineHeight || 'auto'}</span>
                <span className="rounded-full bg-gray-100 px-2.5 py-0.5 font-mono text-[11px] text-gray-600">track {tk}</span>
              </div>
              {/* amostras lado a lado, na proporção real */}
              <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:gap-10">
                <div className="min-w-0 flex-1">
                  <div className="mb-1.5 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.1em] text-gray-400">
                    Desktop <span className="font-mono text-vix-azul">{s.desktop}</span>
                  </div>
                  <div
                    className="truncate text-vix-preto"
                    style={{ fontSize: px(s.desktop) * f, fontWeight: s.weight, lineHeight: lh, letterSpacing: tk }}
                  >
                    Vixlens
                  </div>
                </div>
                <div className="min-w-0 flex-1 border-t border-gray-100 pt-4 sm:border-l sm:border-t-0 sm:pl-10 sm:pt-0">
                  <div className="mb-1.5 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.1em] text-gray-400">
                    Mobile <span className="font-mono text-vix-azul">{s.mobile}</span>
                    {same && <span className="font-sans font-medium normal-case tracking-normal text-gray-300">· igual</span>}
                  </div>
                  <div
                    className="truncate text-vix-preto"
                    style={{ fontSize: px(s.mobile) * f, fontWeight: s.weight, lineHeight: lh, letterSpacing: tk }}
                  >
                    Vixlens
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Escala print — Mont */}
      <SubTitle className="mt-14">Escala print — Mont (propostas, manuais, documentos)</SubTitle>
      <div className="mb-14 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {[
          ['Título capa', '48 pt · Black', 'Mont Black — capas de proposta'],
          ['Título de seção', '24 pt · Bold', 'Abertura de blocos'],
          ['Subtítulo', '18 pt · SemiBold', 'Destaques dentro da seção'],
          ['Corpo', '11 pt · Regular', 'Texto corrido, lh 1.5'],
          ['Legenda', '9 pt · Regular', 'Notas, rodapés'],
          ['Dados / números', '11 pt · SemiBold', 'Tabelas e valores'],
        ].map(([n, s, u]) => (
          <div key={n} className="rounded-vix-input border border-gray-200 p-4">
            <div className="text-[13px] font-bold text-vix-preto">{n}</div>
            <div className="mt-0.5 font-mono text-xs text-vix-azul">{s}</div>
            <div className="mt-1 text-[11px] text-gray-500">{u}</div>
          </div>
        ))}
      </div>

      {/* Regras de uso */}
      <SubTitle>Regras de uso</SubTitle>
      <div className="flex flex-col gap-2.5">
        {[
          'Nunca itálico, em nenhum elemento.',
          'Nunca caixa alta em parágrafo corrido — só em logo, tagline e labels de callout.',
          'No máximo dois pesos no mesmo bloco de texto.',
          'Underline reservado a links — nunca como ênfase.',
          'Peso Heavy/900 só em logo e display de impressos — nunca na web.',
          'Host Grotesk no digital, Mont/Montserrat só em impressos.',
        ].map((r) => (
          <div key={r} className="flex items-start gap-3 rounded-lg border border-gray-100 p-3.5">
            <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-vix-amarelo text-[11px] font-bold text-vix-preto">·</div>
            <span className="text-[13px] leading-relaxed text-gray-600">{r}</span>
          </div>
        ))}
      </div>
    </Section>
  )
}
