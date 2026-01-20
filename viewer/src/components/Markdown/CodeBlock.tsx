import { useState } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { Copy, Check } from 'lucide-react'

// Custom terminal green theme based on oneDark
const terminalGreen = {
  ...oneDark,
  'pre[class*="language-"]': {
    ...oneDark['pre[class*="language-"]'],
    background: '#1a1a2e',
  },
  'code[class*="language-"]': {
    ...oneDark['code[class*="language-"]'],
    color: '#4ade80', // Terminal green
  },
  // Override token colors to use green shades
  comment: { color: '#6b7280' },
  prolog: { color: '#6b7280' },
  doctype: { color: '#6b7280' },
  cdata: { color: '#6b7280' },
  punctuation: { color: '#86efac' },
  property: { color: '#4ade80' },
  tag: { color: '#22c55e' },
  boolean: { color: '#a7f3d0' },
  number: { color: '#a7f3d0' },
  constant: { color: '#4ade80' },
  symbol: { color: '#4ade80' },
  selector: { color: '#86efac' },
  'attr-name': { color: '#86efac' },
  string: { color: '#86efac' },
  char: { color: '#86efac' },
  builtin: { color: '#22c55e' },
  inserted: { color: '#4ade80' },
  operator: { color: '#d1d5db' },
  entity: { color: '#4ade80' },
  url: { color: '#4ade80' },
  variable: { color: '#4ade80' },
  atrule: { color: '#86efac' },
  'attr-value': { color: '#86efac' },
  keyword: { color: '#22c55e' },
  function: { color: '#4ade80' },
  'class-name': { color: '#22c55e' },
  regex: { color: '#86efac' },
  important: { color: '#22c55e', fontWeight: 'bold' },
}

interface CodeBlockProps {
  children: string
  language?: string
  inline?: boolean
}

export function CodeBlock({ children, language, inline }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  // Handle inline code
  if (inline) {
    return (
      <code className="bg-corporate-100 text-corporate-800 px-1.5 py-0.5 rounded text-sm font-mono">
        {children}
      </code>
    )
  }

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(children)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  // Determine language for syntax highlighting
  const lang = language || 'text'

  return (
    <div className="relative group my-4">
      {/* Language badge and copy button */}
      <div className="absolute right-2 top-2 flex items-center gap-2 z-10">
        {language && (
          <span className="text-xs text-corporate-400 bg-corporate-800 px-2 py-1 rounded">
            {language}
          </span>
        )}
        <button
          onClick={handleCopy}
          className="p-1.5 text-corporate-400 hover:text-white bg-corporate-700 hover:bg-corporate-600 rounded transition-colors opacity-0 group-hover:opacity-100"
          aria-label="Copy code"
        >
          {copied ? (
            <Check className="w-4 h-4 text-accent-green" />
          ) : (
            <Copy className="w-4 h-4" />
          )}
        </button>
      </div>

      <SyntaxHighlighter
        language={lang}
        style={terminalGreen}
        customStyle={{
          margin: 0,
          padding: '1rem',
          paddingTop: language ? '2.5rem' : '1rem',
          borderRadius: '0.5rem',
          fontSize: '0.875rem',
        }}
        codeTagProps={{
          style: {
            fontFamily: '"JetBrains Mono", "Fira Code", Consolas, monospace',
          },
        }}
      >
        {children.trim()}
      </SyntaxHighlighter>
    </div>
  )
}
