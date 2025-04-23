import { useRef, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Hero from '../components/Hero'
import FeatureBike from '../components/FeatureBike'
import bikes from '../data/bikes'
import '../styles/Home.css'

const Home = ({ setCursorVariant }) => {
  const heritageRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heritageRef,
    offset: ["start end", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], [0, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [0, 1, 1, 0])
  
  return (
    <main>
      <Hero setCursorVariant={setCursorVariant} />
      
      <section className="bikes-showcase">
        <div className="container">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            Our Legends
          </motion.h2>
        </div>
        
        {bikes.map((bike, index) => (
          <FeatureBike 
            key={bike.id}
            bike={bike}
            isReversed={index % 2 !== 0}
            setCursorVariant={setCursorVariant}
          />
        ))}
      </section>
      
      <section ref={heritageRef} className="heritage-preview">
        <motion.div 
          className="heritage-preview-bg"
          style={{
            y,
            opacity,
            backgroundImage: "url('https://cars.bonhams.com/_next/image.jpg?url=https%3A%2F%2Fimg1.bonhams.com%2Fimage%3Fsrc%3DImages%2Flive%2F2010-07%2F23%2F8119903-7-8.JPG&w=2400&q=75')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
          }}
        ></motion.div>
        <div className="container">
          <div className="heritage-preview-content">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8 }}
            >
              A Legacy Since 1901
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              From our humble beginnings in Redditch, England to becoming a global icon of motorcycling heritage, Royal Enfield has stood the test of time through world wars, economic upheavals, and changing technologies.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.button 
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.href = '/heritage'}
                onMouseEnter={() => setCursorVariant('button')}
                onMouseLeave={() => setCursorVariant('default')}
              >
                Explore Our Heritage
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>
      
      <section className="customize-preview">
        <div className="container">
          <div className="customize-preview-content">
            <div className="customize-preview-text">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8 }}
              >
                Build Your Own Legend
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Create a motorcycle that's uniquely yours. Choose from our range of models, colors, and accessories to build the perfect Royal Enfield for your journey.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <motion.button 
                  className="btn btn-primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.location.href = '/customize'}
                  onMouseEnter={() => setCursorVariant('button')}
                  onMouseLeave={() => setCursorVariant('default')}
                >
                  Start Customizing
                </motion.button>
              </motion.div>
            </div>
            
            <motion.div 
              className="customize-preview-image"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8 }}
            >
              <img 
                src="https://wallpapercave.com/wp/wp4221405.jpg" 
                alt="Customize your Royal Enfield" 
              />
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home