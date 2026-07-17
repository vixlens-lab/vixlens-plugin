import { cn } from '../../lib/utils.js'

// shadcn/ui Input — specs Vixlens (h-56, radius 12, borda cinza, foco preto).
export function Input({ className, type = 'text', ...props }) {
  return (
    <input
      type={type}
      className={cn(
        'h-14 w-full rounded-vix-input border border-vix-cinza bg-white px-5 py-3.5 text-lg text-vix-preto',
        'placeholder:text-vix-cinza focus:border-vix-preto focus:outline-none',
        'disabled:bg-gray-50 disabled:text-gray-300',
        className,
      )}
      {...props}
    />
  )
}
