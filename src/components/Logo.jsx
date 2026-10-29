// The diamond mark from logo option 1b
export function DiamondMark({ size = 26, light = false }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40">
      <polygon points="20,2 38,20 20,38 2,20" fill={light ? '#fff' : '#1f3550'} />
      <polygon points="20,11 29,20 20,29 11,20" fill="#8fb8d6" />
    </svg>
  )
}

function Logo({ light = false, small = false }) {
  return (
    <div className={light ? 'logo logo-light' : 'logo'}>
      <DiamondMark size={small ? 22 : 26} light={light} />
      <span className="logo-name">Brilliant</span>
      {!small && <span className="logo-tag">SNOW REMOVAL</span>}
    </div>
  )
}

export default Logo
