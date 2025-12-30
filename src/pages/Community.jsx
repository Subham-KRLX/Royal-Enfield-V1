import { motion } from 'framer-motion';
import '../styles/Community.css';

const Community = ({ setCursorVariant }) => {
    const stories = [
        {
            id: 1,
            title: "Across the Himalayas",
            author: "Rahul Singh",
            image: "https://images.pexels.com/photos/17266142/pexels-photo-17266142.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            excerpt: "A 15-day solo journey through the highest motorable passes in the world."
        },
        {
            id: 2,
            title: "Coastal Wanderlust",
            author: "Priya Sharma",
            image: "https://images.pexels.com/photos/10323330/pexels-photo-10323330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            excerpt: "Exploring the hidden beaches of Goa and Karwar on my Interceptor."
        },
        {
            id: 3,
            title: "The Weekend Escape",
            author: "Arjun Mehra",
            image: "https://images.pexels.com/photos/13355447/pexels-photo-13355447.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            excerpt: "How a quick ride to the hills changed my perspective on Mondays."
        }
    ];

    return (
        <motion.div
            className="community-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <section className="community-hero">
                <h1 className="outline-text">COMMUNITY</h1>
                <p>Your Stories, Our Inspiration.</p>
            </section>

            <div className="stories-grid">
                {stories.map(story => (
                    <div
                        key={story.id}
                        className="story-card gsap-reveal"
                        onMouseEnter={() => setCursorVariant('hover')}
                        onMouseLeave={() => setCursorVariant('default')}
                    >
                        <div className="story-image">
                            <img src={story.image} alt={story.title} />
                        </div>
                        <div className="story-info">
                            <h3>{story.title}</h3>
                            <p className="author">By {story.author}</p>
                            <p className="excerpt">{story.excerpt}</p>
                            <button className="read-more btn-primary">Read Story</button>
                        </div>
                    </div>
                ))}
            </div>
        </motion.div>
    );
};

export default Community;
