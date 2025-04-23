import { useEffect } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import '../styles/SmoothScroll.css'

const SmoothScroll = ({ children }) => {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  useEffect(() => {
    // Ensure body can scroll
    document.body.style.overflow = 'auto'
    document.body.style.height = 'auto'
  }, [])

  return (
    <>
      <div className="smooth-scroll-container">
        {children}
      </div>
      <motion.div
        className="progress-bar"
        style={{ scaleX }}
      />
    </>
  )
}

export default SmoothScroll