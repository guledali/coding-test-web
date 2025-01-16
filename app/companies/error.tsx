"use client";

import { useEffect, CSSProperties } from "react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

// Define types for the styles
interface StylesType {
  container: CSSProperties;
  heading: CSSProperties;
  message: CSSProperties;
  button: CSSProperties;
  buttonHover: CSSProperties;
}

// Add CSS styles with proper typing
const styles: StylesType = {
  container: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "2rem",
  },
  heading: {
    textAlign: "center",
    color: "#ef4444",
    marginBottom: "1rem",
  },
  message: {
    textAlign: "center",
    color: "#6b7280",
    marginBottom: "1.5rem",
  },
  button: {
    marginTop: "1rem",
    padding: "0.5rem 1rem",
    fontSize: "0.875rem",
    color: "white",
    backgroundColor: "#3b82f6",
    borderRadius: "0.375rem",
    transition: "background-color 0.2s",
    cursor: "pointer",
    border: "none",
  },
  buttonHover: {
    backgroundColor: "#60a5fa",
  },
};

export default function CompaniesError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to console in development
    console.error("Companies Error:", error);
  }, [error]);

  return (
    <main style={styles.container} className={inter.className}>
      <h2 style={styles.heading}>Companies List Error</h2>
      <p style={styles.message}>
        There was a problem loading the list of companies. Please try again.
      </p>
      <button
        style={styles.button}
        onMouseOver={(e) => {
          Object.assign(e.currentTarget.style, styles.buttonHover);
        }}
        onMouseOut={(e) => {
          Object.assign(e.currentTarget.style, {
            backgroundColor: styles.button.backgroundColor,
          });
        }}
        onClick={() => reset()}
      >
        Try again
      </button>
    </main>
  );
}
