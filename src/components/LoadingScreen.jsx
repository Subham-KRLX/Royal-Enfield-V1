import { motion } from 'framer-motion'
import '../styles/LoadingScreen.css'

const LoadingScreen = () => {
  return (
    <motion.div 
      className="loading-screen"
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        transition: { 
          duration: 1,
          delay: 0.5
        }
      }}
    >
      <motion.div 
        className="loading-content"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ 
          opacity: 1, 
          scale: 1,
          transition: { 
            duration: 0.5 
          }
        }}
      >
        <div className="loading-logo">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              transition: { 
                delay: 0.2,
                duration: 0.8,
                ease: [0.6, 0.05, -0.01, 0.9]
              }
            }}
          >
            Royal Enfield
          </motion.h1>
        </div>
        
        <div className="loading-bar-container">
          <motion.div 
            className="loading-bar"
            initial={{ width: 0 }}
            animate={{ 
              width: "100%",
              transition: { 
                duration: 1.5,
                ease: [0.22, 1, 0.36, 1]
              }
            }}
          />
        </div>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: 1,
            transition: { 
              delay: 0.5,
              duration: 0.8,
              ease: [0.6, 0.05, -0.01, 0.9]
            }
          }}
        >
          Reimagined
        </motion.p>
      </motion.div>
    </motion.div>
  )
}

export default LoadingScreen