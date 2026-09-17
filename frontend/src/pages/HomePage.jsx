import React from 'react'
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="home-page">

      {/* Hero Section */}
      <section className="hero-section">

        <div className="hero-content">

          <div className="hero-badge">
            Smart Boarding Sequence
          </div>

          <h1>
            Turn booking data into a
            <span> smarter boarding order.</span>
          </h1>

          <p className="hero-description">
            Upload your bus booking CSV and instantly generate an
            organized boarding sequence based on seat position.
          </p>

          <div className="hero-actions">
            <Link to="/boarding" className="primary-button">
              Generate Boarding Sequence
              <span>→</span>
            </Link>

            <Link to="/about" className="secondary-button">
              Learn how it works
            </Link>
          </div>

        </div>

        {/* Visual */}
        <div className="hero-visual">

          <div className="boarding-card">

            <div className="card-header">
              <div>
                <span className="card-label">BOARDING ORDER</span>
                <h3>Generated Sequence</h3>
              </div>

              <div className="status-dot"></div>
            </div>

            <div className="sequence-list">

              <div className="sequence-item">
                <span className="sequence-number">01</span>
                <span className="seat">A20 · C2</span>
                <strong>#120</strong>
              </div>

              <div className="sequence-item">
                <span className="sequence-number">02</span>
                <span className="seat">B20 · C5</span>
                <strong>#130</strong>
              </div>

              <div className="sequence-item">
                <span className="sequence-number">03</span>
                <span className="seat">A10 · D10</span>
                <strong>#115</strong>
              </div>

              <div className="sequence-item">
                <span className="sequence-number">04</span>
                <span className="seat">A10 · D10</span>
                <strong>#125</strong>
              </div>

              <div className="sequence-item">
                <span className="sequence-number">05</span>
                <span className="seat">A1 · B1</span>
                <strong>#101</strong>
              </div>

            </div>

            <div className="card-footer">
              <span>5 bookings processed</span>
              <span>Ready to board</span>
            </div>

          </div>

        </div>

      </section>

      {/* Features */}
      <section className="features-section">

        <div className="section-heading">
          <span>HOW IT WORKS</span>
          <h2>Simple input. Clear results.</h2>
        </div>

        <div className="features-grid">

          <div className="feature-card">

            <div className="feature-number">01</div>

            <h3>Upload bookings</h3>

            <p>
              Upload your booking data in the required CSV format.
            </p>

          </div>

          <div className="feature-card">

            <div className="feature-number">02</div>

            <h3>Process seats</h3>

            <p>
              The system identifies the farthest seat number
              for every booking.
            </p>

          </div>

          <div className="feature-card">

            <div className="feature-number">03</div>

            <h3>Get your sequence</h3>

            <p>
              Bookings are arranged into a clear boarding order
              with consistent tie-breaking.
            </p>

          </div>

        </div>

      </section>

      {/* Bottom CTA */}
      <section className="home-cta">

        <div>
          <span>READY TO BEGIN?</span>

          <h2>
            Generate your boarding sequence.
          </h2>
        </div>

        <Link to="/boarding" className="primary-button">
          Start Boarding
          <span>→</span>
        </Link>

      </section>

    </div>
  );
}

export default HomePage;