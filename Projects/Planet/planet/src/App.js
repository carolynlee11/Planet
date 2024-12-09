import React, { useState, useEffect } from 'react';
import './App.css';
import Typewriter from 'typewriter-effect';
import Process from './Process';
import { Link } from 'react-scroll';
import OurTeam from './OurTeam';
import logo from './Assets/planet_text_logo.svg';
import Loader from './Loader';
import CustomCursor from './CustomCursor';


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000); // Loader disappears after 3 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <CustomCursor />
      {loading ? (
        <Loader />
      ) : (
        <div className="fade-in">
          <nav className="navbar">
            <img src={logo} alt="logo" className="logo" />
            <ul className="nav-links">
              <li>
                <Link
                  className="link"
                  activeClass="active"
                  to="Home"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={750}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="link"
                  activeClass="active"
                  to="About"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={750}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className="link"
                  activeClass="active"
                  to="ConceptVideo"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={750}
                >
                  Concept Video
                </Link>
              </li>
              <li>
                <Link
                  className="link"
                  activeClass="active"
                  to="Process"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={750}
                >
                  Process
                </Link>
              </li>
              <li>
                <Link
                  className="link"
                  activeClass="active"
                  to="OurTeam"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={750}
                >
                  Our Team
                </Link>
              </li>
            </ul>
          </nav>

          <section id="Home">
  <div className="background-circle">
    <div className="rotating-circle circle"></div>
  </div>

  <div className="main-content">
  {/* First Line as Paragraph */}
  <p>
    <Typewriter
      options={{
        autoStart: true,
        loop: false,
        delay: 50, // Typing speed
        cursor: '',
      }}
      onInit={(typewriter) => {
        typewriter
          .typeString('Friends living in different worlds? Just') // First line as paragraph
          .pauseFor(300) // Pause after the first line
          .callFunction(() => {
            const headerElement = document.getElementById('planet-header');
            if (headerElement) {
              headerElement.style.opacity = '1'; // Make it visible
              headerElement.style.visibility = 'visible'; // Ensure visibility
              headerElement.classList.add('fade-in-text'); // Trigger the fade-in effect
            }
          })
          .start();
      }}
    />
  </p>

  {/* Second Line as Header */}
  <h1
    id="planet-header"
    style={{
      opacity: '0', // Fully hidden initially
      visibility: 'hidden', // Prevent it from taking up space
    }}
  >
    Planet.
  </h1>
</div>
  <a>
    <Link
      className="learn-more-circle"
      activeClass="active"
      to="About"
      spy={true}
      smooth={true}
      offset={0}
      duration={750}
    >
      <span className="learn-more-text">learn more.</span>
    </Link>
  </a>
</section>

          <section id="About">
            <h2>About Planet</h2>
            <p>
              Reaching out to friends is seen as time consuming and an inconvenience to the other
              person, and is especially difficult to do when in a bad headspace, leading to
              isolation, which is detrimental to people’s mental health, as expressed in
              needfinding interviews.
            </p>
            <p>
              Planet lets you visually connect with your friends' emotions and statuses in real-time,
              so you never feel alienated and always know who's able to hang out or needs
              companionship.
            </p>
          </section>

          <section id="ConceptVideo">
            <h2>Concept Video</h2>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/-F-jwwRCpN4?si=MOLoAKk1KjuT-7gu"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </section>

          <section id="Demo">
            <h2>Demo Video</h2>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/j_qaeIyMq_U?si=vdyv8eexrLGp1KP_"
              title="Demo video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
            <div className="qr-container">
              <img
                src='./PlanetQR.png'
                className="qr-code"
              />
              <p className="qr-text">
                Download <b>Expo Go</b> and scan this code to try Planet
              </p>
            </div>
          </section>


          <section id="Process">
            <h2>Process</h2>
            <p>Follow us through our design journey and see how Planet came into orbit.</p>
            <Process />
          </section>

          <section id="OurTeam">
            <h2>Our Team</h2>
            <p>Meet the team behind Planet.</p>
            <OurTeam />
          </section>
        </div>
      )}
    </div>
  );
}

export default App;
