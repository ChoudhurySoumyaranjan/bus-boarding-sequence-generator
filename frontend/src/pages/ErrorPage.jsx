import { Link, useNavigate, useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  const navigate=useNavigate();

  const status = error?.status || 500;

  const isNotFound = status === 404;

  return (
    <div className="error-page">
      <div className="error-content">
        <div className="error-code">{isNotFound ? "404" : status}</div>

        <h1>{isNotFound ? "Page Not Found" : "Something Went Wrong"}</h1>

        <p>
          {isNotFound
            ? "The page you're looking for doesn't exist or may have been moved."
            : error?.statusText ||
              error?.message ||
              "An unexpected error occurred. Please try again."}
        </p>

        <button className="home-button" onClick={()=>{
          navigate(-1);
        }}>
          Go Back Home
        </button>
      </div>
    </div>
  );
}

export default ErrorPage;
