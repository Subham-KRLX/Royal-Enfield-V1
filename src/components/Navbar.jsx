import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import '../styles/Navbar.css'

const Navbar = ({ setCursorVariant }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      if (offset > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  
  const navLinks = [
    { title: 'Home', path: '/' },
    { title: 'Motorcycles', path: '/bike/classic' },
    { title: 'Heritage', path: '/heritage' },
    { title: 'Customize', path: '/customize' }
  ]
  
  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  }
  
  const linkVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 }
  }
  
  const mobileMenuVariants = {
    closed: { 
      opacity: 0,
      x: '100%',
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
    },
    open: { 
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
    }
  }
  
  return (
    <motion.nav 
      className={`navbar ${scrolled ? 'scrolled' : ''}`} 
      initial="hidden"
      animate="visible"
      variants={navVariants}
    >
      <div className="navbar-container">
        <Link 
          to="/" 
          className="navbar-logo"
          onMouseEnter={() => setCursorVariant('logo')}
          onMouseLeave={() => setCursorVariant('default')}
        >
          Royal Enfield
        </Link>
        
        <div className="navbar-links-desktop">
          {navLinks.map((link, index) => (
            <motion.div key={index} variants={linkVariants}>
              <Link 
                to={link.path} 
                className="navbar-link"
                onMouseEnter={() => setCursorVariant('hover')}
                onMouseLeave={() => setCursorVariant('default')}
              >
                {link.title}
              </Link>
            </motion.div>
          ))}
        </div>
        
        <button 
          className={`navbar-mobile-toggle ${isOpen ? 'open' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          onMouseEnter={() => setCursorVariant('button')}
          onMouseLeave={() => setCursorVariant('default')}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        
        <motion.div 
          className="navbar-mobile-menu"
          variants={mobileMenuVariants}
          initial="closed"
          animate={isOpen ? "open" : "closed"}
        >
          {navLinks.map((link, index) => (
            <Link 
              key={index}
              to={link.path} 
              className="navbar-mobile-link"
              onClick={() => setIsOpen(false)}
            >
              {link.title}
            </Link>
          ))}
        </motion.div>
      </div>
    </motion.nav>
  )
}

export default Navbar