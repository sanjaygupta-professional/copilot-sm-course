import { Link } from 'react-router-dom'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { CourseModule } from '../../types/course'

interface ModuleNavigationProps {
  prev: CourseModule | null
  next: CourseModule | null
}

export function ModuleNavigation({ prev, next }: ModuleNavigationProps) {
  return (
    <nav className="flex items-center justify-between gap-4 mt-12 pt-8 border-t border-corporate-200">
      {/* Previous button */}
      {prev ? (
        <Link
          to={`/module/${prev.id}`}
          className="flex items-center gap-2 px-4 py-3 rounded-lg border border-corporate-200 hover:border-primary-300 hover:bg-primary-50 transition-colors group max-w-[45%]"
        >
          <ChevronLeft className="w-5 h-5 text-corporate-400 group-hover:text-primary-500 flex-shrink-0" />
          <div className="min-w-0">
            <span className="block text-xs text-corporate-500">Previous</span>
            <span className="block text-sm font-medium text-corporate-800 group-hover:text-primary-600 truncate">
              {prev.id} {prev.title}
            </span>
          </div>
        </Link>
      ) : (
        <div />
      )}

      {/* Next button */}
      {next ? (
        <Link
          to={`/module/${next.id}`}
          className="flex items-center gap-2 px-4 py-3 rounded-lg border border-corporate-200 hover:border-primary-300 hover:bg-primary-50 transition-colors group max-w-[45%] text-right"
        >
          <div className="min-w-0">
            <span className="block text-xs text-corporate-500">Next</span>
            <span className="block text-sm font-medium text-corporate-800 group-hover:text-primary-600 truncate">
              {next.id} {next.title}
            </span>
          </div>
          <ChevronRight className="w-5 h-5 text-corporate-400 group-hover:text-primary-500 flex-shrink-0" />
        </Link>
      ) : (
        <div />
      )}
    </nav>
  )
}
