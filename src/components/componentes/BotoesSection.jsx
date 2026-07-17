import { Section, SubTitle } from '../Section.jsx'
import { Button } from '../ui/button.jsx'

export default function BotoesSection() {
  return (
    <Section
      id="botoes"
      eyebrow="10 — Componentes"
      title="Botões"
      desc="Dois tipos: Primário (ação principal) e Secundário (alternativa). Border-radius sempre 30px — pill. Host Grotesk Bold. Nunca mais de um Primário por seção. Sobre shadcn/ui, skin nos tokens Vixlens."
    >
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {/* fundo claro */}
        <div className="rounded-vix-card border border-gray-200 bg-white p-8">
          <SubTitle>Fundo claro</SubTitle>
          <div className="flex flex-wrap items-center gap-4">
            <Button variant="primaryDark">Ação principal</Button>
            <Button variant="secondary">Secundário</Button>
          </div>
        </div>
        {/* fundo escuro */}
        <div className="rounded-vix-card bg-vix-preto p-8">
          <SubTitle className="border-white/15 text-white/45">Fundo escuro</SubTitle>
          <div className="flex flex-wrap items-center gap-4">
            <Button variant="primary">Ação principal</Button>
            <Button variant="secondaryDark">Secundário</Button>
          </div>
        </div>
      </div>

      <SubTitle className="mt-12">Tamanhos</SubTitle>
      <div className="mb-12 flex flex-wrap items-center gap-4">
        <Button variant="primaryDark" size="sm">Small</Button>
        <Button variant="primaryDark" size="default">Default</Button>
        <Button variant="primaryDark" size="lg">Large</Button>
      </div>

      <SubTitle>Estados</SubTitle>
      <div className="flex flex-wrap items-center gap-4">
        <Button variant="primary">Normal</Button>
        <Button variant="primary" className="bg-vix-amarelo-hover">Hover</Button>
        <Button variant="primary" disabled>Desabilitado</Button>
      </div>
    </Section>
  )
}
