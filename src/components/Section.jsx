export function Section({ id, eyebrow, title, desc, children }) {
  return (
    <section id={id} className="border-t border-gray-100 px-8 py-16 md:px-16 md:py-20">
      <div className="mx-auto w-full max-w-vix-site">
        <header className="mb-9 md:mb-11">
          {eyebrow && (
            <div className="text-xs font-bold uppercase tracking-[0.14em] text-vix-azul">{eyebrow}</div>
          )}
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-vix-preto md:text-4xl">{title}</h2>
          {desc && <p className="mt-4 max-w-3xl text-lg leading-relaxed text-gray-500">{desc}</p>}
        </header>
        {children}
      </div>
    </section>
  )
}

export function SubTitle({ children, className = '' }) {
  return (
    <div className={`mb-5 border-b-2 border-gray-100 pb-2.5 text-[11px] font-bold uppercase tracking-[0.1em] text-gray-500 ${className}`}>
      {children}
    </div>
  )
}
