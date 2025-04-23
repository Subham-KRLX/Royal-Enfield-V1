import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import '../styles/Footer.css'

const Footer = ({ setCursorVariant }) => {
  const currentYear = new Date().getFullYear()
  
  const socialLinks = [
    { name: 'Instagram', url: '#' },
    { name: 'Facebook', url: '#' },
    { name: 'Twitter', url: '#' },
    { name: 'YouTube', url: '#' }
  ]
  
  const footerLinks = [
    { title: 'Motorcycles', links: ['Classic', 'Interceptor', 'Continental GT', 'Meteor', 'Himalayan'] },
    { title: 'Support', links: ['Contact Us', 'Service', 'Owners Manual', 'Warranty'] },
    { title: 'About', links: ['Our Story', 'News', 'Careers', 'Press'] }
  ]
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <h3 
              className="footer-logo"
              onMouseEnter={() => setCursorVariant('logo')}
              onMouseLeave={() => setCursorVariant('default')}
            >
              Royal Enfield
            </h3>
            <p>Crafting journeys since 1901</p>
            
            <form className="newsletter-form">
              <p>Subscribe to our newsletter</p>
              <div className="form-group">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  onMouseEnter={() => setCursorVariant('hover')}
                  onMouseLeave={() => setCursorVariant('default')}
                />
                <button 
                  type="submit"
                  onMouseEnter={() => setCursorVariant('button')}
                  onMouseLeave={() => setCursorVariant('default')}
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
          
          <div className="footer-links">
            {footerLinks.map((group, index) => (
              <div key={index} className="footer-links-group">
                <h4>{group.title}</h4>
                <ul>
                  {group.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link 
                        to="#"
                        onMouseEnter={() => setCursorVariant('hover')}
                        onMouseLeave={() => setCursorVariant('default')}
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-social">
            {socialLinks.map((social, index) => (
              <a 
                key={index} 
                href={social.url} 
                target="_blank" 
                rel="noopener noreferrer"
                onMouseEnter={() => setCursorVariant('hover')}
                onMouseLeave={() => setCursorVariant('default')}
              >
                {social.name}
              </a>
            ))}
          </div>
          
          <div className="footer-copyright">
            <p>&copy; {currentYear} Royal Enfield. All rights reserved.</p>
            <div className="footer-legal">
              <a 
                href="#"
                onMouseEnter={() => setCursorVariant('hover')}
                onMouseLeave={() => setCursorVariant('default')}
              >
                Privacy Policy
              </a>
              <a 
                href="#"
                onMouseEnter={() => setCursorVariant('hover')}
                onMouseLeave={() => setCursorVariant('default')}
              >
                Terms of Use
              </a>
              <a 
                href="#"
                onMouseEnter={() => setCursorVariant('hover')}
                onMouseLeave={() => setCursorVariant('default')}
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer