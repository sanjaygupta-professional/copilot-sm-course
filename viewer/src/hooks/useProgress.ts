import { useState, useEffect, useCallback } from 'react'
import { Progress } from '../types/course'
import { courseStructure } from '../data/courseStructure'

const STORAGE_KEY = 'copilot-pm-course-progress'

const defaultProgress: Progress = {
  completedModules: [],
  lastVisited: null,
  lastVisitedAt: null
}

function loadProgress(): Progress {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) {
      return JSON.parse(stored) as Progress
    }
  } catch (error) {
    console.error('Failed to load progress from localStorage:', error)
  }
  return defaultProgress
}

function saveProgress(progress: Progress): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress))
  } catch (error) {
    console.error('Failed to save progress to localStorage:', error)
  }
}

export function useProgress() {
  const [progress, setProgress] = useState<Progress>(loadProgress)

  // Sync with localStorage when progress changes
  useEffect(() => {
    saveProgress(progress)
    // Dispatch custom event to notify other components
    window.dispatchEvent(new CustomEvent('progressChanged'))
  }, [progress])

  // Listen for progress changes from other components
  useEffect(() => {
    const handleProgressChange = () => {
      setProgress(loadProgress())
    }

    // Listen for custom progress events
    window.addEventListener('progressChanged', handleProgressChange)

    // Also listen for storage events (from other tabs)
    window.addEventListener('storage', handleProgressChange)

    return () => {
      window.removeEventListener('progressChanged', handleProgressChange)
      window.removeEventListener('storage', handleProgressChange)
    }
  }, [])

  const markComplete = useCallback((moduleId: string) => {
    setProgress(prev => {
      if (prev.completedModules.includes(moduleId)) {
        return prev
      }
      return {
        ...prev,
        completedModules: [...prev.completedModules, moduleId]
      }
    })
  }, [])

  const markIncomplete = useCallback((moduleId: string) => {
    setProgress(prev => ({
      ...prev,
      completedModules: prev.completedModules.filter(id => id !== moduleId)
    }))
  }, [])

  const toggleComplete = useCallback((moduleId: string) => {
    setProgress(prev => {
      if (prev.completedModules.includes(moduleId)) {
        return {
          ...prev,
          completedModules: prev.completedModules.filter(id => id !== moduleId)
        }
      }
      return {
        ...prev,
        completedModules: [...prev.completedModules, moduleId]
      }
    })
  }, [])

  const isComplete = useCallback((moduleId: string) => {
    return progress.completedModules.includes(moduleId)
  }, [progress.completedModules])

  const setLastVisited = useCallback((moduleId: string) => {
    setProgress(prev => ({
      ...prev,
      lastVisited: moduleId,
      lastVisitedAt: new Date().toISOString()
    }))
  }, [])

  const resetProgress = useCallback(() => {
    setProgress(defaultProgress)
  }, [])

  // Calculate completion percentage per level
  const getLevelProgress = useCallback((levelId: string) => {
    const level = courseStructure.levels.find(l => l.id === levelId)
    if (!level) return 0

    const completedCount = level.modules.filter(m =>
      progress.completedModules.includes(m.id)
    ).length

    return Math.round((completedCount / level.modules.length) * 100)
  }, [progress.completedModules])

  // Calculate overall progress
  const getTotalProgress = useCallback(() => {
    const totalModules = courseStructure.levels.reduce(
      (sum, level) => sum + level.modules.length,
      0
    )
    return Math.round((progress.completedModules.length / totalModules) * 100)
  }, [progress.completedModules])

  return {
    progress,
    markComplete,
    markIncomplete,
    toggleComplete,
    isComplete,
    setLastVisited,
    resetProgress,
    getLevelProgress,
    getTotalProgress
  }
}
