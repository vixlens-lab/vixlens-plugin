import { CheckCircle, XCircle, WarningCircle } from '@phosphor-icons/react'
import { Section, SubTitle } from '../Section.jsx'
import tokens from '../../data/tokens.js'

// WCAG 2.1 — cálculo real de contraste (ratios computados, não chutados).
const srgb = (c) => { c /= 255; return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4) }
const lum = (hex) => { const h = hex.replace('#', ''); const r = parseInt(h.slice(0, 2), 16), g = parseInt(h.slice(2, 4), 16), b = parseInt(h.slice(4, 6), 16); return 0.2126 * srgb(r) + 0.7152 * srgb(g) + 0.0722 * srgb(b) }
const ratio = (a, b) => { const L1 = lum(a), L2 = lum(b); const hi = Math.max(L1, L2), lo = Math.min(L1, L2); return (hi + 0.05) / (lo + 0.05) }

// Thresholds WCAG
const TH = { aa: 4.5, aaBig: 3.0, aaa: 7.0, ui: 3.0 }

const c = tokens.color
// Paleta real, lida do token
const PRETO = c.preto.value          // #1D1D1F
const BRANCO = c.branco.value        // #FFFFFF
const AMARELO = c.amarelo.value      // #FAC617
const AZUL = c.azul.value            // #0439D9
// --muted-foreground = hsl(293 8% 45%) → #7A6A7C (não existe hex no JSON de tokens)
const MUTED = '#7A6A7C'
const co = c.callout

const mk = (fg, bg, extra) => ({ fg, bg, r: ratio(fg, bg), ...extra })

