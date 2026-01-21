export type QuestionType = 'multiple-choice' | 'true-false' | 'short-answer'

export interface QuizQuestion {
  id: string
  type: QuestionType
  question: string
  options?: string[] // For multiple-choice and true-false
  correctAnswer: string | string[] // Can be multiple for checkbox-style questions
  explanation?: string // Shown after answering
  points: number
}

export interface Quiz {
  id: string
  title: string
  description?: string
  questions: QuizQuestion[]
  passingScore: number // Percentage needed to pass (0-100)
}

export interface QuizAttempt {
  quizId: string
  answers: Record<string, string> // questionId -> user answer
  score: number
  maxScore: number
  percentage: number
  passed: boolean
  completedAt: string
}

export interface QuizResult {
  questionId: string
  userAnswer: string
  correctAnswer: string | string[]
  isCorrect: boolean
  points: number
  maxPoints: number
  explanation?: string
}
