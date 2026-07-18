import { cn } from '../../lib/utils.js'

// shadcn/ui Input — base shadcn (h 36px, px 12px, texto 14px) com radius/borda Vixlens.
export function Input({ className, type = 'text', ...props }) {
  return (
    <input
      type={type}
      className={cn(
        'h-[36px] w-full rounded-vix-input border border-vix-cinza bg-white px-[12px] py-1 text-sm text-vix-preto',
        'placeholder:text-vix-cinza focus:border-vix-preto focus:outline-none',
        'disabled:bg-gray-50 disabled:text-gray-300',
        className,
      )}
      {...props}
    />
  )
}
