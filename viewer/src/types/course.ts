export interface CourseModule {
  id: string
  title: string
  duration: string
  path: string
  objectives: string[]
}

export interface CourseLevel {
  id: string
  title: string
  description: string
  modules: CourseModule[]
}

export interface CourseInfo {
  title: string
  version: string
  description: string
  targetAudience: string
  prerequisites: string[]
  estimatedDuration: string
  lastUpdated: string
}

export interface CourseStructure {
  course: CourseInfo
  levels: CourseLevel[]
}

export interface ResourceFile {
  id: string
  title: string
  path: string
}

export interface ResourceCategory {
  id: string
  title: string
  files: ResourceFile[]
}

export interface ResourceSection {
  id: string
  title: string
  categories: ResourceCategory[]
}

export interface Progress {
  completedModules: string[]
  lastVisited: string | null
  lastVisitedAt: string | null
}

export type ContentType = 'module' | 'resource'

export interface NavigationItem {
  type: ContentType
  id: string
  title: string
  path: string
  duration?: string
}
