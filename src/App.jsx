import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CallBar from './components/CallBar'
import Home from './pages/Home'
import Services from './pages/Services'
import Plans from './pages/Plans'
import Areas from './pages/Areas'
import About from './pages/About'
import Faq from './pages/Faq'
import Contact from './pages/Contact'
import Quote from './pages/Quote'

function App() {
  const location = useLocation()

  // scroll to top when the page changes
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/plans" element={<Plans />} />
          <Route path="/areas" element={<Areas />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/quote" element={<Quote />} />
        </Routes>
      </main>
      <Footer />
      <CallBar />
    </>
  )
}

export default App
