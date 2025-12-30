import { motion } from 'framer-motion';
import '../styles/Dealers.css';

const Dealers = ({ setCursorVariant }) => {
    const dealers = [
        {
            name: "RE Flagship Store",
            address: "Connaught Place, New Delhi",
            type: "Showroom & Service",
            phone: "+91 11 2345 6789",
            image: "https://images.pexels.com/photos/10323330/pexels-photo-10323330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        },
        {
            name: "Mountain Wheels",
            address: "Manali High Road, Himachal",
            type: "Service Hub",
            phone: "+91 98765 43210",
            image: "https://images.pexels.com/photos/17266142/pexels-photo-17266142.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        },
        {
            name: "Oceanic Rides",
            address: "Indiranagar, Bangalore",
            type: "Showroom",
            phone: "+91 80 4123 4567",
            image: "https://images.pexels.com/photos/13355447/pexels-photo-13355447.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        }
    ];

    return (
        <motion.div
            className="dealers-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <section className="dealers-hero">
                <h1 className="outline-text">DEALERS</h1>
                <p>Find a Royal Enfield Home Near You.</p>
            </section>

            <div className="dealers-list">
                <div className="search-box glass-effect">
                    <input type="text" placeholder="Enter City or Pincode..." />
                    <button className="btn-primary">Search</button>
                </div>

                <div className="dealer-cards">
                    {dealers.map((dealer, index) => (
                        <div
                            key={index}
                            className="dealer-card gsap-reveal"
                            onMouseEnter={() => setCursorVariant('hover')}
                            onMouseLeave={() => setCursorVariant('default')}
                        >
                            <div className="dealer-img-container">
                                <img src={dealer.image} alt={dealer.name} />
                                <div className="dealer-type-badge">{dealer.type}</div>
                            </div>
                            <div className="dealer-info">
                                <h3>{dealer.name}</h3>
                                <p className="address">{dealer.address}</p>
                                <p className="phone">{dealer.phone}</p>
                                <div className="dealer-actions">
                                    <button className="secondary-btn">Locate</button>
                                    <button className="btn-primary">Book Service</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default Dealers;
