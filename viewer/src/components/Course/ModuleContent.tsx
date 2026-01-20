import { useParams, Navigate } from 'react-router-dom'
import { useEffect } from 'react'
import { Clock, Target, Check, BookOpen } from 'lucide-react'
import { MarkdownRenderer } from '../Markdown/MarkdownRenderer'
import { ModuleNavigation } from './ModuleNavigation'
import { Badge } from '../UI/Badge'
import { useContent } from '../../hooks/useContent'
import { useProgress } from '../../hooks/useProgress'
import { getModuleById, getAdjacentModules, getLevelByModuleId } from '../../data/courseStructure'

export function ModuleContent() {
  const { moduleId } = useParams<{ moduleId: string }>()
  const module = moduleId ? getModuleById(moduleId) : null
  const level = moduleId ? getLevelByModuleId(moduleId) : null
  const { prev, next } = moduleId ? getAdjacentModules(moduleId) : { prev: null, next: null }

  const { content, loading, error } = useContent(module?.path || null)
  const { isComplete, toggleComplete, setLastVisited } = useProgress()

  const completed = moduleId ? isComplete(moduleId) : false

  // Update last visited on mount
  useEffect(() => {
    if (moduleId) {
      setLastVisited(moduleId)
    }
  }, [moduleId, setLastVisited])

  // Scroll to top when module changes
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [moduleId])

  // Redirect to first module if no moduleId
  if (!moduleId) {
    return <Navigate to="/module/1.1" replace />
  }

  // Module not found
  if (!module) {
    return (
      <div className="p-8">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-2xl font-bold text-corporate-900 mb-4">
            Module Not Found
          </h1>
          <p className="text-corporate-600 mb-6">
            The module "{moduleId}" could not be found.
          </p>
          <a
            href="#/module/1.1"
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
          >
            <BookOpen className="w-4 h-4" />
            Go to First Module
          </a>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-full bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Module header */}
        <header className="mb-8">
          {/* Level badge */}
          {level && (
            <div className="mb-3">
              <Badge variant="info">
                Level {level.id}: {level.title}
              </Badge>
            </div>
          )}

          {/* Module title */}
          <h1 className="text-3xl font-bold text-corporate-900 mb-4">
            {module.id} {module.title}
          </h1>

          {/* Meta info */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-corporate-600">
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              <span>{module.duration}</span>
            </div>
            {completed && (
              <div className="flex items-center gap-1.5 text-accent-green">
                <Check className="w-4 h-4" />
                <span className="font-medium">Completed</span>
              </div>
            )}
          </div>

          {/* Learning objectives */}
          {module.objectives.length > 0 && (
            <div className="mt-6 p-4 bg-corporate-50 rounded-lg border border-corporate-200">
              <h2 className="flex items-center gap-2 text-sm font-semibold text-corporate-800 mb-3">
                <Target className="w-4 h-4 text-primary-500" />
                Learning Objectives
              </h2>
              <ul className="space-y-2">
                {module.objectives.map((objective, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-sm text-corporate-700"
                  >
                    <span className="w-1.5 h-1.5 mt-2 bg-primary-500 rounded-full flex-shrink-0" />
                    {objective}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </header>

        {/* Content */}
        <article className="mb-8">
          {loading && (
            <div className="flex items-center justify-center py-16">
              <div className="animate-spin rounded-full h-8 w-8 border-2 border-primary-500 border-t-transparent" />
            </div>
          )}

          {error && (
            <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-700">{error}</p>
            </div>
          )}

          {content && <MarkdownRenderer content={content} />}
        </article>

        {/* Mark complete button */}
        <div className="flex justify-center mb-8">
          <button
            onClick={() => moduleId && toggleComplete(moduleId)}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-colors ${
              completed
                ? 'bg-accent-greenLight text-green-800 hover:bg-green-200'
                : 'bg-primary-500 text-white hover:bg-primary-600'
            }`}
          >
            <Check className="w-5 h-5" />
            {completed ? 'Completed' : 'Mark as Complete'}
          </button>
        </div>

        {/* Navigation */}
        <ModuleNavigation prev={prev} next={next} />
      </div>
    </div>
  )
}
