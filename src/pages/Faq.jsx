import { useState } from 'react'
import { Eyebrow } from '../components/Common'
import { faqs, PHONE } from '../data'

function Faq() {
  // index of the open question, -1 means all closed
  const [openIndex, setOpenIndex] = useState(0)

  function toggle(index) {
    setOpenIndex(openIndex === index ? -1 : index)
  }

  return (
    <section className="section faq-layout">
      <div className="stack">
        <Eyebrow>FAQ</Eyebrow>
        <h1 className="page-title">Common questions</h1>
        <div className="card-text">Something not covered? Call {PHONE}.</div>
        <div className="faq-deco">
          <span className="faq-deco-1"></span>
          <span className="faq-deco-2"></span>
          <span className="faq-deco-3"></span>
        </div>
      </div>

      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={faq.q} className="faq-item" onClick={() => toggle(index)}>
            <div className="faq-question">
              <span>{faq.q}</span>
              <span className="faq-icon">{openIndex === index ? '−' : '+'}</span>
            </div>
            {openIndex === index && <div className="faq-answer">{faq.a}</div>}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Faq
