
'use client'
import { useState } from 'react'

type Pub = {
  id: string
  title: string
  authors: string[]
  venue: string
  year: number
  abstract: string
  links: Record<string, string>
}

export default function PublicationCard({ pub, yourName = 'Your Name' }: { pub: Pub; yourName?: string }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border border-gray-200 rounded-xl p-5 hover:shadow-md transition-shadow bg-white">
      <span className="inline-block text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded mb-2">
        {pub.venue}
      </span>
      <h3 className="font-semibold text-base leading-snug mb-1">{pub.title}</h3>
      <p className="text-sm text-gray-500 mb-3">
        {pub.authors.map((a, i) => (
          <span key={i}>
            {i > 0 && ', '}
            {a === yourName ? <strong className="text-gray-800">{a}</strong> : a}
          </span>
        ))}
      </p>
      {open && <p className="text-sm text-gray-600 leading-relaxed mb-3">{pub.abstract}</p>}
      <div className="flex items-center gap-2 flex-wrap">
        {Object.entries(pub.links).map(([label, url]) => (
          <a key={label} href={url} target="_blank" rel="noopener noreferrer"
            className="text-xs font-medium text-blue-600 border border-blue-200 px-2.5 py-1 rounded hover:bg-blue-600 hover:text-white transition-colors capitalize">
            {label}
          </a>
        ))}
        <button onClick={() => setOpen(o => !o)}
          className="ml-auto text-xs text-gray-400 hover:text-blue-600">
          {open ? 'Hide abstract ▴' : 'Show abstract ▾'}
        </button>
      </div>
    </div>
  )
}