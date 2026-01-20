import { ReactNode } from 'react'

interface BadgeProps {
  children: ReactNode
  variant?: 'default' | 'success' | 'warning' | 'info'
  size?: 'sm' | 'md'
}

const variantStyles = {
  default: 'bg-corporate-100 text-corporate-700',
  success: 'bg-accent-greenLight text-green-800',
  warning: 'bg-accent-orangeLight text-orange-800',
  info: 'bg-accent-blueLight text-blue-800',
}

const sizeStyles = {
  sm: 'text-xs px-2 py-0.5',
  md: 'text-sm px-2.5 py-1',
}

export function Badge({ children, variant = 'default', size = 'sm' }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center font-medium rounded-full ${variantStyles[variant]} ${sizeStyles[size]}`}
    >
      {children}
    </span>
  )
}
