import { CheckCircle, XCircle } from '@phosphor-icons/react'

/**
 * PropsTable — tabela responsiva de props.
 * rows: array de { prop, tipo, padrao, desc }
 * Mesmo estilo da tabela utilitária de TipografiaSection.jsx.
 */
export function PropsTable({ rows = [] }) {
  return (
    <div className="overflow-x-auto rounded-vix-input border border-gray-200">
      <table className="w-full min-w-[560px] text-left text-[13px]">
        <thead>
          <tr className="border-b border-gray-200 bg-gray-50 text-[11px] font-bold uppercase tracking-[0.08em] text-gray-600">
            <th className="px-5 py-3 font-bold">Prop</th>
            <th className="px-5 py-3 font-bold">Tipo</th>
            <th className="px-5 py-3 font-bold">Padrão</th>
            <th className="px-5 py-3 font-bold">Descrição</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {rows.map((r) => (
            <tr key={r.prop}>
              <td className="px-5 py-3.5 font-mono text-[12px] text-vix-azul">{r.prop}</td>
              <td className="px-5 py-3.5 font-mono text-[12px] text-gray-600">{r.tipo}</td>
              <td className="px-5 py-3.5 font-mono text-[12px] text-vix-preto">{r.padrao || '—'}</td>
              <td className="px-5 py-3.5 text-gray-600">{r.desc}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

/**
 * DosDonts — dois blocos lado a lado (Faça / Evite).
 * dos, donts: arrays de string.
 */
export function DosDonts({ dos = [], donts = [] }) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <div className="rounded-vix-input border border-green-200 bg-green-50/60 p-5">
        <div className="mb-3 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.1em] text-green-700">
          <CheckCircle size={16} weight="fill" className="text-green-600" />
          Faça
        </div>
        <div className="flex flex-col gap-2.5">
          {dos.map((d) => (
            <div key={d} className="flex items-start gap-2.5">
              <CheckCircle size={18} weight="fill" className="mt-0.5 shrink-0 text-green-600" />
              <span className="text-[13px] leading-relaxed text-gray-700">{d}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="rounded-vix-input border border-red-200 bg-red-50/60 p-5">
        <div className="mb-3 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.1em] text-red-700">
          <XCircle size={16} weight="fill" className="text-red-500" />
          Evite
        </div>
        <div className="flex flex-col gap-2.5">
          {donts.map((d) => (
            <div key={d} className="flex items-start gap-2.5">
              <XCircle size={18} weight="fill" className="mt-0.5 shrink-0 text-red-500" />
              <span className="text-[13px] leading-relaxed text-gray-700">{d}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

/**
 * StatesRow — wrapper simples: label pequeno + linha flex com exemplos.
 * Opcional.
 */
export function StatesRow({ children, label }) {
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <div className="text-[11px] uppercase tracking-[0.1em] text-gray-400">{label}</div>
      )}
      <div className="flex flex-wrap items-center gap-4">{children}</div>
    </div>
  )
}
