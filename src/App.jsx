import { useState } from 'react'
import Sidebar from './components/Sidebar.jsx'
import Hero from './components/Hero.jsx'
import MarcaSection from './components/marca/MarcaSection.jsx'
import FotografiaSection from './components/marca/FotografiaSection.jsx'
import CoresSection from './components/fundamentos/CoresSection.jsx'
import TipografiaSection from './components/fundamentos/TipografiaSection.jsx'
import TokensSection from './components/fundamentos/TokensSection.jsx'
import IconografiaSection from './components/fundamentos/IconografiaSection.jsx'
import EspacamentoSection from './components/fundamentos/EspacamentoSection.jsx'
import VozTomSection from './components/voz/VozTomSection.jsx'
import VocabularioSection from './components/voz/VocabularioSection.jsx'
import BotoesSection from './components/componentes/BotoesSection.jsx'
import InputsSection from './components/componentes/InputsSection.jsx'
import CardsSection from './components/componentes/CardsSection.jsx'
import CalloutsSection from './components/componentes/CalloutsSection.jsx'

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
        <MarcaSection />
        <FotografiaSection />
        <CoresSection />
        <TipografiaSection />
        <TokensSection />
        <IconografiaSection />
        <EspacamentoSection />
        <VozTomSection />
        <VocabularioSection />
        <BotoesSection />
        <InputsSection />
        <CardsSection />
        <CalloutsSection />

        {/* Materiais (14) — próxima fase */}
        <section className="border-t border-gray-100 px-8 py-16 md:px-16">
          <div className="mx-auto w-full max-w-vix-site">
            <div className="text-xs font-bold uppercase tracking-[0.14em] text-vix-azul">
              Rebuild em andamento
            </div>
            <p className="mt-2 max-w-2xl text-[15px] leading-relaxed text-gray-500">
              Falta só Materiais (14). Depois: paridade final e merge pra produção.
            </p>
          </div>
        </section>
      </main>
    </div>
  )
}
