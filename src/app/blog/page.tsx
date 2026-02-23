import posts from '@/data/posts.json'

export const metadata = { title: 'Blog – Emmanuella Ametsi' }

export default function Blog() {
  return (
    <main>
      <div className="hero" style={{ paddingBottom: '32px' }}>
        <div className="hero-text">
          <div className="section-label">Writing</div>
          <h1 className="section-title">Blog</h1>
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
        </div>
      </div>
    </main>
  )
}