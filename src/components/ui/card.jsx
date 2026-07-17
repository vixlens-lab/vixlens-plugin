import { cn } from '../../lib/utils.js'

// shadcn/ui Card — radius Vixlens (card token 57px), composição shadcn.
export function Card({ className, ...props }) {
  return <div className={cn('rounded-vix-card border border-gray-200 bg-white', className)} {...props} />
}
export function CardHeader({ className, ...props }) {
  return <div className={cn('flex flex-col gap-1.5 p-8', className)} {...props} />
}
export function CardTitle({ className, ...props }) {
  return <h3 className={cn('text-xl font-bold text-vix-preto', className)} {...props} />
}
export function CardDescription({ className, ...props }) {
  return <p className={cn('text-[15px] leading-relaxed text-gray-500', className)} {...props} />
}
export function CardContent({ className, ...props }) {
  return <div className={cn('p-8 pt-0', className)} {...props} />
}
export function CardFooter({ className, ...props }) {
  return <div className={cn('flex items-center gap-3 p-8 pt-0', className)} {...props} />
}
