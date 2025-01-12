"use client";

import { useEffect } from "react";

// Add CSS styles
const styles = {
  main: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    textAlign: "center",
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

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Optionally log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <main style={styles.main}>
      <h2 style={styles.heading}>Something went wrong!</h2>
      <button
        style={styles.button}
        onMouseOver={(e) => {
          e.currentTarget.style.backgroundColor =
            styles.buttonHover.backgroundColor;
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.backgroundColor = styles.button.backgroundColor;
        }}
        onClick={() => reset()}
      >
        Try again
      </button>
    </main>
  );
}
