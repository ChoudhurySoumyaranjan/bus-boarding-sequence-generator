import React from "react";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <div className="about-page">
      {/* Header */}
      <section className="about-hero">
        <span className="about-label">ABOUT BUSBOARD</span>

        <h1>
          A simple approach to
          <span> smarter boarding.</span>
        </h1>

        <p>
          BusBoard converts booking and seat information into an organized
          boarding sequence, helping operators process passengers in a clear and
          consistent order.
        </p>
      </section>

      {/* How it works */}
      <section className="about-section">
        <div className="about-section-title">
          <span>THE APPROACH</span>
          <h2>How the sequence is generated</h2>
        </div>

        <div className="process-grid">
          <div className="process-card">
            <div className="process-number">01</div>

            <h3>Read bookings</h3>

            <p>
              Each booking is read from the uploaded CSV file along with its
              assigned seats.
            </p>
          </div>

          <div className="process-card">
            <div className="process-number">02</div>

            <h3>Find the farthest seat</h3>

            <p>
              The highest seat number in each booking is used as its boarding
              priority.
            </p>
          </div>

          <div className="process-card">
            <div className="process-number">03</div>

            <h3>Sort the bookings</h3>

            <p>
              Bookings with higher seat numbers are placed first. Smaller
              Booking IDs break ties.
            </p>
          </div>
        </div>
      </section>

      {/* Rule */}
      <section className="rule-section">
        <div className="rule-content">
          <span>BOARDING RULE</span>

          <h2>Higher seat numbers board first.</h2>

          <p>
            For example, a booking containing A20 and C2 has a maximum seat
            number of 20. It therefore receives a higher boarding priority than
            a booking whose maximum seat number is 10.
          </p>
        </div>

        <div className="rule-example">
          <div className="example-row">
            <span>Booking 120</span>
            <strong>A20 · C2</strong>
            <b>20</b>
          </div>

          <div className="example-row">
            <span>Booking 115</span>
            <strong>A10 · D10</strong>
            <b>10</b>
          </div>

          <div className="example-row">
            <span>Booking 101</span>
            <strong>A1 · B1</strong>
            <b>1</b>
          </div>
        </div>
      </section>

      {/* CSV Format */}
      <section className="csv-section">
        <div className="about-section-title">
          <span>INPUT FORMAT</span>
          <h2>Keep your CSV simple.</h2>
        </div>

        <div className="csv-content">
          <div className="csv-description">
            <p>
              Upload a CSV containing two columns:
              <strong> Booking_ID</strong> and <strong>Seats</strong>.
            </p>

            <p>
              Multiple seats for the same booking should be separated using the{" "}
              <code>|</code> character.
            </p>
          </div>

          <pre>
            {`Booking_ID,Seats
101,A1|B1
120,A20|C2
115,A10|D10`}
          </pre>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <div>
          <span>READY TO TRY IT?</span>

          <h2>Generate your boarding sequence.</h2>
        </div>

        <Link to="/boarding" className="primary-button">
          Start Boarding
          <span>→</span>
        </Link>
      </section>
    </div>
  );
};

export default AboutPage;
