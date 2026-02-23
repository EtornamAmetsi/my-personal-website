'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/research', label: 'Research' },
  { href: '/projects', label: 'Projects' },
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'About' },
]

export default function Nav() {
  const path = usePathname()
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-100">
      <div className="max-w-3xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link href="/" className="font-semibold text-sm text-gray-900">Your Name</Link>
        <div className="flex gap-6">
          {links.map(({ href, label }) => (
            <Link
              key={href} href={href}
              className={`text-sm font-medium transition-colors ${
                path.startsWith(href) ? 'text-blue-600' : 'text-gray-500 hover:text-blue-600'
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}