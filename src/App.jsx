import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'd' || e.key === 'D') {
        setTheme(t => t === 'dark' ? 'light' : 'dark')
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 10000)
    return () => clearInterval(id)
  }, [])

  const fmt = (n) => String(n).padStart(2, '0')
  const timeStr = `${fmt(time.getHours())}:${fmt(time.getMinutes())}`

  return (
    <div className="app">
      <aside className="sidebar">
        <div className="avatar">AD</div>
        <h1>Ansh Dhanani</h1>
        <p className="tagline">Patch Commander</p>

        <div className="sidebar-section">
          <h3>Overview</h3>
          <p>Gujarat, India</p>
          <p className="time">{timeStr}</p>
          <p><a href="mailto:dhananiansh01@gmail.com">dhananiansh01@gmail.com</a></p>
          <p><a href="#">Resume</a></p>
          <p><a href="https://anshdhanani.is-a.dev" target="_blank">anshdhanani.is-a.dev</a></p>
          <p>he/him</p>
        </div>

        <div className="sidebar-section">
          <h3>Social Links</h3>
          <p>X — <a href="#">@Anshcodez</a></p>
          <p>GitHub — <a href="#">Ansh-dhanani</a></p>
          <p>LinkedIn — <a href="#">Ansh-dhanani</a></p>
          <p>Medium — <a href="#">@dhananiansh01</a></p>
        </div>
      </aside>

      <main className="main">
        <section>
          <h2>About</h2>
          <p>I'm Ansh Dhanani, a passionate Full Stack Developer specializing in crafting clean and thoughtful digital experiences. With a strong foundation in both frontend and backend technologies, I thrive on building applications that are not only functional but also user-centric and visually appealing.</p>
          <p>My journey in web development has equipped me with a diverse skill set, allowing me to seamlessly integrate design principles with robust coding practices. I believe that great software is born from the harmony of aesthetics and performance.</p>
        </section>

        <section>
          <h2>Stack</h2>
          <div className="tags">
            {['JavaScript','MongoDB','PostgreSQL','Git','Problem-solving','Full-stack Development','Node.js','Express','Tailwind CSS','REST APIs','GraphQL'].map(s => <span key={s} className="tag">{s}</span>)}
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
      </main>

      <footer>
        <p>Built by Ansh Dhanani.</p>
        <div className="footer-links">
          <a href="#">X</a>
          <a href="#">GitHub</a>
          <a href="#">LinkedIn</a>
        </div>
      </footer>

      <div className="theme-hint">Press D to toggle theme</div>
    </div>
  )
}

export default App
