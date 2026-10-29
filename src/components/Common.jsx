// Small reusable pieces used on many pages

export function Eyebrow({ children, light = false }) {
  return (
    <div className={light ? 'eyebrow eyebrow-light' : 'eyebrow'}>
      <span className="eyebrow-diamond"></span>
      <span className="eyebrow-line"></span>
      {children}
    </div>
  )
}

export function IconBox() {
  return (
    <div className="icon-box">
      <span className="icon-outline"></span>
      <span className="icon-dot"></span>
    </div>
  )
}

export function Photo({ src, alt, className = '' }) {
  return <img src={src} alt={alt} className={`photo ${className}`} />
}
