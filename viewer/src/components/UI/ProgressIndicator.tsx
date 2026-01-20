interface ProgressIndicatorProps {
  progress: number
  size?: 'sm' | 'md' | 'lg'
  showLabel?: boolean
  className?: string
}

const sizeStyles = {
  sm: 'h-1',
  md: 'h-2',
  lg: 'h-3',
}

export function ProgressIndicator({
  progress,
  size = 'md',
  showLabel = false,
  className = '',
}: ProgressIndicatorProps) {
  const clampedProgress = Math.min(100, Math.max(0, progress))

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className={`flex-1 bg-corporate-200 rounded-full overflow-hidden ${sizeStyles[size]}`}>
        <div
          className={`h-full rounded-full transition-all duration-500 ${
            clampedProgress === 100 ? 'bg-accent-green' : 'bg-primary-500'
          }`}
          style={{ width: `${clampedProgress}%` }}
        />
      </div>
      {showLabel && (
        <span className="text-sm font-medium text-corporate-600 tabular-nums">
          {clampedProgress}%
        </span>
      )}
    </div>
  )
}
