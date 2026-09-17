import { useState } from "react";
import api from "../api/axiosConfig";

function BoardingPage() {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];

    setFile(selectedFile);
    setResult([]);
    setError("");
  };

  const handleGenerate = async () => {
    if (!file) {
      setError("Please select a CSV file.");
      return;
    }

    setError("");
    setResult([]);
    setLoading(true);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await api.post(
        "/boarding/generate",
        formData
      );

      setResult(response.data);
    } catch (err) {
      setError(
        err.response?.data?.message ||
        "Something went wrong while generating the sequence."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="boarding-page">

      {/* Page Header */}
      <section className="boarding-hero">
        <span className="boarding-label">
          BOARDING SEQUENCE
        </span>

        <h1>
          Generate your
          <span> boarding order.</span>
        </h1>

        <p>
          Upload your bus booking CSV and generate an organized
          boarding sequence based on seat position.
        </p>
      </section>

      {/* Upload Section */}
      <section className="boarding-section">

        <div className="upload-card">

          <div className="upload-icon">
            ↑
          </div>

          <h2>Upload booking data</h2>

          <p>
            Select a CSV file containing Booking_ID and Seats.
          </p>

          <label className="file-input">
            <input
              type="file"
              accept=".csv"
              onChange={handleFileChange}
            />

            <span>
              {file ? file.name : "Choose CSV file"}
            </span>
          </label>

          {file && (
            <p className="selected-file">
              Selected: <strong>{file.name}</strong>
            </p>
          )}

          <button
            className="generate-button"
            onClick={handleGenerate}
            disabled={loading}
          >
            {loading ? "Generating..." : "Generate Sequence"}
          </button>

          <p className="upload-hint">
            Example format: Booking_ID,Seats
          </p>

        </div>

      </section>

      {/* Error */}
      {error && (
        <section className="boarding-section">
          <div className="error-box">
            <strong>Unable to generate sequence</strong>
            <p>{error}</p>
          </div>
        </section>
      )}

      {/* Result */}
      {result.length > 0 && (
        <section className="boarding-section result-section">

          <div className="result-header">
            <div>
              <span className="boarding-label">
                RESULT
              </span>

              <h2>Boarding sequence</h2>
            </div>

            <span className="result-count">
              {result.length} bookings
            </span>
          </div>

          <div className="result-table-wrapper">
            <table className="result-table">

              <thead>
                <tr>
                  <th>Sequence</th>
                  <th>Booking ID</th>
                </tr>
              </thead>

              <tbody>
                {result.map((item) => (
                  <tr key={item.bookingId}>
                    <td>
                      <span className="sequence-badge">
                        {String(item.sequence).padStart(2, "0")}
                      </span>
                    </td>

                    <td>
                      <strong>#{item.bookingId}</strong>
                    </td>
                  </tr>
                ))}
              </tbody>

            </table>
          </div>

        </section>
      )}

    </div>
  );
}

export default BoardingPage;