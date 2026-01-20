import { useParams, Navigate } from 'react-router-dom'
import { useEffect } from 'react'
import { FileText, FolderOpen } from 'lucide-react'
import { MarkdownRenderer } from '../Markdown/MarkdownRenderer'
import { Badge } from '../UI/Badge'
import { useContent } from '../../hooks/useContent'
import { getResourceByPath } from '../../data/courseStructure'

export function ResourceContent() {
  const { '*': resourcePath } = useParams()
  const decodedPath = resourcePath ? decodeURIComponent(resourcePath) : null
  const resource = decodedPath ? getResourceByPath(decodedPath) : null

  const { content, loading, error } = useContent(decodedPath)

  // Scroll to top when resource changes
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [resourcePath])

  // No path provided
  if (!decodedPath) {
    return <Navigate to="/module/1.1" replace />
  }

  // Resource not found
  if (!resource) {
    return (
      <div className="p-8">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-2xl font-bold text-corporate-900 mb-4">
            Resource Not Found
          </h1>
          <p className="text-corporate-600 mb-6">
            The resource could not be found.
          </p>
          <a
            href="#/module/1.1"
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
          >
            Go to Course
          </a>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-full bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Resource header */}
        <header className="mb-8">
          {/* Section and category breadcrumb */}
          <div className="flex items-center gap-2 mb-3 text-sm text-corporate-500">
            <FolderOpen className="w-4 h-4" />
            <span>{resource.section.title}</span>
            <span>/</span>
            <span>{resource.category.title}</span>
          </div>

          {/* Resource title */}
          <h1 className="text-3xl font-bold text-corporate-900 mb-4">
            {resource.file.title}
          </h1>

          {/* Badge */}
          <div className="flex items-center gap-3">
            <Badge>
              <FileText className="w-3 h-3 mr-1" />
              Resource
            </Badge>
          </div>
        </header>

        {/* Content */}
        <article>
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
      </div>
    </div>
  )
}
