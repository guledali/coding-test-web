import "./FullPageSpinner.css";

export function FullPageSpinner() {
  return (
    <div className="loader">
      <div className="loader-content">
        <div className="loader-spinner"></div>
        <h2 className="loader-title">Loading...</h2>
        <p className="loader-text">Please wait while we fetch your content</p>
      </div>
    </div>
  );
}
