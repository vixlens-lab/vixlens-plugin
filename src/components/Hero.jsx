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
          className="my-6 h-14 w-auto md:h-[72px]"
        />
        <div className="text-sm font-bold uppercase tracking-[0.14em] text-white/45">
          Laboratório Óptico
        </div>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
          A referência oficial de identidade visual Vixlens. Cores, tipografia, tokens e voz — tudo
          que define como a marca aparece em qualquer ponto de contato, do site aos documentos
          internos.
        </p>
      </div>
    </header>
  )
}
