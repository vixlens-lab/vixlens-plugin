import { navGroups, version } from '../data/nav.js'

export default function Sidebar({ open, onClose }) {
  return (
    <>
      {/* backdrop mobile */}
      <div
        onClick={onClose}
        className={`fixed inset-0 z-30 bg-black/40 transition-opacity md:hidden ${open ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
      />
      <aside
        className={`fixed inset-y-0 left-0 z-40 flex w-[260px] max-w-[85vw] flex-col overflow-y-auto bg-vix-preto text-white transition-transform duration-300 md:translate-x-0 ${open ? 'translate-x-0' : '-translate-x-full'}`}
      >
        {/* brand */}
        <div className="border-b border-white/10 px-6 py-7">
          <img src="/assets/marca/vixlens/vixlens-mono-negativo.svg" alt="Vixlens" className="h-8 w-auto" />
          <div className="mt-3 text-[10px] font-bold uppercase tracking-[0.18em] text-vix-amarelo">
            Laboratório Óptico
          </div>
          <div className="mt-1 text-[11px] text-white/30">Design System · {version}</div>
        </div>

        {/* nav */}
        <nav className="flex-1 px-3 py-4">
          {navGroups.map((group) => (
            <div key={group.label} className="mb-4">
              <div className="px-3 pb-2 pt-3 text-[10px] font-bold uppercase tracking-[0.12em] text-white/35">
                {group.label}
              </div>
              {group.items.map((item) =>
                item.soon ? (
                  <span
                    key={item.label}
                    className="flex cursor-default items-center gap-2.5 rounded-lg px-3 py-2 text-[13px] font-medium text-white/35"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
                    {item.label}
                    <span className="ml-auto rounded bg-white/10 px-1.5 py-0.5 text-[9px] font-bold text-white/40">
                      EM BREVE
                    </span>
                  </span>
                ) : (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={onClose}
                    className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-[13px] font-medium text-white/80 transition-colors hover:bg-white/5 hover:text-white"
                  >
                    <span className="h-1.5 w-1.5 rounded-full" style={{ background: item.dot }} />
                    {item.label}
                  </a>
                ),
              )}
            </div>
          ))}
        </nav>

        <div className="border-t border-white/10 px-6 py-5 text-[11px] text-white/30">
          Vixlens © 2026
        </div>
      </aside>
    </>
  )
}
