import { useState } from 'react'

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  if (sent) {
    return (
      <div className="page contact-page">
        <section>
          <h2>Contact</h2>
          <p className="sent-msg">Thanks for reaching out! I'll get back to you soon.</p>
        </section>
      </div>
    )
  }

  return (
    <div className="page contact-page">
      <section>
        <h2>Contact</h2>
        <p>Have a question or want to work together? Drop me a message.</p>
        <form className="contact-form" onSubmit={(e) => { e.preventDefault(); setSent(true) }}>
          <input type="text" placeholder="Name" value={form.name} onChange={(e) => setForm({...form, name: e.target.value})} required />
          <input type="email" placeholder="Email" value={form.email} onChange={(e) => setForm({...form, email: e.target.value})} required />
          <textarea placeholder="Message" value={form.message} onChange={(e) => setForm({...form, message: e.target.value})} required rows={5} />
          <button type="submit">Send</button>
        </form>
      </section>
    </div>
  )
}

export default Contact
