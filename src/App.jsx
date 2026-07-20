import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import AllProjects from './pages/AllProjects'
import Footer from './components/Footer'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div style={{ backgroundColor: '#E8F4F4', minHeight: '100vh', width: '100%' }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<AllProjects />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}