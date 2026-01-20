import { ReactNode } from 'react'

interface TableProps {
  children: ReactNode
}

export function Table({ children }: TableProps) {
  return (
    <div className="my-4 overflow-x-auto rounded-lg border border-corporate-200">
      <table className="w-full text-sm">
        {children}
      </table>
    </div>
  )
}

export function TableHead({ children }: TableProps) {
  return (
    <thead className="bg-corporate-100 border-b border-corporate-200">
      {children}
    </thead>
  )
}

export function TableBody({ children }: TableProps) {
  return <tbody className="divide-y divide-corporate-100">{children}</tbody>
}

export function TableRow({ children }: TableProps) {
  return (
    <tr className="hover:bg-corporate-50 transition-colors">
      {children}
    </tr>
  )
}

export function TableHeader({ children }: TableProps) {
  return (
    <th className="px-4 py-3 text-left font-semibold text-corporate-900">
      {children}
    </th>
  )
}

export function TableCell({ children }: TableProps) {
  return (
    <td className="px-4 py-3 text-corporate-700">
      {children}
    </td>
  )
}
