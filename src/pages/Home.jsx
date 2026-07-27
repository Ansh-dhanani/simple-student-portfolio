import { useState, useEffect } from 'react'

function Home() {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 10000)
    return () => clearInterval(id)
  }, [])

  const fmt = (n) => String(n).padStart(2, '0')
  const timeStr = `${fmt(time.getHours())}:${fmt(time.getMinutes())}`

  return (
    <div className="page home-page">
      <section className="hero-section">
        <h1>Ansh Dhanani</h1>
        <p className="tagline">Patch Commander</p>
        <p className="location">Gujarat, India · {timeStr}</p>
        <div className="hero-links">
          <a href="mailto:dhananiansh01@gmail.com">dhananiansh01@gmail.com</a>
          <span className="sep">·</span>
          <a href="https://anshdhanani.is-a.dev" target="_blank">anshdhanani.is-a.dev</a>
          <span className="sep">·</span>
          <span>he/him</span>
        </div>
      </section>

      <section>
        <h2>Stack</h2>
        <div className="tags">
          {['JavaScript','MongoDB','PostgreSQL','Git','Node.js','Express','Tailwind CSS','REST APIs','GraphQL'].map(s => <span key={s} className="tag">{s}</span>)}
        </div>
      </section>

      <section>
        <h2>Experience</h2>
        <div className="exp-item">
          <h3>CHARUSAT</h3>
          <p className="meta">B.Tech AIML · 06.2024 — 05.2028</p>
        </div>
      </section>

      <section>
        <h2>Projects</h2>
        <div className="project-item">
          <h3>Mikk - Deterministic AI Context Engine</h3>
          <p className="meta">01.2026 — present</p>
          <p>Keeps AI coding agents architecture-aware before they edit code.</p>
          <div className="tags">
            {['TypeScript','Go','Rust','MCP','AST'].map(s => <span key={s} className="tag">{s}</span>)}
          </div>
        </div>
        <div className="project-item">
          <h3>METIS Hire - AI Recruitment Platform</h3>
          <p className="meta">02.2026 — 03.2026</p>
        </div>
        <div className="project-item">
          <h3>CivicConnect</h3>
          <p className="meta">01.2026</p>
        </div>
        <div className="project-item">
          <h3>Codeturtle</h3>
          <p className="meta">11.2025 — 04.2026</p>
        </div>
      </section>

      <section>
        <h2>Honors</h2>
        <div className="honor-item">
          <h3>CognizanceX'26 — Bot Roast + AI Repair Challenge</h3>
          <p className="meta">Winner · 03.2026</p>
        </div>
        <div className="honor-item">
          <h3>Codeversity 2026 — IIT Gandhinagar</h3>
          <p className="meta">Finalist (Top 13) · 02.2026</p>
        </div>
        <div className="honor-item">
          <h3>Markup-Mania Hackathon</h3>
          <p className="meta">3rd Place · 09.2025</p>
        </div>
      </section>
    </div>
  )
}

export default Home
