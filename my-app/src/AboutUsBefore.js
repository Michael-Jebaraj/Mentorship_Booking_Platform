import React, { useState,useEffect, useRef  } from  "react";
import { Link } from "react-router-dom";
import "./Home.css"; // Using the same styles as Home.js

function AboutUsBefore() {
  const [animated, setAnimated] = useState(false);
      const missionRef = useRef(null);
      const sectionsRef = useRef([]);
      useEffect(() => {
            const observer = new IntersectionObserver(
              (entries) => {
                if (entries[0].isIntersecting && !animated) {
                  setAnimated(true);
                }
              },
              { threshold: 0.5 }
            );
        
            if (missionRef.current) {
              observer.observe(missionRef.current);
            }
        
            return () => {
              if (missionRef.current) {
                observer.unobserve(missionRef.current);
              }
            };
          }, [animated]);
      
  return (
    <div className="container">
      {/* Navbar from Home.js */}
      <nav className="navbar">
        <div className="logo">
          <Link to="/">
            <img src="/logo.png" alt="MentorSpark Logo" />
          </Link>
        </div>
        <div className="nav-links">
          <Link to="/signin">
            <button className="login-btn"><strong>Get Started</strong></button>
          </Link>
        </div>
      </nav>

      {/* About Us Section */}
      <section className="aboutus-content">
        <h1>About Us</h1>
        <p>
          Welcome to MentorSpark, your go-to platform for expert mentorship. Our goal is to connect 
          individuals with experienced mentors across various fields, helping them achieve their 
          career and personal growth goals.
        </p>
        <p>
          Our mentors come from diverse backgrounds and have years of experience in guiding 
          professionals, students, and entrepreneurs toward success.
        </p>
      </section>

      {/* Footer from Home.js */}
      <footer className="footer animate-on-scroll" ref={(el) => sectionsRef.current[4] = el}>
              <div className="footer-content">
                <div className="footer-top">
                  <div className="footer-left">
                    <Link to="/AboutUsBefore">About Us</Link>
                  </div>
                  <div className="footer-center">
                    <Link to="/ContactBefore">Contact Us</Link>
                  </div>
                  <div className="footer-right">
                    <div className="footer-social">
                      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        <img src="/linkedin.png" alt="LinkedIn" />
                      </a>
                      <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                        <img src="/youtube.png" alt="YouTube" />
                      </a>
                      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <img src="/facebook.png" alt="Facebook" />
                      </a>
                      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <img src="/instagram.png" alt="Instagram" />
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="footer-divider"></div>
                
                <div className="footer-bottom">
                  <div className="footer-left-mentorspark">
                    <p>© 2025 MentorSpark. All rights reserved</p>
                  </div>
                  <div className="footer-center-terms">
                    <Link to="/TermsOfServiceBefore">Terms and Conditions</Link>
                  </div>
                  <div className="footer-right-privacy">
                    <Link to="/PrivacyPolicyBefore">Privacy Policy</Link>
                  </div>
                </div>
              </div>
            </footer>
    </div>
  );
}

export default AboutUsBefore;