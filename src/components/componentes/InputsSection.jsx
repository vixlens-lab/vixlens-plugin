import { Section, SubTitle } from '../Section.jsx'
import { Input } from '../ui/input.jsx'
import { Button } from '../ui/button.jsx'
import { PropsTable, DosDonts } from './ComponentDocs.jsx'

const INPUT_PROPS = [
  { prop: 'type', tipo: 'text | email | password | number …', padrao: '"text"', desc: 'Tipo do campo HTML — define teclado, validação e mascaramento.' },
  { prop: 'placeholder', tipo: 'string', padrao: '—', desc: 'Texto de exemplo dentro do campo. Não substitui o label.' },
  { prop: 'disabled', tipo: 'boolean', padrao: 'false', desc: 'Desabilita o campo, bloqueando foco e edição.' },
  { prop: 'value / onChange', tipo: 'string / function', padrao: '—', desc: 'Par controlado — o valor vem do estado e onChange o atualiza.' },
]

export default function InputsSection() {
  return (
    <Section
      id="inputs"
      eyebrow="11 — Componentes"
      title="Inputs"
      desc="Estilo luma: campo PREENCHIDO (fill cinza suave, sem borda), altura 36px, radius 24px, foco preto com ring sutil e texto 14px."
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
          <Button variant="dark" className="mt-1 w-full">Enviar cadastro</Button>
        </div>
      </div>

      <SubTitle className="mt-12">Especificação</SubTitle>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {[
          ['Altura', '36px'],
          ['Padding lateral', '14px'],
          ['Radius', '24px'],
          ['Texto', '14px'],
          ['Fundo', 'cinza suave'],
          ['Foco', '#1D1D1F'],
        ].map(([k, v]) => (
          <div key={k} className="rounded-vix-input border border-gray-200 p-4">
            <div className="text-[11px] font-bold uppercase tracking-wide text-gray-500">{k}</div>
            <div className="mt-1 font-mono text-sm font-bold text-vix-preto">{v}</div>
          </div>
        ))}
      </div>

      <SubTitle className="mt-14">Estados</SubTitle>
      <div className="mb-2 max-w-md">
        <div className="flex flex-col gap-5">
          <label className="flex flex-col gap-2">
            <span className="text-[11px] uppercase tracking-[0.1em] text-gray-400">Default</span>
            <Input placeholder="Digite aqui" />
          </label>
          <label className="flex flex-col gap-2">
            <span className="text-[11px] uppercase tracking-[0.1em] text-gray-400">Foco (ring)</span>
            <Input placeholder="Clique para ver o ring de foco" />
          </label>
          <label className="flex flex-col gap-2">
            <span className="text-[11px] uppercase tracking-[0.1em] text-gray-400">Disabled</span>
            <Input placeholder="Indisponível" disabled />
          </label>
        </div>
      </div>

      <SubTitle className="mt-14">Props</SubTitle>
      <PropsTable rows={INPUT_PROPS} />

      <SubTitle className="mt-12">Do &amp; Don't</SubTitle>
      <DosDonts
        dos={[
          'Sempre associar um label ao campo.',
          'Usar o placeholder como exemplo, não como label.',
          'Mostrar mensagem de erro clara abaixo do campo.',
        ]}
        donts={[
          'Usar o placeholder no lugar do label.',
          'Deixar o campo sem indicação visível de foco.',
          'Largura minúscula para um dado longo (e-mail, endereço).',
        ]}
      />
    </Section>
  )
}
