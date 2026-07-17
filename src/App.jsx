import { useState } from 'react'
import Sidebar from './components/Sidebar.jsx'
import Hero from './components/Hero.jsx'

export default function App() {
  const [navOpen, setNavOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white font-vix">
      <Sidebar open={navOpen} onClose={() => setNavOpen(false)} />

      {/* botão hamburguer (mobile) */}
      <button
        onClick={() => setNavOpen(true)}
        aria-label="Abrir menu"
        className="fixed right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-vix-input border border-gray-200 bg-white shadow-sm md:hidden"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M3 6h18M3 12h18M3 18h18" />
        </svg>
      </button>

      <main className="md:ml-[260px]">
        <Hero />

        {/* Seções — migração fatiada em andamento */}
        <section className="px-8 py-20 md:px-16">
          <div className="mx-auto w-full max-w-vix-site">
            <div className="text-xs font-bold uppercase tracking-[0.14em] text-vix-azul">
              Rebuild em andamento
            </div>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight md:text-4xl">
              Shell no ar em React
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-gray-500">
              Sidebar, hero e o pipeline de tokens (Vite + React + Tailwind) rodando. As 14 seções do
              DS estão sendo portadas em fases, cada uma validada na preview antes do merge. Produção
              intacta.
            </p>

            {/* prova de que os tokens fluem */}
            <div className="mt-10 grid grid-cols-2 gap-[30px] sm:grid-cols-4">
              {[
                { name: 'Preto', cls: 'bg-vix-preto', v: '#1D1D1F' },
                { name: 'Amarelo', cls: 'bg-vix-amarelo', v: '#FAC617' },
                { name: 'Azul', cls: 'bg-vix-azul', v: '#0439D9' },
                { name: 'Cinza card', cls: 'bg-vix-cinza-card border border-gray-200', v: '#F5F5F7' },
              ].map((s) => (
                <div key={s.name} className="overflow-hidden rounded-vix-input border border-gray-200">
                  <div className={`h-20 ${s.cls}`} />
                  <div className="px-3 py-2.5">
                    <div className="text-[13px] font-bold text-vix-preto">{s.name}</div>
                    <div className="font-mono text-[11px] text-gray-500">{s.v}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
