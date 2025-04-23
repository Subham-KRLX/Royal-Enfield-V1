import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import '../styles/Hero.css'

const Hero = ({ setCursorVariant }) => {
  const heroRef = useRef(null)
  const headingRef = useRef(null)
  const layerRef = useRef(null)
  const videoRef = useRef(null)

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!layerRef.current) return
      
      const { clientX, clientY } = e
      const x = (clientX - window.innerWidth / 2) * 0.01
      const y = (clientY - window.innerHeight / 2) * 0.01
      
      gsap.to(layerRef.current, {
        x: x * 20,
        y: y * 10,
        duration: 1,
        ease: 'power2.out'
      })
    }
    
    window.addEventListener('mousemove', handleMouseMove)

    const unmuteVideo = () => {
      if (videoRef.current) {
        videoRef.current.muted = false
        videoRef.current.volume = 1
      }
      window.removeEventListener('click', unmuteVideo)
    }
    window.addEventListener('click', unmuteVideo)
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('click', unmuteVideo)
    }
  }, [])
  
  const buttonVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, 0.05, -0.01, 0.9]
      }
    },
    hover: {
      scale: 1.05,
      backgroundColor: "var(--color-primary-dark)",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  }
  
  return (
    <section className="hero" ref={heroRef}>
      {/* Background Video */}
      <video 
        ref={videoRef}
        className="hero-background-video" 
        autoPlay 
        loop 
        muted 
        playsInline
      >
        <source src="/RE(Edited).mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="hero-content">
        <motion.div 
          className="hero-text"
          initial={{ opacity: 0, y: 50 }}
          animate={{ 
            opacity: 1, 
            y: 0,
            transition: {
              duration: 1,
              delay: 0.5,
              ease: [0.6, 0.05, -0.01, 0.9]
            }
          }}
        >
          <motion.h1 
            ref={headingRef}
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              transition: {
                duration: 0.8,
                delay: 0.7,
                ease: [0.6, 0.05, -0.01, 0.9]
              }
            }}
          >
            Timeless engineering. Contemporary innovation.
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              transition: {
                duration: 0.8,
                delay: 0.9,
                ease: [0.6, 0.05, -0.01, 0.9]
              }
            }}
          >
            A legacy of craftsmanship since 1901.
          </motion.p>
          
          <div className="hero-buttons">
            <motion.div 
              variants={buttonVariants}
              initial="initial"
              animate="animate"
              whileHover="hover"
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                to="/bike/classic" 
                className="btn btn-primary"
                onMouseEnter={() => setCursorVariant('button')}
                onMouseLeave={() => setCursorVariant('default')}
              >
                Explore Bikes
              </Link>
            </motion.div>
            
            <motion.div 
              variants={buttonVariants}
              initial="initial"
              animate="animate"
              whileHover="hover"
              whileTap={{ scale: 0.95 }}
              transition={{ delay: 0.1 }}
            >
              <Link 
                to="/customize" 
                className="btn btn-outline"
                onMouseEnter={() => setCursorVariant('button')}
                onMouseLeave={() => setCursorVariant('default')}
              >
                Build Yours
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      <div className="hero-image-container">
        <div className="hero-image" ref={layerRef}></div>
        <div className="hero-overlay"></div>
      </div>
      
      <div className="hero-scroll">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ 
            opacity: 1, 
            y: 0,
            transition: {
              duration: 0.8,
              delay: 1.5,
              ease: "easeOut"
            }
          }}
        >
          <span className="scroll-text">Scroll</span>
          <span className="scroll-icon"></span>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero