import { useState } from 'react'
import { PHONE } from '../data'

const planOptions = ['Seasonal contract', 'Per visit', 'Salting only']
const serviceOptions = ['Driveway clearing', 'Sidewalk shovelling', 'Salting & de-icing', 'Pet-safe salt']

function Quote() {
  const [plan, setPlan] = useState(0)
  const [selected, setSelected] = useState(['Driveway clearing', 'Sidewalk shovelling', 'Salting & de-icing'])
  const [sent, setSent] = useState(false)

  function toggleService(name) {
    if (selected.includes(name)) {
      setSelected(selected.filter((s) => s !== name))
    } else {
      setSelected([...selected, name])
    }
  }

  function handleSubmit(e) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section className="dots-bg quote-layout">
      <form className="quote-form" onSubmit={handleSubmit}>
        <div className="stack-small">
          <h1 className="quote-title">Request a quote</h1>
          <div className="card-text">We reply with an exact price within one business day.</div>
        </div>

        {sent ? (
          <p className="text">Thanks! Your request was sent. We'll reply within one business day.</p>
        ) : (
          <>
            <div className="form-group">
              <div className="form-label">1 · Plan</div>
              <div className="plan-options">
                {planOptions.map((name, index) => (
                  <button
                    type="button"
                    key={name}
                    className={plan === index ? 'option option-active' : 'option'}
                    onClick={() => setPlan(index)}
                  >
                    {name}
                  </button>
                ))}
              </div>
            </div>

            <div className="form-group">
              <div className="form-label">2 · Services</div>
              <div className="chips">
                {serviceOptions.map((name) => {
                  const isOn = selected.includes(name)
                  return (
                    <button
                      type="button"
                      key={name}
                      className={isOn ? 'chip chip-active' : 'chip'}
                      onClick={() => toggleService(name)}
                    >
                      {isOn && '✓ '}
                      {name}
                    </button>
                  )
                })}
              </div>
            </div>

            <div className="form-group">
              <div className="form-label">3 · Property</div>
              <input className="input" placeholder="Street address" required />
              <div className="form-row">
                <input className="input" placeholder="Postal code" required />
                <select className="input" defaultValue="">
                  <option value="" disabled>
                    Number of front steps
                  </option>
                  <option>0</option>
                  <option>1–3</option>
                  <option>4–6</option>
                  <option>7+</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <div className="form-label">4 · Contact</div>
              <div className="form-row">
                <input className="input" placeholder="Full name" required />
                <input className="input" type="tel" placeholder="Mobile (for photo proof)" />
              </div>
              <input className="input" type="email" placeholder="Email" required />
            </div>

            <button type="submit" className="btn btn-navy btn-big">
              Send request
            </button>
          </>
        )}
      </form>

      <aside className="quote-side">
        <div className="phone-box navy-bg">
          <span className="phone-box-deco"></span>
          <div className="label light-blue">FASTER BY PHONE</div>
          <div className="phone-box-number">{PHONE}</div>
          <div className="card-text light-blue">Mon–Sat 7am–7pm. 24/7 during storms for contract clients.</div>
        </div>
        <div className="summary-box">
          <div className="label">YOUR SELECTION</div>
          <div className="summary-plan">{planOptions[plan]}</div>
          <div className="text">{selected.length > 0 ? selected.join(' · ') : 'No services selected'}</div>
          <div className="divider"></div>
          <div className="small-gray">Photo proof included with every visit.</div>
        </div>
      </aside>
    </section>
  )
}

export default Quote
