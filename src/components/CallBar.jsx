import { useLocation } from 'react-router-dom'
import { PHONE, PHONE_LINK } from '../data'

// Sticky call button, only visible on mobile (see CSS)
function CallBar() {
  const location = useLocation()
  const onQuotePage = location.pathname === '/quote'

  return (
    <a href={PHONE_LINK} className={onQuotePage ? 'call-bar call-bar-outline' : 'call-bar'}>
      {onQuotePage ? `Or call ${PHONE}` : `Call ${PHONE}`}
    </a>
  )
}

export default CallBar
