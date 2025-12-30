import { useRef, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
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

  // Simple parallax
  const y = useTransform(scrollYProgress, [0, 1], [0, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1, 0.5])

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const reveals = gsap.utils.toArray('.gsap-reveal')
    reveals.forEach((el) => {
      gsap.fromTo(el,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
          }
        }
      )
    })
  }, [])

  return (
    <main>
      <Hero setCursorVariant={setCursorVariant} />

      <section className="bikes-showcase gsap-reveal">
        <div className="container">
          <h2 className="section-title">Motorcycles</h2>
          <div className="bikes-grid" style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {bikes.map((bike, index) => (
              <FeatureBike key={bike.id} bike={bike} isReversed={index % 2 !== 0} setCursorVariant={setCursorVariant} />
            ))}
          </div>
        </div>
      </section>

      <section className="heritage-preview gsap-reveal" ref={heritageRef}>
        <div className="heritage-preview-bg"></div>
        <div className="heritage-preview-content">
          <h1 className="outline-text">HERITAGE</h1>
          <h2>Legacy for all</h2>
          <p>Over a century of pure motorcycling. Discover our journey from Redditch to the world.</p>
          <button onClick={() => window.location.href = '/heritage'} className="btn-primary">Explore Our Story</button>
        </div>
      </section>

      <section className="customize-preview gsap-reveal">
        <div className="container">
          <div className="customize-preview-content">
            <div className="customize-preview-text">
              <h1 className="outline-text">CUSTOM</h1>
              <h2>Make it Yours</h2>
              <p>Personalize your Royal Enfield with our range of genuine motorcycle accessories.</p>
              <button onClick={() => window.location.href = '/customize'} className="btn-primary">Start Building</button>
            </div>
            <div className="customize-preview-image">
              <img src="https://images.pexels.com/photos/10323330/pexels-photo-10323330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Custom Bike" />
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}

export default Home;