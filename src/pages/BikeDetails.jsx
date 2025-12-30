import { useState, useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import bikes from '../data/bikes'
import '../styles/BikeDetails.css'

const BikeDetails = ({ setCursorVariant }) => {
  const { id } = useParams()
  const [selectedBike, setSelectedBike] = useState(null)
  const [selectedColor, setSelectedColor] = useState(0)
  const [currentImage, setCurrentImage] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  const imageRef = useRef(null)

  useEffect(() => {
    // Find the bike that matches the id
    const bike = bikes.find(bike => bike.id === id)
    setSelectedBike(bike)

    // Reset states
    setSelectedColor(0)
    setCurrentImage(0)

    // Simulate loading delay
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 800)

    return () => clearTimeout(timer)
  }, [id])

  const handleColorChange = (index) => {
    setSelectedColor(index)
  }

  const handleImageChange = (index) => {
    setCurrentImage(index)
  }

  const handleMouseMove = (e) => {
    if (!imageRef.current) return

    const { left, top, width, height } = imageRef.current.getBoundingClientRect()
    const x = (e.clientX - left) / width
    const y = (e.clientY - top) / height

    imageRef.current.style.transformOrigin = `${x * 100}% ${y * 100}%`
  }

  if (isLoading || !selectedBike) {
    return (
      <div className="bike-details-loading">
        <div className="loading-spinner"></div>
      </div>
    )
  }

  return (
    <main className="bike-details">
      <div className="bike-hero">
        <motion.div
          className="bike-hero-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1>{selectedBike.name}</h1>
          <p className="bike-tagline">{selectedBike.tagline}</p>
          <p className="bike-price">Starting at {selectedBike.price}</p>
        </motion.div>
      </div>

      <section className="bike-gallery">
        <div className="container">
          <div className="bike-gallery-content">
            <div className="bike-gallery-main">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${currentImage}-${selectedColor}`}
                  className="bike-gallery-main-image"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  ref={imageRef}
                  onMouseMove={handleMouseMove}
                  onMouseEnter={() => {
                    imageRef.current.classList.add('zoomed')
                    setCursorVariant('hover')
                  }}
                  onMouseLeave={() => {
                    imageRef.current.classList.remove('zoomed')
                    setCursorVariant('default')
                  }}
                >
                  {currentImage === 0 ? (
                    <img src={selectedBike.images.main} alt={selectedBike.name} />
                  ) : (
                    <img src={selectedBike.images.gallery[currentImage - 1]} alt={selectedBike.name} />
                  )}
                </motion.div>
              </AnimatePresence>

              <div className="bike-gallery-thumbnails">
                <button
                  className={`thumbnail ${currentImage === 0 ? 'active' : ''}`}
                  onClick={() => handleImageChange(0)}
                  onMouseEnter={() => setCursorVariant('button')}
                  onMouseLeave={() => setCursorVariant('default')}
                >
                  <img src={selectedBike.images.main} alt={`${selectedBike.name} main`} />
                </button>

                {selectedBike.images.gallery.map((image, index) => (
                  <button
                    key={index}
                    className={`thumbnail ${currentImage === index + 1 ? 'active' : ''}`}
                    onClick={() => handleImageChange(index + 1)}
                    onMouseEnter={() => setCursorVariant('button')}
                    onMouseLeave={() => setCursorVariant('default')}
                  >
                    <img src={image} alt={`${selectedBike.name} gallery ${index + 1}`} />
                  </button>
                ))}
              </div>
            </div>

            <div className="bike-gallery-info">
              <div className="bike-description">
                <h2>Overview</h2>
                <p>{selectedBike.description}</p>
              </div>

              <div className="bike-colors">
                <h3>Available Colors</h3>
                <div className="color-options">
                  {selectedBike.colors.map((color, index) => (
                    <button
                      key={index}
                      className={`color-option ${selectedColor === index ? 'active' : ''}`}
                      style={{ backgroundColor: color.code }}
                      onClick={() => handleColorChange(index)}
                      title={color.name}
                      onMouseEnter={() => setCursorVariant('button')}
                      onMouseLeave={() => setCursorVariant('default')}
                    />
                  ))}
                </div>
                <p className="selected-color-name">{selectedBike.colors[selectedColor].name}</p>
              </div>

              <div className="bike-specs">
                <h3>Specifications</h3>
                <ul>
                  {Object.entries(selectedBike.specs).map(([key, value], index) => (
                    <li key={index}>
                      <span className="spec-name">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                      <span className="spec-value">{value}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bike-features">
                <h3>Key Features</h3>
                <ul>
                  {selectedBike.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="bike-cta">
                <motion.button
                  className="btn btn-primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onMouseEnter={() => setCursorVariant('button')}
                  onMouseLeave={() => setCursorVariant('default')}
                >
                  Book a Test Ride
                </motion.button>

                <motion.button
                  className="btn btn-outline"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onMouseEnter={() => setCursorVariant('button')}
                  onMouseLeave={() => setCursorVariant('default')}
                >
                  Build Your Own
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default BikeDetails