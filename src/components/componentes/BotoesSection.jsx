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
      <div className="flex flex-wrap items-center gap-4">
        <Button size="sm">Small</Button>
        <Button>Default</Button>
        <Button size="lg">Large</Button>
        <Button disabled>Desabilitado</Button>
      </div>
    </Section>
  )
}
