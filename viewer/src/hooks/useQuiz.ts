import { useState, useEffect } from 'react'
import { Quiz, QuizAttempt } from '../types/quiz'

const STORAGE_KEY_PREFIX = 'copilot-sm-quiz-'

interface UseQuizResult {
  quiz: Quiz | null
  loading: boolean
  error: string | null
  lastAttempt: QuizAttempt | null
  saveAttempt: (attempt: QuizAttempt) => void
}

export function useQuiz(quizPath: string | undefined): UseQuizResult {
  const [quiz, setQuiz] = useState<Quiz | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [lastAttempt, setLastAttempt] = useState<QuizAttempt | null>(null)

  // Load quiz data
  useEffect(() => {
    if (!quizPath) {
      setQuiz(null)
      setLoading(false)
      setError(null)
      return
    }

    let cancelled = false

    async function fetchQuiz() {
      if (!quizPath) return

      setLoading(true)
      setError(null)

      try {
        const base = import.meta.env.BASE_URL || '/'
        const normalizedPath = quizPath.startsWith('/') ? quizPath.slice(1) : quizPath
        const normalizedBase = base.endsWith('/') ? base : base + '/'
        const url = `${normalizedBase}content/${normalizedPath}`

        const response = await fetch(url)

        if (!response.ok) {
          throw new Error(`Failed to load quiz: ${response.status}`)
        }

        const data = await response.json() as Quiz

        if (!cancelled) {
          setQuiz(data)
          setError(null)

          // Load last attempt from localStorage
          const storedAttempt = localStorage.getItem(`${STORAGE_KEY_PREFIX}${data.id}`)
          if (storedAttempt) {
            setLastAttempt(JSON.parse(storedAttempt) as QuizAttempt)
          }
        }
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : 'Failed to load quiz')
          setQuiz(null)
        }
      } finally {
        if (!cancelled) {
          setLoading(false)
        }
      }
    }

    fetchQuiz()

    return () => {
      cancelled = true
    }
  }, [quizPath])

  const saveAttempt = (attempt: QuizAttempt) => {
    try {
      localStorage.setItem(`${STORAGE_KEY_PREFIX}${attempt.quizId}`, JSON.stringify(attempt))
      setLastAttempt(attempt)
    } catch (err) {
      console.error('Failed to save quiz attempt:', err)
    }
  }

  return { quiz, loading, error, lastAttempt, saveAttempt }
}
