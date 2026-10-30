import { Link } from 'react-router-dom'
import { Eyebrow, IconBox, Photo } from '../components/Common'
import { DiamondMark } from '../components/Logo'
import { services, steps, areas, photos, PHONE, PHONE_LINK } from '../data'

const trustItems = ['Photo proof after every visit', 'Fully insured', 'Response within 2 hrs of snowfall']

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="hero dots-bg">
        <span className="deco-diamond hero-deco"></span>
        <div className="hero-text">
          <Eyebrow>TORONTO DRIVEWAY, SIDEWALK &amp; DE-ICING SERVICE</Eyebrow>
          <h1 className="hero-title">Cleared, salted, and photographed. Every visit.</h1>
          <p className="lead">
            Seasonal contracts and per-visit service for Toronto homeowners. After each visit, you receive a
            timestamped photo of the finished work.
          </p>
          <div className="button-row">
            <a href={PHONE_LINK} className="btn btn-navy btn-big hide-mobile">
              Call {PHONE}
            </a>
            <Link to="/quote" className="btn btn-outline btn-big">
              Request a quote
            </Link>
          </div>
        </div>

        <div className="hero-photo">
          <div className="photo-frame"></div>
          <Photo src={photos.hero} alt="Freshly cleared snowy path" className="hero-img" />
          <span className="hero-corner"></span>
          <div className="visit-card">
            <img src={photos.path} alt="" className="visit-thumb" />
            <div>
              <div className="visit-title">
                <span className="small-diamond"></span>Visit complete
              </div>
              <div className="mono small-gray">06:42 · Cleared + salted</div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="trust-strip">
        {trustItems.map((item) => (
          <div key={item} className="trust-item">
            <span className="trust-icon">
              <span></span>
            </span>
            {item}
          </div>
        ))}
      </section>

      {/* Services */}
      <section className="section">
        <h2 className="section-title">Services</h2>
        <div className="service-grid">
          {services.map((s) => (
            <Link to="/services" key={s.name} className="service-card">
              <span className="card-deco-big"></span>
              <span className="card-deco-small"></span>
              <IconBox />
              <div className="card-title">{s.name}</div>
              <div className="card-text">{s.short}</div>
              <span className="mobile-arrow">→</span>
            </Link>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="section navy-bg how-it-works">
        <div>
          <Eyebrow light>HOW IT WORKS</Eyebrow>
          <h2 className="section-title white">You see the result before you step outside.</h2>
        </div>
        <div className="steps">
          {steps.map((step) => (
            <div key={step.n} className="step">
              <div className="step-number">
                <span></span>
                <b>{step.n}</b>
              </div>
              <div className="card-title white">{step.title}</div>
              <div className="card-text light-blue">{step.text}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Photo proof + area */}
      <section className="section two-cols">
        <div className="proof-box navy-bg">
          <div className="phone-card">
            <div className="phone-card-top">
              <DiamondMark size={20} />
              <b>Brilliant Snow Removal</b>
              <span className="mono small-gray">06:42</span>
            </div>
            <Photo src={photos.street} alt="Cleared walkway" className="phone-card-img" />
            <div className="phone-card-text">
              Visit complete at 34 Example Ave. Driveway, walkway and sidewalk cleared and salted.
            </div>
          </div>
        </div>
        <div className="stack">
          <Eyebrow>PHOTO PROOF · SERVICE AREA</Eyebrow>
          <h2 className="section-title">Serving Toronto</h2>
          <p className="text">{areas.map((a) => a.name).join(' · ')}</p>
          <Link to="/areas" className="underline-link">
            Check your postal code →
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="cta dots-bg">
        <span className="deco-diamond cta-deco"></span>
        <div className="cta-title">Ready before the next snowfall?</div>
        <a href={PHONE_LINK} className="btn btn-navy btn-big">
          Call {PHONE}
        </a>
      </section>
    </>
  )
}

export default Home
