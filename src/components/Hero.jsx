export default function Hero() {
  return (
    <header className="border-b-4 border-vix-amarelo bg-vix-preto px-8 py-16 md:px-16 md:py-20">
      <div className="mx-auto w-full max-w-vix-site">
        <div className="text-xs font-bold uppercase tracking-[0.14em] text-vix-amarelo">
          Design System
        </div>
        <img
          src="/assets/marca/vixlens/vixlens-negativo.svg"
          alt="Vixlens"
          className="mb-3 mt-6 h-16 w-auto md:h-[80px]"
        />
        <div className="text-sm font-bold uppercase tracking-[0.18em] text-vix-amarelo">
          Laboratório Óptico
        </div>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/70">
          A referência oficial de identidade visual Vixlens. Cores, tipografia, tokens e voz — tudo
          que define como a marca aparece em qualquer ponto de contato, do site aos documentos
          internos.
        </p>
      </div>
    </header>
  )
}
