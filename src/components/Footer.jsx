import { DiamondMark } from './Logo'
import { EMAIL, PHONE, PHONE_LINK } from '../data'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        <DiamondMark size={22} light />
        <span className="footer-name">Brilliant</span>
        <span>© 2026 · Toronto, ON</span>
      </div>
      <div className="footer-right">
        <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
        <a href={PHONE_LINK} className="footer-phone">
          {PHONE}
        </a>
      </div>
    </footer>
  )
}

export default Footer
