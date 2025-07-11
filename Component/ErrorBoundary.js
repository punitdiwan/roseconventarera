import { ErrorBoundary as ReactErrorBoundary } from "react-error-boundary";

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: "#fff5f5",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "20px",
        fontFamily: "'Segoe UI', sans-serif",
      }}
    >
      <div
        style={{
          fontSize: "28px",
          fontWeight: 700,
          color: "#e53e3e",
          marginBottom: "12px",
        }}
      >
        Something went wrong
      </div>
      <p
        style={{
          maxWidth: "500px",
          fontSize: "16px",
          fontWeight: 500,
          color: "#4a5568",
          marginBottom: "20px",
        }}
      >
        Please contact the Support Team: <br />
        <span style={{ color: "#2b6cb0", fontWeight: 600 }}>
         +91 8982544673
        </span>
      </p>
      <button
        onClick={resetErrorBoundary}
        style={{
          backgroundColor: "#3182ce",
          color: "#fff",
          padding: "10px 20px",
          borderRadius: "6px",
          fontWeight: 600,
          fontSize: "14px",
          cursor: "pointer",
          border: "none",
        }}
      >
        Try Again
      </button>
    </div>
  );
}

export default function ErrorBoundary({ children }) {
  return (
    <ReactErrorBoundary FallbackComponent={ErrorFallback}>
      {children}
    </ReactErrorBoundary>
  );
}
