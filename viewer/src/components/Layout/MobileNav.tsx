import { X } from 'lucide-react'
import { Sidebar } from './Sidebar'

interface MobileNavProps {
  isOpen: boolean
  onClose: () => void
  isComplete: (moduleId: string) => boolean
  getLevelProgress: (levelId: string) => number
}

export function MobileNav({ isOpen, onClose, isComplete, getLevelProgress }: MobileNavProps) {
  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40 bg-black/50 lg:hidden"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div className="fixed inset-y-0 left-0 z-50 w-80 max-w-[85vw] bg-white shadow-xl lg:hidden slide-in">
        {/* Header */}
        <div className="flex items-center justify-between h-16 px-4 border-b border-corporate-200">
          <h2 className="text-lg font-semibold text-corporate-900">
            Navigation
          </h2>
          <button
            onClick={onClose}
            className="p-2 -mr-2 text-corporate-500 hover:text-corporate-700 hover:bg-corporate-100 rounded-lg transition-colors"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Sidebar content */}
        <div className="h-[calc(100vh-4rem)] overflow-hidden">
          <Sidebar
            isComplete={isComplete}
            getLevelProgress={getLevelProgress}
            onNavigate={onClose}
          />
        </div>
      </div>
    </>
  )
}
