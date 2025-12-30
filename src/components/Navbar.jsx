import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { useTheme } from '../context/ThemeContext'
import CartDrawer from './CartDrawer'
import '../styles/Navbar.css'

const Navbar = ({ setCursorVariant }) => {
  const { cartCount } = useCart()
  const { isDarkMode, toggleTheme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)
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
    { title: 'Motorcycles', path: '/bike/classic-350' },
    { title: 'Community', path: '/community' },
    { title: 'Dealers', path: '/dealers' },
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
          <div
            className="theme-toggle"
            onClick={toggleTheme}
            onMouseEnter={() => setCursorVariant('hover')}
            onMouseLeave={() => setCursorVariant('default')}
          >
            {isDarkMode ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            )}
          </div>
          <div
            className="cart-icon-container"
            onClick={() => setIsCartOpen(true)}
            onMouseEnter={() => setCursorVariant('hover')}
            onMouseLeave={() => setCursorVariant('default')}
          >
            <span className="cart-count">{cartCount}</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
          </div>
        </div>

        <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />

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