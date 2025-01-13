import React from "react";
import Link from "next/link";
import "./Showcase.css";

export function Showcase({ companiesListed = 500 }) {
  return (
    <div className="showcase">
      <div className="showcase-content">
        <div className="showcase-text">
          <h1 className="showcase-title">Company Explorer</h1>
          <p className="showcase-description">
            Browse through detailed financial reports and company information
          </p>

          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">{companiesListed}</div>
              <div className="stat-label">Companies Listed</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">10,000</div>
              <div className="stat-label">Financial Reports</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">25</div>
              <div className="stat-label">Countries</div>
            </div>
          </div>

          <div className="action-buttons">
            <Link href="/companies" className="button button-primary">
              Browse Companies 🏢
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
