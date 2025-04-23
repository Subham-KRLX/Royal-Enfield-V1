import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import bikes from '../data/bikes'
import '../styles/Customize.css'

const Customize = ({ setCursorVariant }) => {
  const [selectedBike, setSelectedBike] = useState(bikes[0])
  const [selectedColor, setSelectedColor] = useState(0)
  const [selectedAccessories, setSelectedAccessories] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)
  
  const bikeImageRef = useRef(null)
  
  const accessories = [
    { id: 1, name: 'Touring Seat', price: 199, description: 'Ergonomic seat for long journeys' },
    { id: 2, name: 'Saddlebags', price: 299, description: 'Genuine leather panniers' },
    { id: 3, name: 'Engine Guard', price: 149, description: 'Chrome-plated protection' },
    { id: 4, name: 'Touring Screen', price: 179, description: 'Tinted windshield for highway cruising' },
    { id: 5, name: 'LED Headlight', price: 249, description: 'Enhanced visibility for night riding' },
    { id: 6, name: 'Exhaust System', price: 599, description: 'Performance exhaust with deep rumble' }
  ]
  
  useEffect(() => {
    // Calculate base price from the selected bike's price (removing $ and commas)
    const basePrice = parseFloat(selectedBike.price.replace(/[$,]/g, ''))
    
    // Add the cost of selected accessories
    const accessoriesTotal = selectedAccessories.reduce((total, id) => {
      const accessory = accessories.find(acc => acc.id === id)
      return total + (accessory ? accessory.price : 0)
    }, 0)
    
    setTotalPrice(basePrice + accessoriesTotal)
  }, [selectedBike, selectedAccessories])
  
  const handleBikeChange = (bike) => {
    setSelectedBike(bike)
    setSelectedColor(0)
  }
  
  const handleColorChange = (index) => {
    setSelectedColor(index)
  }
  
  const handleAccessoryToggle = (id) => {
    if (selectedAccessories.includes(id)) {
      setSelectedAccessories(selectedAccessories.filter(accId => accId !== id))
    } else {
      setSelectedAccessories([...selectedAccessories, id])
    }
  }
  
  const handleMouseMove = (e) => {
    if (!bikeImageRef.current) return
    
    const { left, top, width, height } = bikeImageRef.current.getBoundingClientRect()
    const x = (e.clientX - left) / width - 0.5
    const y = (e.clientY - top) / height - 0.5
    
    bikeImageRef.current.style.transform = `
      perspective(1000px)
      rotateY(${x * 10}deg)
      rotateX(${-y * 10}deg)
      scale(1.05)
    `
  }
  
  const handleMouseLeave = () => {
    if (!bikeImageRef.current) return
    
    bikeImageRef.current.style.transform = `
      perspective(1000px)
      rotateY(0)
      rotateX(0)
      scale(1)
    `
  }
  
  return (
    <main className="customize">
      <div className="customize-hero">
        <div className="customize-hero-content">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Build Your Legend
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Customize your Royal Enfield to reflect your unique style and riding needs.
          </motion.p>
        </div>
      </div>
      
      <section className="customizer">
        <div className="container">
          <div className="customizer-content">
            <div className="customizer-visualization">
              <div 
                className="bike-display"
                ref={bikeImageRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                onMouseEnter={() => setCursorVariant('hover')}
                onMouseOut={() => setCursorVariant('default')}
              >
                <img src={selectedBike.images.main} alt={selectedBike.name} />
                <div 
                  className="color-overlay"
                  style={{ backgroundColor: selectedBike.colors[selectedColor].code, opacity: 0.2 }}
                ></div>
              </div>
              
              <div className="bike-info">
                <h2>{selectedBike.name}</h2>
                <p className="selected-color">{selectedBike.colors[selectedColor].name}</p>
                <div className="selected-accessories">
                  {selectedAccessories.length > 0 ? (
                    <>
                      <h4>Accessories:</h4>
                      <ul>
                        {selectedAccessories.map(id => {
                          const accessory = accessories.find(acc => acc.id === id)
                          return accessory ? <li key={id}>{accessory.name}</li> : null
                        })}
                      </ul>
                    </>
                  ) : (
                    <p>No accessories selected</p>
                  )}
                </div>
                
                <div className="total-price">
                  <h3>Total: ${totalPrice.toLocaleString()}</h3>
                </div>
                
                <motion.button 
                  className="btn btn-primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onMouseEnter={() => setCursorVariant('button')}
                  onMouseLeave={() => setCursorVariant('default')}
                >
                  Reserve Now
                </motion.button>
              </div>
            </div>
            
            <div className="customizer-options">
              <div className="option-section">
                <h3>Select Model</h3>
                <div className="model-options">
                  {bikes.map((bike, index) => (
                    <button 
                      key={index}
                      className={`model-option ${selectedBike.id === bike.id ? 'active' : ''}`}
                      onClick={() => handleBikeChange(bike)}
                      onMouseEnter={() => setCursorVariant('button')}
                      onMouseLeave={() => setCursorVariant('default')}
                    >
                      <img src={bike.images.main} alt={bike.name} />
                      <span>{bike.name}</span>
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="option-section">
                <h3>Choose Color</h3>
                <div className="color-options">
                  {selectedBike.colors.map((color, index) => (
                    <button 
                      key={index}
                      className={`color-option ${selectedColor === index ? 'active' : ''}`}
                      style={{ backgroundColor: color.code }}
                      onClick={() => handleColorChange(index)}
                      aria-label={color.name}
                      onMouseEnter={() => setCursorVariant('button')}
                      onMouseLeave={() => setCursorVariant('default')}
                    >
                      <span className="visually-hidden">{color.name}</span>
                    </button>
                  ))}
                </div>
                <p className="selected-color-name">{selectedBike.colors[selectedColor].name}</p>
              </div>
              
              <div className="option-section">
                <h3>Accessories</h3>
                <div className="accessory-options">
                  {accessories.map((accessory) => (
                    <div 
                      key={accessory.id}
                      className={`accessory-option ${selectedAccessories.includes(accessory.id) ? 'active' : ''}`}
                      onClick={() => handleAccessoryToggle(accessory.id)}
                      onMouseEnter={() => setCursorVariant('hover')}
                      onMouseLeave={() => setCursorVariant('default')}
                    >
                      <div className="accessory-checkbox">
                        <input 
                          type="checkbox" 
                          checked={selectedAccessories.includes(accessory.id)}
                          readOnly
                        />
                        <span className="checkmark"></span>
                      </div>
                      <div className="accessory-info">
                        <h4>{accessory.name}</h4>
                        <p>{accessory.description}</p>
                        <span className="accessory-price">${accessory.price}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Customize