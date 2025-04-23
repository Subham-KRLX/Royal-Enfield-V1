import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import heritageTimeline from '../data/heritage'
import '../styles/Heritage.css'

const Heritage = ({ setCursorVariant }) => {
  const containerRef = useRef(null)
  
  return (
    <main className="heritage">
      <div className="heritage-hero">
        <div className="heritage-hero-content">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Heritage
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Royal Enfield stands as the oldest motorcycle brand in continuous production. Our journey began in 1901, and we continue to craft machines that honor this rich heritage while embracing modern innovation.
          </motion.p>
        </div>
      </div>
      
      <section className="timeline" ref={containerRef}>
        <div className="container">
          <div className="timeline-line"></div>
          
          {heritageTimeline.map((item, index) => (
            <TimelineItem 
              key={index} 
              item={item} 
              index={index} 
              containerRef={containerRef}
              setCursorVariant={setCursorVariant}
            />
          ))}
        </div>
      </section>
      
      <section className="heritage-quote">
        <div className="container">
          <div className="quote-content">
            <motion.blockquote
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8 }}
            >
              <p>"Royal Enfield has remained true to its heritage while continually evolving. That's the secret of our longevity."</p>
              <cite>- Siddhartha Lal, CEO</cite>
            </motion.blockquote>
          </div>
        </div>
      </section>
    </main>
  )
}

const TimelineItem = ({ item, index, containerRef, setCursorVariant }) => {
  const itemRef = useRef(null)
  
  const { scrollYProgress } = useScroll({
    target: itemRef,
    container: containerRef,
    offset: ["start end", "center center"]
  })
  
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1])
  const x = useTransform(
    scrollYProgress, 
    [0, 0.5], 
    [index % 2 === 0 ? -50 : 50, 0]
  )
  
  return (
    <motion.div 
      ref={itemRef}
      className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
      style={{ opacity, x }}
    >
      <div 
        className="timeline-content"
        onMouseEnter={() => setCursorVariant('hover')}
        onMouseLeave={() => setCursorVariant('default')}
      >
        <div className="timeline-year">{item.year}</div>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <div className="timeline-image">
          <img src={item.image} alt={item.title} />
        </div>
        <div className="timeline-dot"></div>
      </div>
    </motion.div>
  )
}

export default Heritage