import { Eyebrow, Photo } from '../components/Common'
import { services, PHONE, PHONE_LINK } from '../data'

function Services() {
  return (
    <>
      <section className="page-header dots-bg">
        <span className="deco-diamond header-deco-1"></span>
        <span className="deco-diamond header-deco-2"></span>
        <span className="header-deco-3"></span>
        <Eyebrow>SERVICES</Eyebrow>
        <h1 className="page-title">Five services. One standard.</h1>
        <p className="lead">Every job follows the same checklist and ends with a photo sent to you.</p>
      </section>

      <section className="section service-list">
        {services.map((s) => (
          <div key={s.n} className="service-row">
            <span className="mono blue">{s.n}</span>
            <div className="stack-small">
              <div className="row-title">{s.name}</div>
              <div className="text">{s.desc}</div>
            </div>
            <div className="stack-small included">
              <div className="label">INCLUDED</div>
              {s.included.map((item) => (
                <div key={item}>· {item}</div>
              ))}
            </div>
            <Photo src={s.photo} alt={s.name} className="service-img" />
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

export default Services
