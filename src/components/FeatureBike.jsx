import { useState, useRef, useEffect } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import '../styles/FeatureBike.css'

const FeatureBike = ({ bike, isReversed, setCursorVariant }) => {
  const [isHovered, setIsHovered] = useState(false)
  const featureRef = useRef(null)
  const isInView = useInView(featureRef, { once: true, amount: 0.3 })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
  }, [isInView, controls])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        when: 'beforeChildren',
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      transition: { duration: 0.5, ease: [0.6, 0.05, -0.01, 0.9] }
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.6, 0.05, -0.01, 0.9] }
    }
  }

  const imageVariants = {
    hidden: {
      opacity: 0,
      x: isReversed ? 50 : -50,
      transition: { duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] }
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] }
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.4, ease: [0.6, 0.05, -0.01, 0.9] }
    }
  }

  return (
    <motion.section
      ref={featureRef}
      className={`feature-bike ${isReversed ? 'reversed' : ''}`}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
    >
      <div className="container">
        <div className="feature-bike-content">
          <motion.div
            className="feature-bike-text"
            variants={containerVariants}
          >
            <motion.h2 variants={itemVariants}>{bike.name}</motion.h2>
            <motion.h3 variants={itemVariants} className="feature-bike-tagline">{bike.tagline}</motion.h3>
            <motion.p variants={itemVariants}>{bike.description}</motion.p>

            <motion.ul variants={containerVariants} className="feature-bike-specs">
              {Object.entries(bike.specs).slice(0, 3).map(([key, value], index) => (
                <motion.li key={index} variants={itemVariants}>
                  <span className="spec-label">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                  <span className="spec-value">{value}</span>
                </motion.li>
              ))}
            </motion.ul>

            <motion.div variants={itemVariants} className="bike-colors-preview">
              {bike.colors.map((color, index) => (
                <div
                  key={index}
                  className="color-swatch-circle"
                  style={{ backgroundColor: color.code }}
                  title={color.name}
                />
              ))}
            </motion.div>

            <motion.div variants={itemVariants} className="feature-bike-cta">
              <Link
                to={`/bike/${bike.id}`}
                className="btn btn-primary"
                onMouseEnter={() => setCursorVariant('button')}
                onMouseLeave={() => setCursorVariant('default')}
              >
                Discover {bike.name}
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className="feature-bike-image-container"
            variants={imageVariants}
            whileHover="hover"
            onMouseEnter={() => {
              setIsHovered(true)
              setCursorVariant('hover')
            }}
            onMouseLeave={() => {
              setIsHovered(false)
              setCursorVariant('default')
            }}
          >
            <Link to={`/bike/${bike.id}`}>
              <img
                src={bike.images.main}
                alt={bike.name}
                className="feature-bike-image"
              />
              <motion.div
                className="feature-bike-image-overlay"
                animate={{ opacity: isHovered ? 0.3 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <span>View Details</span>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default FeatureBike