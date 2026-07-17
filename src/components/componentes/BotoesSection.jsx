import { ArrowRight } from '@phosphor-icons/react'
import { Section, SubTitle } from '../Section.jsx'
import { Button } from '../ui/button.jsx'

export default function BotoesSection() {
  return (
    <Section
      id="botoes"
      eyebrow="10 — Componentes"
      title="Botões"
      desc="Sobre shadcn/ui, skin nos tokens Vixlens. Radius sempre 30px (pill), Host Grotesk Bold. Primário = amarelo (CTA) ou preto (fundo claro). Nunca mais de um Primário por seção."
    >
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <div className="rounded-vix-card border border-gray-200 bg-white p-8">
          <SubTitle>Fundo claro</SubTitle>
          <div className="flex flex-wrap items-center gap-4">
            <Button variant="dark" size="lg">Ação principal</Button>
            <Button variant="outline" size="lg">Secundário</Button>
          </div>
        </div>
        <div className="rounded-vix-card bg-vix-preto p-8">
          <SubTitle className="border-white/15 text-white/45">Fundo escuro</SubTitle>
          <div className="flex flex-wrap items-center gap-4">
            <Button size="lg">Ação principal</Button>
            <Button variant="outlineDark" size="lg">Secundário</Button>
          </div>
        </div>
      </div>

      <SubTitle className="mt-12">Variantes (shadcn, tema Vixlens)</SubTitle>
      <div className="mb-12 flex flex-wrap items-center gap-4">
        <Button>Default</Button>
        <Button variant="dark">Dark</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="link">Link</Button>
      </div>

      <SubTitle>Tamanhos e estados</SubTitle>
      <div className="mb-12 flex flex-wrap items-center gap-4">
        <Button size="sm">Small</Button>
        <Button>Default</Button>
        <Button size="lg">Large</Button>
        <Button disabled>Desabilitado</Button>
      </div>

      {/* Guia de tamanhos — base shadcn, com sugestão de texto */}
      <SubTitle>Guia de tamanhos</SubTitle>
      <p className="-mt-2 mb-5 max-w-2xl text-[13px] leading-relaxed text-gray-500">
        Alturas herdadas do shadcn/ui (<span className="font-mono text-vix-azul">h-8 / h-9 / h-10</span>), com o
        pill Vixlens (radius 30px) por cima. O texto segue a escala do shadcn: <b className="text-vix-preto">14px
        (text-sm)</b> no padrão, subindo a 16px só no Large para CTAs.
      </p>
      <div className="overflow-x-auto rounded-vix-input border border-gray-200">
        <table className="w-full min-w-[640px] text-left text-[13px]">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50 text-[11px] font-bold uppercase tracking-[0.08em] text-gray-500">
              <th className="px-5 py-3 font-bold">Exemplo</th>
              <th className="px-5 py-3 font-bold">Tamanho</th>
              <th className="px-5 py-3 font-bold">Altura</th>
              <th className="px-5 py-3 font-bold">Texto sugerido</th>
              <th className="px-5 py-3 font-bold">Quando usar</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {[
              { size: 'sm', label: 'Small', h: '32px · h-8', px: 'px-3', txt: '14px · text-sm', use: 'Toolbars, tabelas, ações densas' },
              { size: 'default', label: 'Default', h: '36px · h-9', px: 'px-4', txt: '14px · text-sm', use: 'Padrão — maioria dos casos' },
              { size: 'lg', label: 'Large', h: '40px · h-10', px: 'px-6', txt: '16px · text-base', use: 'CTAs, hero, formulário-chave' },
            ].map((r) => (
              <tr key={r.size} className="align-middle">
                <td className="px-5 py-4">
                  <Button variant="dark" size={r.size}>Ação</Button>
                </td>
                <td className="px-5 py-4">
                  <div className="font-bold text-vix-preto">{r.label}</div>
                  <div className="font-mono text-[11px] text-gray-500">size="{r.size}"</div>
                </td>
                <td className="px-5 py-4 font-mono text-[12px] text-gray-600">{r.h} · {r.px}</td>
                <td className="px-5 py-4 font-mono text-[12px] text-vix-azul">{r.txt}</td>
                <td className="px-5 py-4 text-gray-600">{r.use}</td>
              </tr>
            ))}
            <tr className="align-middle">
              <td className="px-5 py-4">
                <Button variant="dark" size="icon" aria-label="Ícone"><ArrowRight /></Button>
              </td>
              <td className="px-5 py-4">
                <div className="font-bold text-vix-preto">Icon</div>
                <div className="font-mono text-[11px] text-gray-500">size="icon"</div>
              </td>
              <td className="px-5 py-4 font-mono text-[12px] text-gray-600">36×36px · size-9</td>
              <td className="px-5 py-4 font-mono text-[12px] text-gray-600">ícone 16px</td>
              <td className="px-5 py-4 text-gray-600">Só ícone — sempre com aria-label</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Section>
  )
}
