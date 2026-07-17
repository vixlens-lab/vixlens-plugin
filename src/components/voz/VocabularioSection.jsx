import { Section } from '../Section.jsx'

const TERMOS = [
  ['Matriz Marca Própria', 'matriz · produto marca própria'],
  ['espelho da tabela Vixlens', 'cópia da tabela · equivalente à tabela'],
  ['material, índice e desenho da lente', 'especificações técnicas · dados da lente'],
  ['1 lente Matriz = 1 lente Vixlens equivalente', 'produto similar · versão parecida'],
  ['portfólio campeão Vixlens', 'melhores produtos · linha top'],
  ['EssilorLuxottica', 'Essilor'],
  ['Vix na Prática · Vix na Estrada · Vix Academy · Vix Innovation', 'programas · treinamentos genéricos'],
  ['Hub Rio · Freevix · Astera', 'filial · marca genérica'],
]

export default function VocabularioSection() {
  return (
    <Section
      id="vocabulario"
      eyebrow="09 — Voz"
      title="Vocabulário Canônico"
      desc="Grafia obrigatória. Cada termo tem uma forma oficial — e o que nunca usar no lugar. Consistência de nomenclatura é parte da identidade."
    >
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-[13px]">
          <thead>
            <tr className="bg-vix-preto">
              <th className="whitespace-nowrap px-4 py-3 text-left text-[11px] font-bold uppercase tracking-[0.1em] text-vix-amarelo">
                Termo canônico
              </th>
              <th className="px-4 py-3 text-left text-[11px] font-bold uppercase tracking-[0.1em] text-white/50">
                Nunca usar
              </th>
            </tr>
          </thead>
          <tbody>
            {TERMOS.map(([canon, nunca], i) => (
              <tr key={canon} className={`border-b border-gray-100 ${i % 2 ? 'bg-gray-50' : ''}`}>
                <td className="px-4 py-3 font-bold text-vix-preto">{canon}</td>
                <td className="px-4 py-3 text-gray-500">{nunca}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>
  )
}
