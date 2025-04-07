import { useState, useEffect } from 'react';
import './ImageCarousel.css';

const ImageCarousel = () => {
  const images = [
    {
      url: '/tech1.jpg',
      title: 'Innovate. Learn. Transform.',
      subtitle: 'Empowering businesses through modern technology solutions'
    },
    {
      url: '/tech2.jpg',
      title: 'Expert-Led Learning',
      subtitle: 'Comprehensive technology education for modern professionals'
    },
    {
      url: '/tech3.jpg',
      title: 'Cloud Solutions',
      subtitle: 'Scalable and secure infrastructure for your business'
    },
    {
      url: '/hero-images/tech4.jpg',
      title: 'Digital Innovation',
      subtitle: 'Transforming ideas into powerful solutions'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="carousel">
      {images.map((image, index) => (
        <div
          key={index}
          className={`carousel-slide ${index === currentIndex ? 'active' : ''}`}
          style={{ backgroundImage: `url(${image.url})` }}
        >
          <div className="carousel-content">
            <h1>{image.title}</h1>
            <p>{image.subtitle}</p>
            <div className="cta-buttons">
              <button className="cta-primary">Explore Solutions</button>
              <button className="cta-secondary">Start Learning</button>
            </div>
          </div>
        </div>
      ))}
      <div className="carousel-indicators">
        {images.map((_, index) => (
          <span
            key={index}
            className={`indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel; 