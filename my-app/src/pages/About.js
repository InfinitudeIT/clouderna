import './About.css';

function About() {
  return (
    <div className="about">
      <section className="about-hero">
        <div className="hero-content">
          <h1>About Clouderna</h1>
          <p className="subtitle">Driving Digital Excellence Through Innovation</p>
        </div>
      </section>

      <section className="our-story">
        <div className="story-content">
          <h2>Our Story</h2>
          <p>At Clouderna, we bridge the gap between technology and business success. Founded with a vision to make modern technology accessible and understandable, we've grown into a comprehensive solution provider for businesses and learners alike.</p>
        </div>
      </section>

      <section className="vision-mission">
        <div className="vision-mission-grid">
          <div className="vision-card">
            <div className="icon">
              <img src="/icons/vision.svg" alt="Our Vision" />
            </div>
            <h2>Our Vision</h2>
            <p>To be the global leader in digital transformation, empowering businesses and individuals with cutting-edge technology solutions and knowledge that drive innovation and sustainable growth.</p>
          </div>
          
          <div className="mission-card">
            <div className="icon">
              <img src="/icons/mission.svg" alt="Our Mission" />
            </div>
            <h2>Our Mission</h2>
            <p>To deliver exceptional technology solutions and education that enable our clients to thrive in the digital age, through innovation, expertise, and unwavering commitment to excellence.</p>
          </div>
        </div>
      </section>

      <section className="values">
        <h2>Our Core Values</h2>
        <div className="values-grid">
          <div className="value-card turquoise">
            <div className="icon">
              <img src="/icons/innovation.svg" alt="Innovation" />
            </div>
            <h3>Innovation</h3>
            <p>Pushing boundaries with cutting-edge solutions</p>
          </div>
          <div className="value-card orange">
            <div className="icon">
              <img src="/icons/excellence.svg" alt="Excellence" />
            </div>
            <h3>Excellence</h3>
            <p>Delivering quality in everything we do</p>
          </div>
          <div className="value-card blue">
            <div className="icon">
              <img src="/icons/education.svg" alt="Education" />
            </div>
            <h3>Education</h3>
            <p>Empowering through knowledge sharing</p>
          </div>
          <div className="value-card green">
            <div className="icon">
              <img src="/icons/collaboration.svg" alt="Collaboration" />
            </div>
            <h3>Collaboration</h3>
            <p>Building strong partnerships for success</p>
          </div>
        </div>
      </section>

      <section className="team">
        <h2>Our Leadership Team</h2>
        <div className="team-grid">
          <div className="team-member turquoise">
            <div className="member-image">
              <img src="/team/member1.jpg" alt="Team Member" />
            </div>
            <h3>John Doe</h3>
            <p className="position">CEO & Founder</p>
          </div>
          <div className="team-member orange">
            <div className="member-image">
              <img src="/team/member2.jpg" alt="Team Member" />
            </div>
            <h3>Jane Smith</h3>
            <p className="position">CTO</p>
          </div>
          <div className="team-member blue">
            <div className="member-image">
              <img src="/team/member3.jpg" alt="Team Member" />
            </div>
            <h3>Mike Johnson</h3>
            <p className="position">Head of Education</p>
          </div>
          <div className="team-member green">
            <div className="member-image">
              <img src="/team/member4.jpg" alt="Team Member" />
            </div>
            <h3>Sarah Williams</h3>
            <p className="position">Head of Innovation</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About; 