import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Emmanuella Amesti – AV Safety Researcher',
  description: 'Researcher in autonomous driving safety and software engineer.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Lora:ital,wght@0,400;0,600;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <nav>
          <div className="nav-inner">
            <a href="/" className="nav-logo">Emmanuella Ametsi</a>
            <div className="nav-links">
              <a href="/#research">Research</a>
              <a href="/projects">Projects</a>
              <a href="/blog">Blog</a>
              <a href="/about">About</a>
            </div>
          </div>
        </nav>
        {children}
        <footer>
          <span>© {new Date().getFullYear()} Emmanuella Ametsi</span>
          <div className="footer-links">
            <a href="https://github.com/yourname">GitHub</a>
            <a href="https://scholar.google.com">Scholar</a>
          </div>
        </footer>
      </body>
    </html>
  )
}