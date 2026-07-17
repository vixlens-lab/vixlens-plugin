import { Section, SubTitle } from '../Section.jsx'
import { Input } from '../ui/input.jsx'
import { Button } from '../ui/button.jsx'

export default function InputsSection() {
  return (
    <Section
      id="inputs"
      eyebrow="11 — Componentes"
      title="Inputs"
      desc="Campos com altura fixa de 56px, radius 12px, borda cinza #606F7F e foco preto. Fundo sempre branco. Do formulário de cadastro de parceiro (Vixlens 3.0). Sobre shadcn/ui."
    >
      <div className="max-w-md">
        <div className="flex flex-col gap-5">
          <label className="flex flex-col gap-2">
            <span className="text-sm font-medium text-vix-preto">Nome da ótica</span>
            <Input placeholder="Ex: Ótica Vixlens" />
          </label>
          <label className="flex flex-col gap-2">
            <span className="text-sm font-medium text-vix-preto">E-mail</span>
            <Input type="email" placeholder="contato@otica.com.br" />
          </label>
          <label className="flex flex-col gap-2">
            <span className="text-sm font-medium text-vix-preto">Desabilitado</span>
            <Input placeholder="Indisponível" disabled />
          </label>
          <Button variant="primaryDark" className="mt-1 w-full">Enviar cadastro</Button>
        </div>
      </div>

      <SubTitle className="mt-12">Especificação</SubTitle>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {[
          ['Altura', '56px'],
          ['Radius', '12px'],
          ['Borda', '#606F7F'],
          ['Foco', '#1D1D1F'],
        ].map(([k, v]) => (
          <div key={k} className="rounded-vix-input border border-gray-200 p-4">
            <div className="text-[11px] font-bold uppercase tracking-wide text-gray-500">{k}</div>
            <div className="mt-1 font-mono text-sm font-bold text-vix-preto">{v}</div>
          </div>
        ))}
      </div>
    </Section>
  )
}
