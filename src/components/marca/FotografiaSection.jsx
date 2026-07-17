import { Section, SubTitle } from '../Section.jsx'
import { UserCircle, Coffee, Eye, CheckCircle, XCircle } from '@phosphor-icons/react'

const CENAS = [
  {
    Icon: UserCircle, bar: '#FAC617', title: 'Retrato próximo',
    desc: 'Enquadramento busto a rosto. Foco nos olhos — lente visível e transparente. Luz suave lateral ou difusa. Expressão natural, não posada.',
    ok: ['Lente transparente, olhos visíveis', 'Fundo neutro ou desfocado'],
    no: ['Reflexo opaco bloqueando os olhos'],
  },
  {
    Icon: Coffee, bar: '#615FFF', title: 'Lifestyle / ambiente',
    desc: 'Pessoa em contexto real — trabalho, leitura, rua. Óculos integrado ao momento, não protagonista. Luz natural preferencial.',
    ok: ['Contexto legível e coerente', 'Pele com textura natural'],
    no: ['Plástico/AI — pele lisa demais'],
  },
  {
    Icon: Eye, bar: '#30D389', title: 'Detalhe de produto',
    desc: 'Close na armação ou na lente — detalhe de material, acabamento ou tratamento AR. Fundo clean, profundidade de campo rasa.',
    ok: ['Foco nítido no detalhe relevante', 'Reflexo AR visível e controlado'],
    no: ['Fundo carregado ou sem foco'],
  },
]

const GALERIA = [
  { src: '/fotos/Frame 32-4.jpg', tag: 'Retrato', cap: 'Luz natural · lente transparente · expressão genuína' },
  { src: '/fotos/Frame 33-1.jpg', tag: 'Lifestyle', cap: 'Contexto real · luz ambiente · natural' },
  { src: '/fotos/Frame 48095592.jpg', tag: 'Detalhe', cap: 'Close armação · acabamento · tratamento visível' },
]

export default function FotografiaSection() {
  return (
    <Section
      id="fotografia"
      eyebrow="02 — Marca"
      title="Fotografia"
      desc="A fotografia Vixlens mostra pessoas reais usando óculos em contextos cotidianos. Tom natural, luz ambiente, rostos com expressão genuína. O produto aparece como parte da vida — não como objeto de catálogo. Lentes com mínimo de reflexo: transparência é sinal de qualidade de tratamento."
    >
      <SubTitle>Direção de cena</SubTitle>
      <div className="mb-12 grid grid-cols-1 gap-5 md:grid-cols-3">
        {CENAS.map((c) => (
          <div key={c.title} className="overflow-hidden rounded-[24px] bg-vix-preto">
            <div className="h-1.5" style={{ background: c.bar }} />
            <div className="p-7">
              <c.Icon size={28} weight="regular" style={{ color: c.bar }} />
              <div className="mb-2.5 mt-3 text-[15px] font-bold text-white">{c.title}</div>
              <p className="text-[13px] leading-relaxed text-white/60">{c.desc}</p>
              <div className="mt-5 flex flex-col gap-1.5">
                {c.ok.map((t) => (
                  <div key={t} className="flex items-center gap-1.5 text-[11px] text-[#30D389]">
                    <CheckCircle size={14} weight="fill" /> {t}
                  </div>
                ))}
                {c.no.map((t) => (
                  <div key={t} className="flex items-center gap-1.5 text-[11px] text-[#FF6566]">
                    <XCircle size={14} weight="fill" /> {t}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <SubTitle>Galeria — 1 exemplo de cada tipo</SubTitle>
      <div className="mb-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {GALERIA.map((g) => (
          <div key={g.tag} className="relative aspect-[3/4] overflow-hidden rounded-[20px]">
            <img src={g.src} alt={g.tag} className="h-full w-full object-cover object-top" loading="lazy" />
            <div className="absolute left-3 top-3 rounded-lg bg-vix-preto/70 px-2.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.06em] text-white backdrop-blur-sm">
              {g.tag}
            </div>
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-3.5 pb-3.5 pt-5 text-[11px] text-white/80">
              {g.cap}
            </div>
          </div>
        ))}
      </div>

      <SubTitle>Comparativo de tratamento AR</SubTitle>
      <p className="mb-5 text-[13px] leading-relaxed text-gray-500">
        O reflexo residual do AR é uma qualidade técnica — não um defeito visual. A diferença entre
        lente sem tratamento e com Reflecta é imediatamente visível. Use em materiais de venda e
        treinamento.
      </p>
      <div className="relative overflow-hidden rounded-[24px]">
        <img src="/fotos/Frame 32-3.jpg" alt="Comparativo AR" className="h-[420px] w-full object-cover" style={{ objectPosition: 'center 40%' }} />
        <div className="absolute inset-y-0 left-1/2 w-0.5 bg-white/60" />
        <div className="absolute left-1/2 top-4 -translate-x-1/2 whitespace-nowrap rounded-full bg-vix-preto/85 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.08em] text-vix-amarelo backdrop-blur">
          Diferença visual do tratamento AR
        </div>
        <div className="absolute left-[8%] top-1/2 -translate-y-1/2 rounded-[10px] bg-[#dc2626]/90 px-4 py-2.5 text-center backdrop-blur">
          <div className="mb-0.5 text-[10px] font-bold uppercase tracking-[0.1em] text-white">✗ Sem AR</div>
          <div className="text-[11px] text-white/80">Reflexo opaco · olhos encobertos</div>
        </div>
        <div className="absolute right-[8%] top-1/2 -translate-y-1/2 rounded-[10px] bg-[#10a166]/90 px-4 py-2.5 text-center backdrop-blur">
          <div className="mb-0.5 text-[10px] font-bold uppercase tracking-[0.1em] text-white">✓ Reflecta AR</div>
          <div className="text-[11px] text-white/80">Residual mínimo · olhos visíveis</div>
        </div>
      </div>
    </Section>
  )
}
