import { useState } from 'react'
import { Quiz, QuizQuestion, QuizAttempt, QuizResult } from '../../types/quiz'
import { CheckCircle2, XCircle, Award, RotateCcw } from 'lucide-react'

interface QuizRendererProps {
  quiz: Quiz
  onComplete?: (attempt: QuizAttempt) => void
}

export function QuizRenderer({ quiz, onComplete }: QuizRendererProps) {
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [submitted, setSubmitted] = useState(false)
  const [results, setResults] = useState<QuizResult[]>([])
  const [attempt, setAttempt] = useState<QuizAttempt | null>(null)

  // Calculate results when quiz is submitted
  const handleSubmit = () => {
    const quizResults: QuizResult[] = quiz.questions.map((question) => {
      const userAnswer = answers[question.id] || ''
      const correctAnswer = question.correctAnswer

      let isCorrect = false
      if (Array.isArray(correctAnswer)) {
        isCorrect = correctAnswer.includes(userAnswer)
      } else {
        isCorrect = userAnswer === correctAnswer
      }

      return {
        questionId: question.id,
        userAnswer,
        correctAnswer,
        isCorrect,
        points: isCorrect ? question.points : 0,
        maxPoints: question.points,
        explanation: question.explanation
      }
    })

    const score = quizResults.reduce((sum, r) => sum + r.points, 0)
    const maxScore = quiz.questions.reduce((sum, q) => sum + q.points, 0)
    const percentage = Math.round((score / maxScore) * 100)
    const passed = percentage >= quiz.passingScore

    const quizAttempt: QuizAttempt = {
      quizId: quiz.id,
      answers,
      score,
      maxScore,
      percentage,
      passed,
      completedAt: new Date().toISOString()
    }

    setResults(quizResults)
    setAttempt(quizAttempt)
    setSubmitted(true)

    if (onComplete) {
      onComplete(quizAttempt)
    }
  }

  const handleRetry = () => {
    setAnswers({})
    setSubmitted(false)
    setResults([])
    setAttempt(null)
  }

  const handleAnswerChange = (questionId: string, answer: string) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }))
  }

  const isAllAnswered = quiz.questions.every(q => answers[q.id])

  if (submitted && attempt) {
    return (
      <div className="bg-white border border-gray-200 rounded-lg p-6 mt-6">
        <div className="text-center mb-6">
          <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${
            attempt.passed ? 'bg-green-100' : 'bg-yellow-100'
          }`}>
            {attempt.passed ? (
              <Award className="w-8 h-8 text-green-600" />
            ) : (
              <RotateCcw className="w-8 h-8 text-yellow-600" />
            )}
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            {attempt.passed ? 'Congratulations!' : 'Keep Practicing!'}
          </h3>
          <p className="text-lg text-gray-600 mb-4">
            You scored <span className="font-bold text-purple-600">{attempt.score}/{attempt.maxScore}</span> ({attempt.percentage}%)
          </p>
          <p className="text-sm text-gray-500">
            Passing score: {quiz.passingScore}%
          </p>
        </div>

        <div className="space-y-6 mb-6">
          {quiz.questions.map((question, index) => {
            const result = results.find(r => r.questionId === question.id)
            if (!result) return null

            return (
              <div key={question.id} className="border-t pt-4">
                <div className="flex items-start gap-3 mb-3">
                  {result.isCorrect ? (
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  ) : (
                    <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  )}
                  <div className="flex-1">
                    <p className="font-medium text-gray-900 mb-2">
                      Question {index + 1}: {question.question}
                    </p>
                    <div className="text-sm space-y-1">
                      <p>
                        <span className="text-gray-600">Your answer: </span>
                        <span className={result.isCorrect ? 'text-green-700 font-medium' : 'text-red-700 font-medium'}>
                          {result.userAnswer || '(not answered)'}
                        </span>
                      </p>
                      {!result.isCorrect && (
                        <p>
                          <span className="text-gray-600">Correct answer: </span>
                          <span className="text-green-700 font-medium">
                            {Array.isArray(result.correctAnswer)
                              ? result.correctAnswer.join(', ')
                              : result.correctAnswer}
                          </span>
                        </p>
                      )}
                      {result.explanation && (
                        <p className="text-gray-600 mt-2 italic">
                          💡 {result.explanation}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <button
          onClick={handleRetry}
          className="w-full bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors font-medium"
        >
          Retry Quiz
        </button>
      </div>
    )
  }

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 mt-6">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{quiz.title}</h3>
        {quiz.description && (
          <p className="text-gray-600 text-sm">{quiz.description}</p>
        )}
        <p className="text-sm text-gray-500 mt-2">
          Passing score: {quiz.passingScore}% • {quiz.questions.length} questions
        </p>
      </div>

      <div className="space-y-6">
        {quiz.questions.map((question, index) => (
          <QuizQuestionRenderer
            key={question.id}
            question={question}
            questionNumber={index + 1}
            selectedAnswer={answers[question.id]}
            onAnswerChange={(answer) => handleAnswerChange(question.id, answer)}
          />
        ))}
      </div>

      <button
        onClick={handleSubmit}
        disabled={!isAllAnswered}
        className={`w-full mt-6 px-6 py-3 rounded-lg font-medium transition-colors ${
          isAllAnswered
            ? 'bg-purple-600 text-white hover:bg-purple-700'
            : 'bg-gray-200 text-gray-500 cursor-not-allowed'
        }`}
      >
        {isAllAnswered ? 'Submit Quiz' : 'Answer all questions to submit'}
      </button>
    </div>
  )
}

interface QuizQuestionRendererProps {
  question: QuizQuestion
  questionNumber: number
  selectedAnswer?: string
  onAnswerChange: (answer: string) => void
}

function QuizQuestionRenderer({
  question,
  questionNumber,
  selectedAnswer,
  onAnswerChange
}: QuizQuestionRendererProps) {
  return (
    <div className="border border-gray-200 rounded-lg p-4">
      <p className="font-medium text-gray-900 mb-3">
        {questionNumber}. {question.question}
      </p>

      {question.type === 'multiple-choice' || question.type === 'true-false' ? (
        <div className="space-y-2">
          {question.options?.map((option) => (
            <label
              key={option}
              className={`flex items-center p-3 border rounded-lg cursor-pointer transition-colors ${
                selectedAnswer === option
                  ? 'border-purple-600 bg-purple-50'
                  : 'border-gray-200 hover:border-purple-300 hover:bg-gray-50'
              }`}
            >
              <input
                type="radio"
                name={question.id}
                value={option}
                checked={selectedAnswer === option}
                onChange={(e) => onAnswerChange(e.target.value)}
                className="w-4 h-4 text-purple-600 focus:ring-purple-500"
              />
              <span className="ml-3 text-gray-700">{option}</span>
            </label>
          ))}
        </div>
      ) : (
        <input
          type="text"
          value={selectedAnswer || ''}
          onChange={(e) => onAnswerChange(e.target.value)}
          placeholder="Type your answer here"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
        />
      )}
    </div>
  )
}
