import { Eyebrow, IconBox, Photo } from '../components/Common'
import { values, photos, PHONE, PHONE_LINK } from '../data'

function About() {
  return (
    <>
      <section className="section two-cols">
        <div className="stack">
          <Eyebrow>ABOUT</Eyebrow>
          <h1 className="page-title">A small Toronto crew that sweats the details.</h1>
          <p className="lead">
            Brilliant began with two college friends and one snowy Toronto winter. Between classes, they shovelled
            walkways for neighbours who couldn't do it themselves — and noticed how much a clear, safe path meant to
            the people behind each door. They started Brilliant to offer that same care to every home: done properly, on
            time, and with a photo so you never have to wonder.
          </p>
        </div>
        <div className="about-photo">
          <div className="photo-frame frame-left"></div>
          <Photo src={photos.sunrise} alt="Early morning in the snow" className="hero-img" />
          <span className="about-corner"></span>
        </div>
      </section>

      <section className="section dots-bg three-cols">
        {values.map((v) => (
          <div key={v.title} className="stack-small">
            <IconBox />
            <div className="value-title">{v.title}</div>
            <div className="text">{v.text}</div>
          </div>
        ))}
      </section>

      <section className="banner">
        <div className="banner-title navy">Talk to us directly.</div>
        <a href={PHONE_LINK} className="btn btn-navy btn-big">
          Call {PHONE}
        </a>
      </section>
    </>
  )
}

export default About
