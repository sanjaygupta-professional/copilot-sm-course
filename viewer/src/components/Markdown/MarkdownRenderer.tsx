import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { CodeBlock } from './CodeBlock'
import { Table, TableHead, TableBody, TableRow, TableHeader, TableCell } from './Table'
import type { Components } from 'react-markdown'

interface MarkdownRendererProps {
  content: string
}

export function MarkdownRenderer({ content }: MarkdownRendererProps) {
  const components: Components = {
    // Code blocks
    code({ className, children, node }) {
      // Check if this is inline code by looking at the parent node
      const isInline = node?.position?.start.line === node?.position?.end.line &&
                       !className?.startsWith('language-')
      const match = /language-(\w+)/.exec(className || '')
      const language = match ? match[1] : undefined

      return (
        <CodeBlock inline={isInline} language={language}>
          {String(children).replace(/\n$/, '')}
        </CodeBlock>
      )
    },

    // Tables
    table: ({ children }) => <Table>{children}</Table>,
    thead: ({ children }) => <TableHead>{children}</TableHead>,
    tbody: ({ children }) => <TableBody>{children}</TableBody>,
    tr: ({ children }) => <TableRow>{children}</TableRow>,
    th: ({ children }) => <TableHeader>{children}</TableHeader>,
    td: ({ children }) => <TableCell>{children}</TableCell>,

    // Headings with anchor links
    h1: ({ children }) => (
      <h1 className="text-3xl font-bold text-corporate-900 border-b border-corporate-200 pb-4 mb-6 mt-8 first:mt-0">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-semibold text-corporate-900 mt-8 mb-4 pb-2 border-b border-corporate-100">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-semibold text-corporate-800 mt-6 mb-3">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-lg font-medium text-corporate-800 mt-4 mb-2">
        {children}
      </h4>
    ),

    // Paragraphs
    p: ({ children }) => (
      <p className="mb-4 leading-relaxed text-corporate-700">
        {children}
      </p>
    ),

    // Lists
    ul: ({ children }) => (
      <ul className="mb-4 ml-6 list-disc space-y-2 text-corporate-700">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="mb-4 ml-6 list-decimal space-y-2 text-corporate-700">
        {children}
      </ol>
    ),
    li: ({ children }) => (
      <li className="leading-relaxed">
        {children}
      </li>
    ),

    // Links
    a: ({ href, children }) => (
      <a
        href={href}
        target={href?.startsWith('http') ? '_blank' : undefined}
        rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
        className="text-primary-500 hover:text-primary-600 underline underline-offset-2"
      >
        {children}
      </a>
    ),

    // Blockquotes (tips, notes)
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-primary-500 bg-primary-50 pl-4 py-3 pr-4 my-4 rounded-r-lg">
        {children}
      </blockquote>
    ),

    // Strong and emphasis
    strong: ({ children }) => (
      <strong className="font-semibold text-corporate-900">
        {children}
      </strong>
    ),
    em: ({ children }) => (
      <em className="italic">{children}</em>
    ),

    // Horizontal rule
    hr: () => (
      <hr className="my-8 border-corporate-200" />
    ),

    // Images
    img: ({ src, alt }) => (
      <img
        src={src}
        alt={alt || ''}
        className="rounded-lg shadow-md my-4 max-w-full"
        loading="lazy"
      />
    ),

    // Task list checkboxes
    input: ({ type, checked }) => {
      if (type === 'checkbox') {
        return (
          <input
            type="checkbox"
            checked={checked}
            readOnly
            className="mr-2 rounded border-corporate-300 text-primary-500 focus:ring-primary-500"
          />
        )
      }
      return <input type={type} />
    },
  }

  return (
    <div className="prose max-w-none">
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
        {content}
      </ReactMarkdown>
    </div>
  )
}
