import React, { useState,useEffect, useRef  } from "react";
import { Link } from "react-router-dom";
import "./Home.css"; // Using the same styles as Home.js

function TermsOfServiceBefore() {
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

      {/* Terms of Service Section */}
      <section className="aboutus-content">
        <h1>Terms of Service</h1>
        <p>
          Welcome to MentorSpark! By using our platform, you agree to the following terms.
        </p>
        <p>
          MentorSpark connects mentees with mentors for educational purposes. Users must adhere 
          to ethical guidelines and respect community standards.
        </p>
        <p>
          Payments are processed securely, and refunds follow our policy. MentorSpark provides 
          guidance but does not guarantee career outcomes.
        </p>
        <p>
          For complete terms, please read our Terms of Service page.
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

export default TermsOfServiceBefore;
