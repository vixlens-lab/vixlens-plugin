import { Slot } from '@radix-ui/react-slot'
import { cva } from 'class-variance-authority'
import { cn } from '../../lib/utils.js'

// shadcn/ui Button — skinned nos tokens Vixlens (nunca o default do shadcn).
export const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 rounded-vix-button font-bold transition-colors focus-visible:outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:bg-gray-200 disabled:text-gray-400',
  {
    variants: {
      variant: {
        primary: 'bg-vix-amarelo text-vix-preto hover:bg-vix-amarelo-hover focus-visible:ring-vix-preto',
        primaryDark: 'bg-vix-preto text-vix-cinza-card hover:bg-[#333333] focus-visible:ring-vix-amarelo',
        secondary: 'border-2 border-vix-preto bg-transparent text-vix-preto hover:bg-vix-preto/5',
        secondaryDark: 'border-2 border-white bg-transparent text-white hover:bg-white/10',
      },
      size: {
        sm: 'px-6 py-2.5 text-sm',
        default: 'px-8 py-3.5 text-lg',
        lg: 'px-9 py-4 text-xl',
      },
    },
    defaultVariants: { variant: 'primary', size: 'default' },
  },
)

export function Button({ className, variant, size, asChild = false, ...props }) {
  const Comp = asChild ? Slot : 'button'
  return <Comp className={cn(buttonVariants({ variant, size }), className)} {...props} />
}
