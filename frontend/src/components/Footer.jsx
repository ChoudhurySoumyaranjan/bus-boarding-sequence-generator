import React from "react";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h2>BusBoard</h2>

          <p>
            A simple and efficient way to generate optimal bus boarding
            sequences from booking data.
          </p>
        </div>

        <div className="footer-links">
          <h3>Project</h3>

          <a href="#about">About</a>
          <a href="#how-it-works">How it works</a>
          <a href="#documentation">Documentation</a>
        </div>

        <div className="footer-tech">
          <h3>Built With</h3>

          <span>Java</span>
          <span>Spring Boot</span>
          <span>React</span>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} BusBoard. Built with care.</p>

        <p>Bus Boarding Sequence Generator</p>
      </div>
    </footer>
  );
};

export default Footer;



