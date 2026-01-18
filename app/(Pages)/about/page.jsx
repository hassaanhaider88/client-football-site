/* eslint-disable @next/next/no-img-element */
import React from 'react';
import './page.css'
// import { ArrowRight } from 'lucide-react';

export default function InfluencerMarketing() {
 <div className="container">
    <div className="header-section">
      <p className="company-label">About Our Company</p>
      <div className="header-content">
        <h1>Innovative Influencer Marketing to Boost Your Business</h1>
        
        <div className="stats-container">
          <div className="stat">
            <div className="stat-value">10k+</div>
            <div className="stat-label">Deal with Clients</div>
          </div>
          <div className="stat">
            <div className="stat-value">1.5k+</div>
            <div className="stat-label">Team Members</div>
          </div>
          <div className="stat">
            <div className="stat-value">24.1k+</div>
            <div className="stat-label">Completed Project</div>
          </div>
        </div>
      </div>
    </div>

    <div className="content-grid">
      <div className="grid-image">
        <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=1000&fit=crop" alt="Business meeting"/>
      </div>

      <div className="service-card blue">
        <h2>Ad Campaign Strategies</h2>
        <p>Our ad campaign strategies are designed to maximize yours reach and impact, ensuring effective engagement and measurable results.</p>
        <button className="read-more">
          <span>Read More</span>
          <svg className="arrow-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
          </svg>
        </button>
      </div>

      <div className="service-card gray">
        <h2>Content Strategy</h2>
        <p>Our content strategy focuses on creating engaging, relevant material that drives audience interaction and supports your business goals.</p>
        <button className="read-more">
          <span>Read More</span>
          <svg className="arrow-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
          </svg>
        </button>
      </div>

      <div className="service-card gray full-width">
        <h2>Business Scaling</h2>
        <p>Our expert strategies in business scaling help you expand your operations efficiently, ensuring sustainable growth and increased market presence. Partner with us to elevate your business to new heights.</p>
        <button className="read-more">
          <span>Read More</span>
          <svg className="arrow-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
          </svg>
        </button>
      </div>
    </div>
  </div>
}