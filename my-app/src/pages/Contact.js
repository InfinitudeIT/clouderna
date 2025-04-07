import { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    interest: 'demo',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="contact">
      <section className="contact-hero">
        <div className="hero-content">
          <h1>Get In Touch</h1>
          <p className="subtitle">Let's discuss how we can help transform your business</p>
        </div>
      </section>

      <section className="contact-options">
        <div className="contact-info">
          <div className="info-card turquoise">
            <div className="icon">
              <img src="/icons/location.svg" alt="Location" />
            </div>
            <h3>Visit Us</h3>
            <p>123 Tech Street</p>
            <p>Innovation City, 12345</p>
          </div>
          <div className="info-card orange">
            <div className="icon">
              <img src="/icons/phone.svg" alt="Phone" />
            </div>
            <h3>Call Us</h3>
            <p>+1 (234) 567-8900</p>
            <p>Mon - Fri, 9am - 6pm</p>
          </div>
          <div className="info-card blue">
            <div className="icon">
              <img src="/icons/email.svg" alt="Email" />
            </div>
            <h3>Email Us</h3>
            <p>info@clouderna.com</p>
            <p>support@clouderna.com</p>
          </div>
        </div>

        <div className="contact-form-container">
          <div className="form-header">
            <h2>Send Us a Message</h2>
            <p>We'll get back to you within 24 hours</p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="company">Company</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-button">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Contact; 