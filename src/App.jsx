import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import BikeDetails from './pages/BikeDetails'
import Heritage from './pages/Heritage'
import Customize from './pages/Customize'
import Cursor from './components/Cursor'
import SmoothScroll from './components/SmoothScroll'
import LoadingScreen from './components/LoadingScreen'
import './styles/App.css'

function App() {
  const [loading, setLoading] = useState(true)
  const [cursorVariant, setCursorVariant] = useState('default')

  // Simulate loading assets
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <Cursor cursorVariant={cursorVariant} />
      <AnimatePresence mode="wait">
        {loading ? (
          <LoadingScreen key="loading" />
        ) : (
          <SmoothScroll key="content">
            <Navbar setCursorVariant={setCursorVariant} />
            <Routes>
              <Route path="/" element={<Home setCursorVariant={setCursorVariant} />} />
              <Route path="/bike/:id" element={<BikeDetails setCursorVariant={setCursorVariant} />} />
              <Route path="/heritage" element={<Heritage setCursorVariant={setCursorVariant} />} />
              <Route path="/customize" element={<Customize setCursorVariant={setCursorVariant} />} />
            </Routes>
            <Footer setCursorVariant={setCursorVariant} />
          </SmoothScroll>
        )}
      </AnimatePresence>
    </>
  )
}

export default App