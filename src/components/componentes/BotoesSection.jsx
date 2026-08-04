import { ArrowRight } from '@phosphor-icons/react'
import { Section, SubTitle } from '../Section.jsx'
import { Button } from '../ui/button.jsx'
import { PropsTable, DosDonts } from './ComponentDocs.jsx'
import { CodeBlock } from '../Copy.jsx'

const BUTTON_PROPS = [
  { prop: 'variant', tipo: 'default | dark | secondary | outline | ghost | destructive | link', padrao: '"default"', desc: 'Estilo visual. default = amarelo (CTA), dark = preto sobre fundo claro.' },
  { prop: 'size', tipo: 'sm | default | lg | icon', padrao: '"default"', desc: 'Altura e padding. lg para CTAs, icon só para ícone (use aria-label).' },
  { prop: 'asChild', tipo: 'boolean', padrao: 'false', desc: 'Renderiza o filho como raiz (ex.: <a>) mantendo os estilos do botão.' },
  { prop: 'disabled', tipo: 'boolean', padrao: 'false', desc: 'Desabilita o botão e reduz a opacidade, bloqueando o clique.' },
]

export default function BotoesSection() {
  return (
    <Section
      id="botoes"
      eyebrow="10 — Componentes"
      title="Botões"
      desc="Sobre shadcn/ui, skin nos tokens Vixlens. Radius arredondado luma (32px), quase pill. Host Grotesk. Primário = amarelo (CTA) ou preto (fundo claro). Nunca mais de um Primário por seção."
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
          <SubTitle className="border-white/15 text-white/65">Fundo escuro</SubTitle>
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
      <p className="-mt-2 mb-5 max-w-2xl text-[13px] leading-relaxed text-gray-600">
        Tudo em <b className="text-vix-preto">px</b>. <b className="text-vix-preto">Altura</b> = altura total do botão.{' '}
        <b className="text-vix-preto">Padding lateral</b> = espaço interno à esquerda e à direita do texto
        (ex.: 12px de cada lado). Radius 32px (luma, quase pill). Texto 14px no padrão, 16px só no Large.
      </p>
      <div className="overflow-x-auto rounded-vix-input border border-gray-200">
        <table className="w-full min-w-[720px] text-left text-[13px]">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50 text-[11px] font-bold uppercase tracking-[0.08em] text-gray-600">
              <th className="px-5 py-3 font-bold">Exemplo</th>
              <th className="px-5 py-3 font-bold">Tamanho</th>
              <th className="px-5 py-3 font-bold">Altura</th>
              <th className="px-5 py-3 font-bold">Padding lateral</th>
              <th className="px-5 py-3 font-bold">Texto</th>
              <th className="px-5 py-3 font-bold">Quando usar</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {[
              { size: 'sm', label: 'Small', alt: '32px', pad: '12px', txt: '14px', use: 'Toolbars, tabelas, ações densas' },
              { size: 'default', label: 'Default', alt: '36px', pad: '16px', txt: '14px', use: 'Padrão — maioria dos casos' },
              { size: 'lg', label: 'Large', alt: '40px', pad: '24px', txt: '16px', use: 'CTAs, hero, formulário-chave' },
            ].map((r) => (
              <tr key={r.size} className="align-middle">
                <td className="px-5 py-4">
                  <Button variant="dark" size={r.size}>Ação</Button>
                </td>
                <td className="px-5 py-4">
                  <div className="font-bold text-vix-preto">{r.label}</div>
                  <div className="font-mono text-[11px] text-gray-600">size="{r.size}"</div>
                </td>
                <td className="px-5 py-4 font-mono text-[13px] font-bold text-vix-preto">{r.alt}</td>
                <td className="px-5 py-4 font-mono text-[13px] text-gray-600">{r.pad}</td>
                <td className="px-5 py-4 font-mono text-[13px] text-vix-azul">{r.txt}</td>
                <td className="px-5 py-4 text-gray-600">{r.use}</td>
              </tr>
            ))}
            <tr className="align-middle">
              <td className="px-5 py-4">
                <Button variant="dark" size="icon" aria-label="Ícone"><ArrowRight /></Button>
              </td>
              <td className="px-5 py-4">
                <div className="font-bold text-vix-preto">Icon</div>
                <div className="font-mono text-[11px] text-gray-600">size="icon"</div>
              </td>
              <td className="px-5 py-4 font-mono text-[13px] font-bold text-vix-preto">36×36px</td>
              <td className="px-5 py-4 font-mono text-[13px] text-gray-600">—</td>
              <td className="px-5 py-4 font-mono text-[13px] text-gray-600">ícone 16px</td>
              <td className="px-5 py-4 text-gray-600">Só ícone — sempre com aria-label</td>
            </tr>
          </tbody>
        </table>
      </div>

      <SubTitle className="mt-14">Props</SubTitle>
      <PropsTable rows={BUTTON_PROPS} />

      <SubTitle className="mt-12">Do &amp; Don't</SubTitle>
      <DosDonts
        dos={[
          'Usar variant default (amarelo) para a ação primária.',
          'No máximo uma ação primária por tela.',
          'Texto de ação curto, começando por um verbo.',
        ]}
        donts={[
          'Dois botões amarelos competindo na mesma tela.',
          'Texto genérico como "Clique aqui".',
          'Usar variant link como botão de destaque.',
        ]}
      />

      <SubTitle className="mt-12">Código</SubTitle>
      <CodeBlock
        code={`import { Button } from '@/components/ui/button'

<Button>Ação</Button>
<Button variant="dark">Ação</Button>
<Button variant="outline">Ação</Button>
<Button size="lg">Ação</Button>`}
      />
    </Section>
  )
}
