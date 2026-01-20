import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { ChevronDown, ChevronRight, Check, Clock, BookOpen, Folder, FileText } from 'lucide-react'
import { courseStructure, resourceStructure } from '../../data/courseStructure'

interface SidebarProps {
  isComplete: (moduleId: string) => boolean
  getLevelProgress: (levelId: string) => number
  onNavigate?: () => void
}

export function Sidebar({ isComplete, getLevelProgress, onNavigate }: SidebarProps) {
  const [expandedLevels, setExpandedLevels] = useState<Record<string, boolean>>({
    '1': true,
    '2': true,
    '3': true,
  })

  const [expandedResources, setExpandedResources] = useState<Record<string, boolean>>({
    'company-context': false,
    'prompt-library': false,
    'sample-files': false,
  })

  const toggleLevel = (levelId: string) => {
    setExpandedLevels(prev => ({
      ...prev,
      [levelId]: !prev[levelId]
    }))
  }

  const toggleResource = (sectionId: string) => {
    setExpandedResources(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }))
  }

  const handleClick = () => {
    onNavigate?.()
  }

  return (
    <nav className="h-full overflow-y-auto py-4 px-3">
      {/* Course Content Section */}
      <div className="mb-6">
        <div className="flex items-center gap-2 px-3 mb-3">
          <BookOpen className="w-4 h-4 text-primary-500" />
          <h2 className="text-xs font-semibold text-corporate-500 uppercase tracking-wider">
            Course Content
          </h2>
        </div>

        {courseStructure.levels.map(level => {
          const progress = getLevelProgress(level.id)
          const isExpanded = expandedLevels[level.id]

          return (
            <div key={level.id} className="mb-2">
              {/* Level Header */}
              <button
                onClick={() => toggleLevel(level.id)}
                className="w-full flex items-center gap-2 px-3 py-2 text-left rounded-lg hover:bg-corporate-100 transition-colors group"
              >
                {isExpanded ? (
                  <ChevronDown className="w-4 h-4 text-corporate-400 flex-shrink-0" />
                ) : (
                  <ChevronRight className="w-4 h-4 text-corporate-400 flex-shrink-0" />
                )}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-sm font-medium text-corporate-800 truncate">
                      Level {level.id}: {level.title}
                    </span>
                    <span className="text-xs text-corporate-500 flex-shrink-0">
                      {progress}%
                    </span>
                  </div>
                  {/* Progress bar */}
                  <div className="mt-1 h-1 bg-corporate-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-accent-green rounded-full transition-all duration-300"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>
              </button>

              {/* Modules */}
              {isExpanded && (
                <div className="ml-4 mt-1 space-y-0.5">
                  {level.modules.map(module => {
                    const completed = isComplete(module.id)

                    return (
                      <NavLink
                        key={module.id}
                        to={`/module/${module.id}`}
                        onClick={handleClick}
                        className={({ isActive }) =>
                          `flex items-start gap-2 px-3 py-2 rounded-lg text-sm transition-colors ${
                            isActive
                              ? 'bg-primary-50 border-l-4 border-primary-500 -ml-1 pl-4'
                              : 'hover:bg-corporate-100'
                          }`
                        }
                      >
                        {/* Completion indicator */}
                        <div className={`flex-shrink-0 mt-0.5 w-5 h-5 rounded-full flex items-center justify-center ${
                          completed
                            ? 'bg-accent-green text-white'
                            : 'border-2 border-corporate-300'
                        }`}>
                          {completed && <Check className="w-3 h-3" />}
                        </div>

                        <div className="flex-1 min-w-0">
                          <span className={`block truncate ${completed ? 'text-corporate-600' : 'text-corporate-800'}`}>
                            {module.id} {module.title}
                          </span>
                          <div className="flex items-center gap-1 mt-0.5">
                            <Clock className="w-3 h-3 text-corporate-400" />
                            <span className="text-xs text-corporate-500">
                              {module.duration}
                            </span>
                          </div>
                        </div>
                      </NavLink>
                    )
                  })}
                </div>
              )}
            </div>
          )
        })}
      </div>

      {/* Resources Section */}
      <div>
        <div className="flex items-center gap-2 px-3 mb-3">
          <Folder className="w-4 h-4 text-primary-500" />
          <h2 className="text-xs font-semibold text-corporate-500 uppercase tracking-wider">
            Resources
          </h2>
        </div>

        {resourceStructure.map(section => {
          const isExpanded = expandedResources[section.id]

          return (
            <div key={section.id} className="mb-2">
              {/* Section Header */}
              <button
                onClick={() => toggleResource(section.id)}
                className="w-full flex items-center gap-2 px-3 py-2 text-left rounded-lg hover:bg-corporate-100 transition-colors"
              >
                {isExpanded ? (
                  <ChevronDown className="w-4 h-4 text-corporate-400 flex-shrink-0" />
                ) : (
                  <ChevronRight className="w-4 h-4 text-corporate-400 flex-shrink-0" />
                )}
                <span className="text-sm font-medium text-corporate-800">
                  {section.title}
                </span>
              </button>

              {/* Categories and Files */}
              {isExpanded && (
                <div className="ml-4 mt-1">
                  {section.categories.map(category => (
                    <div key={category.id} className="mb-2">
                      <div className="px-3 py-1 text-xs font-medium text-corporate-500 uppercase">
                        {category.title}
                      </div>
                      <div className="space-y-0.5">
                        {category.files.map(file => (
                          <NavLink
                            key={file.id}
                            to={`/resource/${encodeURIComponent(file.path)}`}
                            onClick={handleClick}
                            className={({ isActive }) =>
                              `flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm transition-colors ${
                                isActive
                                  ? 'bg-primary-50 border-l-4 border-primary-500 -ml-1 pl-4'
                                  : 'hover:bg-corporate-100'
                              }`
                            }
                          >
                            <FileText className="w-4 h-4 text-corporate-400 flex-shrink-0" />
                            <span className="truncate text-corporate-700">
                              {file.title}
                            </span>
                          </NavLink>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </nav>
  )
}
