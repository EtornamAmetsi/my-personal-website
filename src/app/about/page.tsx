export const metadata = { title: 'About – Emmanuella Ametsi' }

export default function About() {
  return (
    <main>
      <div className="hero" style={{ paddingBottom: '32px' }}>
        <div className="hero-text">
          <div className="section-label">About</div>
          <h1 className="section-title">Background</h1>

          <p className="bio">
            I'm a researcher and software engineer focused on making autonomous vehicles safer.
            My PhD research at <strong>[Your Institution]</strong> centers on runtime safety
            monitoring and adversarial testing for AV perception systems. Before my PhD, I spent
            [X] years as a software engineer at [Company], where I worked on [relevant area].
          </p>
          <p className="bio" style={{ marginTop: '16px' }}>
            I'm interested in the hard problem of deploying safety-critical ML systems in the
            real world — where formal methods meet messy data, and where "good enough" simply isn't.
          </p>

          <div className="hero-links" style={{ marginTop: '28px' }}>
            <a href="/cv.pdf" className="btn btn-primary">Download CV</a>
          </div>

          <div style={{ marginTop: '48px' }}>
            <div className="section-label" style={{ marginBottom: '16px' }}>Contact</div>
            <div className="post-list" style={{ gap: '10px' }}>
              <p className="bio">
                📧 <a href="mailto:you@university.edu" style={{ color: 'var(--accent)' }}>you@university.edu</a>
              </p>
              <p className="bio">
                🐙 <a href="https://github.com/yourname" style={{ color: 'var(--accent)' }}>github.com/yourname</a>
              </p>
              <p className="bio">
                🔗 <a href="https://linkedin.com/in/yourname" style={{ color: 'var(--accent)' }}>linkedin.com/in/yourname</a>
              </p>
              <p className="bio">
                🎓 <a href="https://scholar.google.com" style={{ color: 'var(--accent)' }}>Google Scholar</a>
              </p>
            </div>
          </div>

        </div>
      </div>
    </main>
  )
}