import { cn } from '@/lib/utils'

type ButtonBase = {
  children: React.ReactNode
  className?: string
}

const styles = {
  primary:
    'bg-navy-900 text-white hover:bg-navy-700 active:bg-navy-800 focus-visible:outline-navy-900',
  accent:
    'bg-accent text-navy-950 hover:bg-accent-strong active:bg-accent-strong focus-visible:outline-accent',
  whatsapp: 'bg-wa text-white hover:bg-wa-dark active:bg-wa-dark focus-visible:outline-wa-dark',
  outline:
    'border border-navy-300 bg-white text-navy-900 hover:border-navy-900 hover:bg-navy-50 focus-visible:outline-navy-900',
  outlineLight:
    'border border-white/30 bg-transparent text-white hover:border-white hover:bg-white/10 focus-visible:outline-white',
}

const sizes = {
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-7 py-3.5 text-[15px]',
}

const base =
  'inline-flex items-center justify-center gap-2 rounded-lg font-semibold tracking-tight transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2'

export function LinkButton({
  href,
  variant = 'primary',
  size = 'md',
  external,
  children,
  className,
  onClick,
}: ButtonBase & {
  href: string
  variant?: keyof typeof styles
  size?: keyof typeof sizes
  external?: boolean
  onClick?: () => void
}) {
  return (
    <a
      href={href}
      onClick={onClick}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className={cn(base, styles[variant], sizes[size], className)}
    >
      {children}
    </a>
  )
}

export function SubmitButton({
  variant = 'primary',
  size = 'md',
  pending,
  children,
  className,
}: ButtonBase & {
  variant?: keyof typeof styles
  size?: keyof typeof sizes
  pending?: boolean
}) {
  return (
    <button
      type="submit"
      disabled={pending}
      className={cn(base, styles[variant], sizes[size], className)}
    >
      {children}
    </button>
  )
}

export function ActionButton({
  onClick,
  variant = 'primary',
  size = 'md',
  children,
  className,
}: ButtonBase & {
  onClick: () => void
  variant?: keyof typeof styles
  size?: keyof typeof sizes
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(base, styles[variant], sizes[size], className)}
    >
      {children}
    </button>
  )
}