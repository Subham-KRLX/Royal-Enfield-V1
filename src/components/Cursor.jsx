import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import '../styles/Cursor.css'

const Cursor = ({ cursorVariant }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  
  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })
    }
    
    window.addEventListener('mousemove', mouseMove)
    
    // Add class to body for hiding default cursor
    document.body.classList.add('using-custom-cursor')
    
    return () => {
      window.removeEventListener('mousemove', mouseMove)
      document.body.classList.remove('using-custom-cursor')
    }
  }, [])
  
  const variants = {
    default: {
      x: mousePosition.x - 12,
      y: mousePosition.y - 12,
      height: 24,
      width: 24,
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      border: '1px solid white',
      mixBlendMode: 'difference'
    },
    hover: {
      x: mousePosition.x - 20,
      y: mousePosition.y - 20,
      height: 40,
      width: 40,
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      mixBlendMode: 'difference'
    },
    button: {
      x: mousePosition.x - 30,
      y: mousePosition.y - 30,
      height: 60,
      width: 60,
      backgroundColor: 'rgba(255, 255, 255, 0.3)',
      mixBlendMode: 'difference'
    },
    logo: {
      x: mousePosition.x - 40,
      y: mousePosition.y - 40,
      height: 80,
      width: 80,
      backgroundColor: 'rgba(212, 175, 55, 0.2)',
      mixBlendMode: 'normal'
    }
  }
  
  // Only show custom cursor on desktop
  if (window.innerWidth <= 768) return null
  
  return (
    <motion.div
      className="cursor"
      variants={variants}
      animate={cursorVariant}
      transition={{
        type: "spring",
        mass: 0.2,
        stiffness: 350,
        damping: 20,
        duration: 0.1
      }}
    />
  )
}

export default Cursor