import { useState, useEffect } from 'react'

interface UseContentResult {
  content: string | null
  loading: boolean
  error: string | null
}

// Base URL for content - in production this will be relative to the deployment
const getContentUrl = (path: string) => {
  const base = import.meta.env.BASE_URL || '/'
  // Remove leading slash from path if present, and ensure base ends with slash
  const normalizedPath = path.startsWith('/') ? path.slice(1) : path
  const normalizedBase = base.endsWith('/') ? base : base + '/'
  return `${normalizedBase}content/${normalizedPath}`
}

export function useContent(path: string | null): UseContentResult {
  const [content, setContent] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!path) {
      setContent(null)
      setLoading(false)
      setError(null)
      return
    }

    let cancelled = false

    async function fetchContent() {
      if (!path) return

      setLoading(true)
      setError(null)

      try {
        const url = getContentUrl(path)
        const response = await fetch(url)

        if (!response.ok) {
          throw new Error(`Failed to load content: ${response.status} ${response.statusText}`)
        }

        const text = await response.text()

        if (!cancelled) {
          setContent(text)
          setError(null)
        }
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : 'Failed to load content')
          setContent(null)
        }
      } finally {
        if (!cancelled) {
          setLoading(false)
        }
      }
    }

    fetchContent()

    return () => {
      cancelled = true
    }
  }, [path])

  return { content, loading, error }
}
