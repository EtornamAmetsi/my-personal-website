import pubs from '@/data/publications.json'
import projects from '@/data/projects.json'
import posts from '@/data/posts.json'

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <div className="hero">
        <img
          src="/avatar.jpg"
          alt="Emmanuella Ametsi"
          className="hero-avatar"
          style={{ objectFit: 'cover' }}
        />
        <div className="hero-text">
          <h1>Emmanuella Ametsi</h1>
          <p className="role">Industrial PhD Student · Volvo Cars & Chalmers University of Technology</p>
          <p className="bio">
            I research safety in autonomous driving, with a focus on runtime monitoring using
            out-of-distribution detection. My work aims to answer a hard question: how do we know
            when an autonomous vehicle's perception system is about to fail — before it does?
          </p>
          <div className="hero-links">
            <a href="/cv.pdf" className="btn btn-primary">📄 CV / Résumé</a>
            <a href="https://github.com/etornamametsi" className="btn btn-ghost">GitHub</a>
            <a href="https://www.linkedin.com/in/emmanuella-ametsi" className="btn btn-ghost">LinkedIn</a>
            <a href="mailto:etornam@chalmers.se" className="btn btn-ghost">Email</a>
          </div>
        </div>
      </div>

      {/* RESEARCH */}
      <section id="research">
        <div className="section-label">Research</div>
        <div className="section-title">Publications</div>
        <div className="pub-list">
          {pubs.map((pub) => (
            <div key={pub.id} className="pub-card">
              <span className="pub-venue">{pub.venue}</span>
              <div className="pub-title">{pub.title}</div>
              <div className="pub-authors">
                {pub.authors.map((a, i) => (
                  <span key={i}>
                    {i > 0 && ', '}
                    {a === 'Emmanuella Ametsi' ? <strong>{a}</strong> : a}
                  </span>
                ))}
              </div>
              <div className="pub-footer">
                {Object.entries(pub.links).map(([label, url]) => (
                  <a key={label} href={url} className="pub-link" target="_blank" rel="noopener noreferrer">
                    {label.toUpperCase()}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects">
        <div className="section-label">Engineering</div>
        <div className="section-title">Projects</div>
        <div className="project-grid">
          {projects.map((p) => (
            <div key={p.id} className="project-card">
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <div className="tags">
                {p.tags.map((t) => <span key={t} className="tag">{t}</span>)}
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
      </section>

      {/* BLOG */}
      <section id="blog">
        <div className="section-label">Writing</div>
        <div className="section-title">Blog</div>
        <div className="post-list">
          {posts.map(p => (
            <div key={p.slug} className="post-item">
              <div className="post-date">{p.date}</div>
              <div className="post-content">
                <span className="post-tag">{p.tag}</span>
                <h3><a href={`/blog/${p.slug}`}>{p.title}</a></h3>
                <p>{p.summary}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about">
        <div className="section-label">About</div>
        <div className="section-title">Background</div>
        <p className="bio">
          I'm an Industrial PhD student jointly at Volvo Cars and Chalmers University of Technology,
          researching safety in autonomous driving with a focus on runtime monitoring and
          out-of-distribution detection.
        </p>
        <p className="bio" style={{ marginTop: '16px' }}>
          My path here was anything but linear. I started as a lover of design — drawn to how
          technology shapes human experience. That curiosity led me to study Computer Science at the
          University of Ghana, then Information Technology at Carnegie Mellon University as a
          MasterCard Foundation Scholar, where I initially planned to pivot into HCI.
        </p>
        <p className="bio" style={{ marginTop: '16px' }}>
          A summer at EPFL's Mathis Lab — building ML-powered tools for neurological patient
          assessments — showed me how deeply software can affect real lives. A role at Volvo Cars
          then pulled me into the automotive world, and I never looked back. Today I'm working on
          one of the hardest open problems in AV safety: detecting when a perception system is
          about to fail, before it does.
        </p>

        <div className="hero-links" style={{ marginTop: '28px' }}>
          <a href="/cv.pdf" className="btn btn-primary">Download CV</a>
        </div>

        <div style={{ marginTop: '40px' }}>
          <div className="section-label" style={{ marginBottom: '16px' }}>Contact</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <p className="bio">📧 <a href="mailto:etornam@chalmers.se" style={{ color: 'var(--accent)' }}>etornam@chalmers.se</a> (academic)</p>
            <p className="bio">📧 <a href="mailto:emmanuella.ametsi@volvocars.com" style={{ color: 'var(--accent)' }}>emmanuella.ametsi@volvocars.com</a> (professional)</p>
            <p className="bio">🔗 <a href="https://www.linkedin.com/in/emmanuella-ametsi" style={{ color: 'var(--accent)' }}>linkedin.com/in/emmanuella-ametsi</a></p>
          </div>
        </div>
      </section>
    </main>
  )
}