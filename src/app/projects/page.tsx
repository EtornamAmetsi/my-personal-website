import projects from '@/data/projects.json'

export const metadata = { title: 'Projects – Your Name' }

export default function Projects() {
  return (
    <main>
      <div className="hero" style={{ paddingBottom: '32px' }}>
        <div className="hero-text" style={{ width: '100%' }}>
          <div className="section-label">Engineering</div>
          <h1 className="section-title">Projects</h1>
          <div className="project-grid">
            {projects.map(p => (
              <div key={p.id} className="project-card">
                <h3>{p.title}</h3>
                <p>{p.description}</p>
                <div className="tags">
                  {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
                </div>
                <div className="project-links">
                  {Object.entries(p.links).map(([label, url]) => (
                    <a key={label} href={url} className="btn btn-ghost"
                      style={{ fontSize: '12px', padding: '5px 12px' }}
                      target="_blank" rel="noopener noreferrer">
                      {label.charAt(0).toUpperCase() + label.slice(1)}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}