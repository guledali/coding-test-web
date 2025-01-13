import Link from "next/link";

const styles = {
  icon: {
    fontSize: "40px",
    color: "gray",
  },
  heading: {
    margin: "10px 0",
    fontSize: "20px",
  },
  link: {
    marginTop: "20px",
    padding: "8px 16px",
    backgroundColor: "blue",
    color: "white",
    borderRadius: "4px",
  },
};

export default function NotFound() {
  return (
    <main
      style={{
        display: "flex",
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column" as const,
      }}
    >
      <span style={styles.icon}>☹️</span>
      <h2 style={styles.heading}>404 Not Found</h2>
      <p>Could not find the company.</p>
      <Link href="/companies" style={styles.link}>
        Go Back
      </Link>
    </main>
  );
}
