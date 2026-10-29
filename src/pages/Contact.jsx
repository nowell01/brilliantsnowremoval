import { useState } from 'react'
import { Eyebrow } from '../components/Common'
import { EMAIL, PHONE, PHONE_LINK } from '../data'

function Contact() {
  const [form, setForm] = useState({ name: '', contact: '', message: '' })
  const [sent, setSent] = useState(false)

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    // no backend yet, so we just show a thank-you message
    setSent(true)
  }

  return (
    <section className="section two-cols contact-layout">
      <div className="stack-big">
        <Eyebrow>CONTACT</Eyebrow>
        <div className="stack-small">
          <div className="card-text">Call — the fastest way to reach us</div>
          <a href={PHONE_LINK} className="big-phone">
            {PHONE}
          </a>
        </div>
        <div className="contact-info">
          <div>
            <div className="label">EMAIL</div>
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          </div>
          <div>
            <div className="label">TEXT</div>
            <div>{PHONE}</div>
          </div>
          <div>
            <div className="label">STORM LINE</div>
            <div>24/7 for contract clients</div>
          </div>
        </div>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-title">Or send a message</div>
        {sent ? (
          <p className="text">Thanks, {form.name || 'friend'}! We'll get back to you soon.</p>
        ) : (
          <>
            <input className="input" name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
            <input
              className="input"
              name="contact"
              placeholder="Phone or email"
              value={form.contact}
              onChange={handleChange}
              required
            />
            <textarea
              className="input textarea"
              name="message"
              placeholder="Message"
              value={form.message}
              onChange={handleChange}
            />
            <button type="submit" className="btn btn-navy">
              Send
            </button>
          </>
        )}
      </form>
    </section>
  )
}

export default Contact