function StatusBadge({ label, threshold, pass }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-vix-chip border px-2 py-1 text-[11px] font-medium ${
        pass ? 'border-[#00782D]/25 bg-[#EDFBF4] text-[#00782D]' : 'border-red-200 bg-red-50 text-red-600'
      }`}
    >
      {pass ? <CheckCircle weight="fill" className="h-3.5 w-3.5" /> : <XCircle weight="fill" className="h-3.5 w-3.5" />}
      {label}
      <span className="font-mono text-[10px] opacity-70">&ge;{threshold.toFixed(1)}</span>
    </span>
  )
}

function PairCard({ pair }) {
  const { fg, bg, r, name, use, anti } = pair
  const passAA = r >= TH.aa
  return (
    <div className="overflow-hidden rounded-vix-card border border-gray-200 bg-white">
      {/* Amostra visual — texto real na cor sobre o fundo */}
      <div
        className="flex h-28 flex-col justify-center gap-1 border-b border-gray-100 px-5"
        style={{ background: bg }}
      >
        <span className="text-xl font-bold leading-none" style={{ color: fg }}>Aa Vixlens</span>
        <span className="text-[13px] leading-snug" style={{ color: fg }}>Texto de exemplo em 16px</span>
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="flex items-center gap-1.5 text-[13px] font-bold text-vix-preto">
              {anti && <WarningCircle weight="fill" className="h-4 w-4 text-vix-amarelo" />}
              {name}
            </div>
            <div className="mt-0.5 text-[11px] text-muted-foreground">{use}</div>
          </div>
          <div className="text-right">
            <div className={`font-mono text-xl font-bold ${passAA ? 'text-vix-preto' : 'text-red-600'}`}>{r.toFixed(2)}:1</div>
            <div className="font-mono text-[11px] uppercase text-gray-400">{fg} / {bg}</div>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          <StatusBadge label="AA" threshold={TH.aa} pass={r >= TH.aa} />
          <StatusBadge label="AA Grande" threshold={TH.aaBig} pass={r >= TH.aaBig} />
          <StatusBadge label="AAA" threshold={TH.aaa} pass={r >= TH.aaa} />
        </div>
      </div>
    </div>
  )
}

export default function AcessibilidadeSection() {
  const textPairs = [
    mk(PRETO, BRANCO, { name: 'Preto sobre Branco', use: 'Texto de corpo padrão' }),
    mk(BRANCO, PRETO, { name: 'Branco sobre Preto', use: 'Texto em fundo escuro' }),
    mk(PRETO, AMARELO, { name: 'Preto sobre Amarelo', use: 'Texto de botão CTA' }),
    mk(BRANCO, AZUL, { name: 'Branco sobre Azul', use: 'Botão azul' }),
    mk(AZUL, BRANCO, { name: 'Azul sobre Branco', use: 'Links' }),
    mk(AMARELO, BRANCO, { name: 'Amarelo sobre Branco', use: 'Anti-exemplo — não usar amarelo como texto sobre branco', anti: true }),
    mk(MUTED, BRANCO, { name: 'Cinza texto (muted) sobre Branco', use: 'Texto secundário — token --muted-foreground' }),
  ]

  const calloutPairs = [
    mk(PRETO, co.highlight.bg, { name: 'Preto sobre Destaque', use: `Callout highlight · ${co.highlight.bg}` }),
    mk(PRETO, co.informative.bg, { name: 'Preto sobre Informativo', use: `Callout informative · ${co.informative.bg}` }),
    mk(PRETO, co.critical.bg, { name: 'Preto sobre Crítico', use: `Callout critical · ${co.critical.bg}` }),
    mk(PRETO, co.success.bg, { name: 'Preto sobre Sucesso', use: `Callout success · ${co.success.bg}` }),
  ]

  const allPairs = [...textPairs, ...calloutPairs]
  const total = allPairs.length
  const aaPass = allPairs.filter((p) => p.r >= TH.aa).length
  const allAA = aaPass === total
  const realPairs = allPairs.filter((p) => !p.anti)
  const realAllAA = realPairs.every((p) => p.r >= TH.aa)
  const antiPair = allPairs.find((p) => p.anti)

  const doList = [
    'Preto sobre amarelo em todo CTA e faixa — 10.54:1, folgado no AAA.',
    'Amarelo apenas como fundo ou destaque, nunca como texto.',
    'Azul de acento com moderação; branco sobre azul passa AAA em botão.',
    'Corpo mínimo de 16px; nunca abaixo de 12px.',
    'Foco sempre visível — outline com contraste de UI ≥ 3.0 contra o fundo.',
  ]
  const dontList = [
    `Amarelo como texto sobre branco — ${antiPair.r.toFixed(2)}:1, ilegível.`,
    'Inverter o par preto/amarelo — texto amarelo sobre preto perde contraste de leitura.',
    'Cinza claro de texto sobre fundos coloridos ou tints de callout.',
    'Remover o outline de foco de qualquer elemento interativo.',
    'Reduzir corpo abaixo do tamanho legível para caber mais conteúdo.',
  ]

  return (
    <Section
      id="acessibilidade"
      eyebrow="08 — Fundamentos"
      title="Acessibilidade"
      desc="Contraste de cor conforme WCAG 2.1. Todo par texto/fundo da marca testado — mira AA no mínimo."
    >
      {/* Resumo — selo + contagem honesta, computada de verdade */}
      <div className="mb-14 grid gap-7 rounded-vix-card border border-gray-200 bg-vix-cinza-card p-7 md:grid-cols-[auto_1fr] md:items-center md:gap-10 md:p-9">
        <div className="flex flex-col items-start gap-3">
          <span className="inline-flex items-center gap-2 rounded-vix-chip bg-vix-preto px-4 py-2 text-sm font-bold uppercase tracking-[0.1em] text-white">
            {allAA ? (
              <CheckCircle weight="fill" className="h-5 w-5 text-[#30D389]" />
            ) : (
              <WarningCircle weight="fill" className="h-5 w-5 text-vix-amarelo" />
            )}
            WCAG 2.1 AA
          </span>
          <div className="font-mono text-5xl font-bold text-vix-preto">
            {aaPass}
            <span className="text-2xl text-gray-400">/{total}</span>
          </div>
          <div className="text-[13px] text-muted-foreground">pares aprovados em AA</div>
        </div>
        <p className="text-sm leading-relaxed text-vix-preto">
          {allAA ? (
            <>Todos os {total} pares testados passam no nível AA. A maioria alcança AAA.</>
          ) : (
            <>
              {aaPass} de {total} pares testados passam no nível AA. O único que falha — amarelo sobre branco (
              {antiPair.r.toFixed(2)}:1) — é um anti-exemplo proposital: <b className="text-vix-preto">amarelo nunca é texto sobre branco</b>.
              {realAllAA ? (
                <> Excluindo esse caso, <b className="text-vix-preto">todos os pares reais da marca passam AA</b>, e a maioria alcança AAA.</>
              ) : null}
            </>
          )}
        </p>
      </div>

      <SubTitle>Pares de texto testados</SubTitle>
      <div className="mb-12 grid grid-cols-1 gap-[30px] md:grid-cols-2 lg:grid-cols-3">
        {textPairs.map((p) => <PairCard key={p.name} pair={p} />)}
      </div>

      <SubTitle>Callouts — texto preto sobre fundo tint</SubTitle>
      <div className="mb-12 grid grid-cols-1 gap-[30px] md:grid-cols-2 lg:grid-cols-4">
        {calloutPairs.map((p) => <PairCard key={p.name} pair={p} />)}
      </div>

      <SubTitle>Regras</SubTitle>
      <div className="grid grid-cols-1 gap-[30px] md:grid-cols-2">
        <div className="rounded-vix-card border border-gray-200 bg-white p-6">
          <div className="mb-4 flex items-center gap-2 text-[13px] font-bold uppercase tracking-[0.1em] text-[#00782D]">
            <CheckCircle weight="fill" className="h-5 w-5" />
            Faça
          </div>
          <ul className="space-y-3">
            {doList.map((t) => (
              <li key={t} className="flex gap-2.5 text-[13px] leading-relaxed text-vix-preto">
                <CheckCircle weight="fill" className="mt-0.5 h-4 w-4 shrink-0 text-[#00782D]" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-vix-card border border-gray-200 bg-white p-6">
          <div className="mb-4 flex items-center gap-2 text-[13px] font-bold uppercase tracking-[0.1em] text-red-600">
            <XCircle weight="fill" className="h-5 w-5" />
            Evite
          </div>
          <ul className="space-y-3">
            {dontList.map((t) => (
              <li key={t} className="flex gap-2.5 text-[13px] leading-relaxed text-vix-preto">
                <XCircle weight="fill" className="mt-0.5 h-4 w-4 shrink-0 text-red-600" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className="mt-6 text-[12px] leading-relaxed text-muted-foreground">
        Referência de contraste de UI (bordas, ícones, foco): mínimo 3.0:1 contra o fundo adjacente. Texto grande = a partir de 18px, ou
        14px em negrito. Ratios acima computados em tempo real a partir dos tokens da marca.
      </p>
    </Section>
  )
}
