import { Link } from 'react-router-dom'
import { Eyebrow } from '../components/Common'
import { plans, PHONE, PHONE_LINK } from '../data'

const notes = [
  { title: 'Price depends on', text: 'Driveway size, sidewalk length, steps, corner lot.' },
  { title: 'No hidden fees', text: 'HST shown on your quote.' },
  { title: 'Exact price in one call', text: 'Or send your address via the quote form.' },
]

function Plans() {
  return (
    <>
      <section className="dots-bg plans-section">
        <div className="plans-header">
          <Eyebrow>PLANS · 2026–27 SEASON</Eyebrow>
          <h1 className="page-title">Clear pricing, set before the first snow.</h1>
        </div>

        <div className="plan-grid">
          {plans.map((plan) => (
            <div key={plan.name} className={plan.featured ? 'plan-card plan-featured navy-bg' : 'plan-card'}>
              {plan.featured && <span className="badge">MOST CHOSEN</span>}
              <div className="plan-name">{plan.name}</div>
              <div className="plan-price">
                <span>{plan.price}</span>
                <small>{plan.unit}</small>
              </div>
              <div className="plan-text">{plan.text}</div>
              <div className="divider"></div>
              <div className="plan-features">
                {plan.features.map((f) => (
                  <span key={f}>· {f}</span>
                ))}
              </div>
              <Link to="/quote" className="btn btn-outline btn-big">
              Request a quote
            </Link>
              {/* <a href={PHONE_LINK} className={plan.featured ? 'btn btn-white' : 'btn btn-outline'}>
                {plan.button}
              </a> */}
            </div>
          ))}
        </div>
      </section>

      <section className="section three-cols border-top">
        {notes.map((note) => (
          <div key={note.title} className="stack-small">
            <div className="note-title">{note.title}</div>
            <div className="card-text">{note.text}</div>
          </div>
        ))}
      </section>
      <section className="banner navy-bg">
              <div className="banner-title">Not sure which you need? We'll tell you on the phone.</div>
              <a href={PHONE_LINK} className="btn btn-white btn-big">
                Call {PHONE}
              </a>
            </section>
    </>
  )
}

export default Plans
