import { useState } from 'react'
import { Eyebrow } from '../components/Common'
import CoverageMap from '../components/CoverageMap'
import { areas, markhamPostalCodes } from '../data'

function Areas() {
  const [postal, setPostal] = useState('')
  const [message, setMessage] = useState('')
  // the area under the mouse (in the list or on the map)
  const [activeArea, setActiveArea] = useState(null)

  // Toronto postal codes start with "M", Markham has its own list
  function checkPostal(e) {
    e.preventDefault()
    const code = postal.trim().toUpperCase()
    const start = code.slice(0, 3)

    if (code.length < 3) {
      setMessage('Please enter at least 3 characters.')
    } else if (code[0] === 'M') {
      setMessage(`✓ ${start} is in our service area.`)
    } else if (markhamPostalCodes.includes(start)) {
      setMessage(`✓ ${start} is in our service area (Markham).`)
    } else {
      setMessage('Outside our area — call to check.')
    }
  }

  return (
    <section className="areas-layout">
      <div className="areas-left">
        <Eyebrow>SERVICE AREAS</Eyebrow>
        <h1 className="page-title">Where we work in Toronto</h1>

        <form className="postal-form" onSubmit={checkPostal}>
          <label htmlFor="postal">Check your postal code</label>
          <div className="postal-row">
            <input
              id="postal"
              className="input"
              value={postal}
              onChange={(e) => setPostal(e.target.value)}
              placeholder="M4K 1A1"
            />
            <button className="btn btn-navy" type="submit">
              Check
            </button>
          </div>
          <div className="postal-message">{message}</div>
        </form>

        <div>
          {areas.map((area) => (
            <div
              key={area.name}
              className={activeArea === area.name ? 'area-row area-row-active' : 'area-row'}
              onMouseEnter={() => setActiveArea(area.name)}
              onMouseLeave={() => setActiveArea(null)}
            >
              <span>{area.name}</span>
              <span className="gray">{area.status}</span>
            </div>
          ))}
        </div>

        <div className="card-text">Just outside our area? Call — we may still be able to help.</div>
      </div>

      <div className="map-box">
        <CoverageMap activeArea={activeArea} onAreaHover={setActiveArea} />
        <div className="map-legend">
          <div>
            <span className="legend-full"></span>Full coverage
          </div>
          <div>
            <span className="legend-select"></span>Select streets
          </div>
        </div>
      </div>
    </section>
  )
}

export default Areas
