import ImageCarousel from '../components/ImageCarousel';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <ImageCarousel />
      
      <section className="services">
        <h2>Our Services</h2>
        <div className="service-cards">
          <div className="service-card turquoise">
            <div className="icon">
              <img src="/icons/software-dev.svg" alt="Software Development" />
            </div>
            <h3>Software Development</h3>
            <p>Custom solutions tailored to your business needs</p>
          </div>
          <div className="service-card orange">
            <div className="icon">
              <img src="/icons/education.svg" alt="Tech Education" />
            </div>
            <h3>Tech Education</h3>
            <p>Comprehensive learning paths for modern technologies</p>
          </div>
          <div className="service-card blue">
            <div className="icon">
              <img src="/icons/consulting.svg" alt="Innovation Consulting" />
            </div>
            <h3>Innovation Consulting</h3>
            <p>Strategic guidance for digital transformation</p>
          </div>
          <div className="service-card green">
            <div className="icon">
              <img src="/icons/cloud.svg" alt="Cloud Solutions" />
            </div>
            <h3>Cloud Solutions</h3>
            <p>Scalable and secure cloud infrastructure</p>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="feature-grid">
          <div className="feature turquoise">
            <h3>Modern Technology</h3>
            <p>Cutting-edge solutions for modern businesses</p>
          </div>
          <div className="feature orange">
            <h3>Expert Training</h3>
            <p>Learn from industry professionals</p>
          </div>
          <div className="feature blue">
            <h3>24/7 Support</h3>
            <p>Round-the-clock technical assistance</p>
          </div>
          <div className="feature green">
            <h3>Global Reach</h3>
            <p>Serving clients worldwide</p>
          </div>
        </div>
      </section>

      <section className="tech-stack">
        <h2>Technologies We Work With</h2>
        <div className="tech-grid">
          <img src="/icons/react.svg" alt="React" />
          <img src="/icons/node.svg" alt="Node.js" />
          <img src="/icons/python.svg" alt="Python" />
          <img src="/icons/aws.svg" alt="AWS" />
          <img src="/icons/azure.svg" alt="Azure" />
          <img src="/icons/docker.svg" alt="Docker" />
        </div>
      </section>
    </div>
  );
}

export default Home; 