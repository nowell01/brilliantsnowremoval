// All the text content of the site lives here

export const PHONE = '(437) 872-8353'
export const PHONE_LINK = 'tel:+14378728353'
export const EMAIL = 'tvt25740@gmail.com'

// free photos from Unsplash
const img = (id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1200&q=70`

export const photos = {
  hero: img('photo-1612208695882-02f2322b7fee'),
  street: img('photo-1551582045-6ec9c11d8697'),
  house: img('photo-1517299321609-52687d1bc55a'),
  frost: img('photo-1478265409131-1f65c88f965c'),
  path: img('photo-1516431883659-655d41c09bf9'),
  sunrise: img('photo-1483664852095-d6cc6870702d'),
}

export const navLinks = [
  { to: '/services', label: 'Services' },
  { to: '/plans', label: 'Plans' },
  { to: '/areas', label: 'Areas' },
  { to: '/about', label: 'About' },
  { to: '/faq', label: 'FAQ' },
  { to: '/contact', label: 'Contact' },
]

export const services = [
  {
    n: '01',
    name: 'Driveway clearing',
    short: 'Full width to the curb, including the windrow left by city plows.',
    desc: 'Full driveway cleared to pavement, including the end-of-driveway windrow left by city plows.',
    included: ['Curb to garage', 'Windrow cleared', 'Snow piled away from cars & drains'],
    photo: photos.street,
  },
  {
    n: '02',
    name: 'Sidewalk shovelling',
    short: 'Walkways, steps and city sidewalk frontage, cleared edge to edge.',
    desc: 'Walkway, front steps and city sidewalk frontage, cleared to pavement.',
    included: ['Edges squared', 'Steps & landing', 'Snow placed away from drains'],
    photo: photos.hero,
  },
  {
    n: '03',
    name: 'Salting & de-icing',
    short: 'Measured application after clearing. Pet-safe option available.',
    desc: 'Measured application after every clear, or on ice-only days.',
    included: ['Rock salt or pet-safe blend', 'Steps & slopes prioritised', 'No over-salting near gardens'],
    photo: photos.frost,
  },
  {
    n: '04',
    name: 'Seasonal contract',
    short: 'Every qualifying snowfall, Nov–Apr. One fixed price.',
    desc: 'Every qualifying snowfall from Nov 15 to Apr 15, at a fixed price.',
    included: ['Priority dispatch', 'Salting included', 'Installments available'],
    photo: photos.house,
  },
  {
    n: '05',
    name: 'Per-visit / on-call',
    short: 'Call when you need us. Priced per visit.',
    desc: 'One visit, when you need it. Booked by phone.',
    included: ['Same checklist as contracts', 'Salting included', 'Subject to availability'],
    photo: photos.path,
  },
]

export const steps = [
  { n: '01', title: 'Snowfall ends', text: 'Crew dispatched to your address automatically.' },
  { n: '02', title: 'Cleared & salted', text: 'Driveway, walkway and sidewalk, to our checklist.' },
  { n: '03', title: 'Photo sent', text: 'Timestamped photo by text or email.' },
]

export const plans = [
  {
    name: 'Per visit',
    price: '$100–$350+',
    unit: '/ visit',
    text: 'Book by phone when needed. Subject to crew availability.',
    features: ['Driveway, sidewalk & walkway', 'Salting included', 'Photo proof'],
    button: 'Call to book',
  },
  {
    name: 'Seasonal contract',
    price: '$450–$1800+',
    unit: '/ season',
    text: 'Nov 15 – Apr 15. Priority dispatch.',
    features: ['Unlimited qualifying visits', 'Salting after every clear', 'Photo proof', 'Installments available'],
    button: 'Call to reserve',
    featured: true,
  },
  {
    name: 'Salting only',
    price: '$20–$60',
    unit: '/ application',
    text: 'For freezing rain and ice days with no snowfall.',
    features: ['Walkway & steps', 'Pet-safe option', 'Photo proof'],
    button: 'Call to book',
  },
]

// Each area has a rough outline [lat, lng] for the map on the Areas page.
// These are simplified shapes, not official boundaries.
export const areas = [
  {
    name: 'Downtown',
    status: 'Full coverage',
    shape: [
      [43.635, -79.475], [43.652, -79.46], [43.662, -79.44], [43.668, -79.41], [43.672, -79.37],
      [43.677, -79.34], [43.668, -79.295], [43.655, -79.31], [43.638, -79.345], [43.63, -79.39], [43.632, -79.425],
    ],
  },
  {
    name: 'Midtown',
    status: 'Full coverage',
    shape: [
      [43.662, -79.44], [43.68, -79.442], [43.706, -79.432], [43.708, -79.39], [43.705, -79.36],
      [43.69, -79.36], [43.677, -79.34], [43.672, -79.37], [43.668, -79.41],
    ],
  },
  {
    name: 'East York',
    status: 'Full coverage',
    shape: [
      [43.69, -79.36], [43.705, -79.36], [43.72, -79.335], [43.718, -79.305], [43.7, -79.297],
      [43.682, -79.3], [43.677, -79.34],
    ],
  },
  {
    name: 'North York',
    status: 'Full coverage',
    shape: [
      [43.706, -79.432], [43.708, -79.475], [43.722, -79.51], [43.75, -79.545], [43.775, -79.53],
      [43.795, -79.46], [43.808, -79.39], [43.818, -79.33], [43.79, -79.31], [43.76, -79.307],
      [43.72, -79.335], [43.705, -79.36], [43.708, -79.39],
    ],
  },
  {
    name: 'Etobicoke',
    status: 'Select Streets',
    shape: [
      [43.585, -79.543], [43.61, -79.567], [43.632, -79.591], [43.67, -79.597], [43.715, -79.615],
      [43.745, -79.64], [43.762, -79.6], [43.75, -79.545], [43.722, -79.51], [43.68, -79.5],
      [43.652, -79.495], [43.635, -79.475], [43.625, -79.49],
    ],
  },
  {
    name: 'Scarborough',
    status: 'Select streets',
    shape: [
      [43.718, -79.305], [43.72, -79.335], [43.76, -79.307], [43.79, -79.31], [43.818, -79.33],
      [43.855, -79.17], [43.83, -79.12], [43.79, -79.115], [43.76, -79.14], [43.735, -79.2],
      [43.705, -79.24], [43.68, -79.275], [43.682, -79.3], [43.7, -79.297],
    ],
  },
  {
    name: 'York',
    status: 'Select streets',
    shape: [
      [43.652, -79.495], [43.68, -79.5], [43.722, -79.51], [43.708, -79.475], [43.706, -79.432],
      [43.68, -79.442], [43.662, -79.44], [43.652, -79.46],
    ],
  },
  {
    name: 'Markham',
    status: 'Select streets',
    shape: [
      [43.802, -79.42], [43.808, -79.39], [43.818, -79.33], [43.855, -79.17], [43.96, -79.2],
      [43.93, -79.36], [43.87, -79.42],
    ],
  },
]

// Markham is outside Toronto, so its postal codes start with L instead of M
export const markhamPostalCodes = ['L3P', 'L3R', 'L3S', 'L3T', 'L6B', 'L6C', 'L6E', 'L6G']

export const values = [
  { title: 'Precise', text: 'Edges squared, steps cleared, drains left open. Same checklist on every property.' },
  { title: 'Accountable', text: "A photo after every visit. If something's missed, we return at no charge." },
  { title: 'Respectful', text: 'Quiet equipment early mornings. Gardens, railings and doors left untouched.' },
]

export const faqs = [
  {
    q: 'What counts as a qualifying snowfall?',
    a: 'Any accumulation of 10 cm or more, measured at Toronto Pearson / City Centre. Below that, contract clients still receive salting on request.',
  },
  {
    q: 'How soon after a snowfall do you arrive?',
    a: 'Contract clients are cleared within 2 hours of snowfall ending. Per-visit bookings are scheduled by phone.',
  },
  {
    q: 'How does photo proof work?',
    a: 'Your crew photographs the finished walkway and sidewalk. The timestamped photo is sent by text or email before they leave.',
  },
  {
    q: 'Do you clear driveways and the city sidewalk?',
    a: 'Yes if its in your quote. We clear your driveway, walkway, front steps and the full sidewalk frontage of your property.',
  },
  {
    q: 'What if something is missed?',
    a: 'Send us a photo or call. We return to fix it at no charge.',
  },
  {
    q: 'How do I pay?',
    a: 'Cash, e-transfer for per-visit bookings. Seasonal contracts.',
  },
]
