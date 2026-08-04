import { cn } from '../../lib/utils.js'

// Card estilo luma — radius grande (token 32px), elevação suave (shadow-md + ring sutil).
export function Card({ className, ...props }) {
  return <div className={cn('rounded-vix-card bg-white shadow-md ring-1 ring-black/5', className)} {...props} />
}
export function CardHeader({ className, ...props }) {
  return <div className={cn('flex flex-col gap-1.5 p-8', className)} {...props} />
}
export function CardTitle({ className, ...props }) {
  // O conteudo vem por children no ponto de uso; o lint nao enxerga isso.
  // eslint-disable-next-line jsx-a11y/heading-has-content
  return <h3 className={cn('text-xl font-bold text-vix-preto', className)} {...props} />
}
export function CardDescription({ className, ...props }) {
  return <p className={cn('text-[15px] leading-relaxed text-gray-600', className)} {...props} />
}
export function CardContent({ className, ...props }) {
  return <div className={cn('p-8 pt-0', className)} {...props} />
}
export function CardFooter({ className, ...props }) {
  return <div className={cn('flex items-center gap-3 p-8 pt-0', className)} {...props} />
}
