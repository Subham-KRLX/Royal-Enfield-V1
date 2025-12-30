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
      backgroundColor: 'transparent',
      border: '2px solid var(--primary-color)',
      mixBlendMode: 'normal'
    },
    hover: {
      x: mousePosition.x - 30,
      y: mousePosition.y - 30,
      height: 60,
      width: 60,
      backgroundColor: 'var(--primary-color)',
      opacity: 0.3,
      mixBlendMode: 'difference'
    },
    button: {
      x: mousePosition.x - 40,
      y: mousePosition.y - 40,
      height: 80,
      width: 80,
      backgroundColor: 'var(--text-main)',
      opacity: 0.15,
      mixBlendMode: 'difference'
    },
    logo: {
      x: mousePosition.x - 50,
      y: mousePosition.y - 50,
      height: 100,
      width: 100,
      backgroundColor: 'rgba(212, 175, 55, 0.3)',
      mixBlendMode: 'normal'
    }
  }

  // Only show custom cursor on desktop
  const isMobile = typeof window !== 'undefined' ? window.innerWidth <= 768 : false;
  if (isMobile) return null

  return (
    <motion.div
      className="cursor"
      variants={variants}
      animate={cursorVariant}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 28,
        mass: 0.5
      }}
    />
  )
}

export default Cursor