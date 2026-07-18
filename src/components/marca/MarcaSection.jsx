import { Section, SubTitle } from '../Section.jsx'
import manifest from '../../data/marca-manifest.json'

const FORMATS = [
  { ext: 'svg', label: 'SVG', primary: true },
  { ext: 'png', label: 'PNG' },
  { ext: 'pdf', label: 'PDF' },
  { ext: 'webp', label: 'WebP' },
]

function DownloadIcon() {
  return (
    <svg viewBox="0 0 16 16" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 2v9M4 7l4 4 4-4M2 14h12" />
    </svg>
  )
}

function MarcaCard({ concept }) {
  return (
    <figure className="m-0 flex flex-col overflow-hidden rounded-vix-input border border-gray-200 bg-white">
      <div className={`flex h-[120px] items-center justify-center p-6 ${concept.bg === 'dark' ? 'bg-vix-preto' : 'bg-vix-cinza-card'}`}>
        <img src={concept.fmt.webp} alt={concept.label} loading="lazy" className="max-h-[60px] max-w-full object-contain" />
      </div>
      <figcaption className="border-t border-gray-200 p-4">
        <div className="mb-2.5 text-xs font-bold text-vix-preto">{concept.label}</div>
        <div className="flex flex-wrap items-center gap-1.5">
          {FORMATS.map((f) => (
            <a
              key={f.ext}
              href={concept.fmt[f.ext]}
              download
              className={`inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-[11px] font-bold transition-colors ${
                f.primary
                  ? 'bg-vix-preto text-white hover:bg-[#333]'
                  : 'border border-gray-300 text-vix-preto hover:bg-vix-cinza-card'
              }`}
            >
              {f.label}
            </a>
          ))}
        </div>
      </figcaption>
    </figure>
  )
}

function KitCard({ line }) {
  const n = line.groups.reduce((a, g) => a + g.concepts.length, 0)
  return (
    <div className="mb-2 mt-6 flex flex-col items-start gap-4 rounded-vix-card border border-gray-200 bg-vix-cinza-card p-8 md:flex-row md:items-center md:justify-between">
      <div>
        <div className="text-lg font-bold text-vix-preto">Brand Kit — {line.title}</div>
        <div className="mt-1.5 text-[13px] leading-relaxed text-gray-500">
          Pacote com tudo: {n} variações × 4 formatos (SVG, PNG, PDF, WebP) num único .zip.
        </div>
      </div>
      <a
        href={line.kit}
        download
        className="inline-flex shrink-0 items-center gap-2 self-stretch justify-center rounded-vix-button bg-vix-preto px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-[#333333] md:self-auto"
      >
        <DownloadIcon />
        Baixar .zip
      </a>
    </div>
  )
}

export default function MarcaSection() {
  return (
    <Section
      id="logotipo"
      eyebrow="01 — Marca"
      title="Logotipo & Marcas"
      desc="Todas as marcas do ecossistema Vixlens para download — SVG, PNG, PDF e WebP, em cada variação. Os arquivos são transparentes; o fundo é só pra visualização."
    >
      {manifest.lines.map((line, li) => (
        <div key={line.id} className={li > 0 ? 'mt-14' : ''}>
          <SubTitle>{line.title}</SubTitle>
          {line.desc && <p className="-mt-1 mb-5 max-w-2xl text-[13px] leading-relaxed text-gray-500">{line.desc}</p>}
          {line.groups.map((g) => (
            <div key={g.prod}>
              {g.label && <div className="mb-3.5 mt-7 text-xs font-bold text-vix-preto">{g.label}</div>}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {g.concepts.map((c) => (
                  <MarcaCard key={c.slug} concept={c} />
                ))}
              </div>
            </div>
          ))}
          <KitCard line={line} />
        </div>
      ))}
    </Section>
  )
}
