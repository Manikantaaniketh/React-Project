import React from 'react';
import './About.css';
import { FaRocket, FaEye, FaHeart, FaHandshake, FaUserShield, FaGlobe } from 'react-icons/fa';
import { MdOutlineVerifiedUser, MdOutlineSupportAgent, MdOutlineAutoGraph } from 'react-icons/md';

function About() {
    return (
        <div className="about-page">

            <section className="about-hero">
                <div className="about-hero-content">
                    <h1>Redefining the <span>Modern Living</span> Experience</h1>
                    <p>Lease Hub is more than just a property platform—it's a digital ecosystem designed to bring transparency, luxury, and ease to the world of real estate.</p>
                </div>
            </section>

            <section className="mission-vision">
                <div className="about-container">
                    <div className="mv-grid">
                        <div className="mv-card">
                            <div className="mv-icon"><FaRocket /></div>
                            <h2>Our Mission</h2>
                            <p>To empower every individual to find their perfect home through a seamless, secure, and technologically advanced leasing experience.</p>
                        </div>
                        <div className="mv-card">
                            <div className="mv-icon"><FaEye /></div>
                            <h2>Our Vision</h2>
                            <p>To become the world's most trusted digital doorway, connecting premium tenants with extraordinary living spaces across every major city.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="story-section">
                <div className="about-container">
                    <div className="story-grid">
                        <div className="story-image">
                            <div className="story-placeholder">
                                <h3>EST. 2024</h3>
                            </div>
                        </div>
                        <div className="story-text">
                            <span className="about-badge">Our Story</span>
                            <h2>From a Simple Idea to a <span>Global Platform</span></h2>
                            <p>Lease Hub started in a small workspace in Hyderabad with a singular vision: eliminate the friction in finding high-quality rentals. We saw a market cluttered with unverified listings and complex paperwork, and we decided to build a solution.</p>
                            <p>Today, we represent a community of thousands of happy tenants and premium property owners, unified by our commitment to quality and trust.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="values-section">
                <div className="about-container">
                    <div className="section-title">
                        <h2>Our Core Values</h2>
                        <p>The principles that guide everything we do.</p>
                    </div>
                    <div className="values-grid">
                        <div className="value-item">
                            <FaHeart />
                            <h3>Trust First</h3>
                            <p>Every listing on our platform undergoes a rigorous 100% verification process.</p>
                        </div>
                        <div className="value-item">
                            <FaUserShield />
                            <h3>Security</h3>
                            <p>We prioritize your data and financial security with state-of-the-art encryption.</p>
                        </div>
                        <div className="value-item">
                            <FaHandshake />
                            <h3>Reliability</h3>
                            <p>A dedicated support team available around the clock to assist you.</p>
                        </div>
                        <div className="value-item">
                            <FaGlobe />
                            <h3>Global Reach</h3>
                            <p>Connecting you to premium properties across 25+ cities and growing.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="choose-us">
                <div className="about-container">
                    <div className="choose-content">
                        <div className="choose-header">
                            <h2>Why Choose Lease Hub?</h2>
                            <p>Experience the advantages of a platform built for the future.</p>
                        </div>
                        <div className="choose-stats">
                            <div className="stat-item">
                                <MdOutlineVerifiedUser />
                                <h4>100% Verified</h4>
                                <p>Properties are personally inspected.</p>
                            </div>
                            <div className="stat-item">
                                <MdOutlineSupportAgent />
                                <h4>24/7 Support</h4>
                                <p>We're here whenever you need us.</p>
                            </div>
                            <div className="stat-item">
                                <MdOutlineAutoGraph />
                                <h4>Smart Search</h4>
                                <p>Find your home in seconds, not days.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default About;
