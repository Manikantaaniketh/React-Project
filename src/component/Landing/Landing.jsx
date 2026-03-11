import React, { useRef, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { dataContext } from '../../Context/Usercontext';
import { FaArrowRight, FaCheckCircle, FaUsers, FaCity, FaHandsHelping, FaMagic, FaShieldAlt, FaHeadset } from 'react-icons/fa';
import { MdTimeline, MdVerifiedUser } from 'react-icons/md';
import './Landing.css';
import heroImg from '../../assets/landing_hero.png';
import processIcon from '../../assets/process_icons.png';

const popularCities = [
    { label: '🏙️ Bangalore', query: 'Bangalore' },
    { label: '🌊 Goa', query: 'Goa' },
    { label: '🏰 Jhansi', query: 'Jhansi' },
    { label: '🌆 Hyderabad', query: 'Hyderabad' },
    { label: '🏔️ Ladakh', query: 'Ladakh' },
    { label: '🏜️ Rajasthan', query: 'Rajasthan' },
    { label: '🌸 Pune', query: 'Pune' },
];

function Landing() {
    const learnMoreRef = useRef(null);
    const navigate = useNavigate();
    const { setSearchQuery } = useContext(dataContext);

    const scrollToLearnMore = () => {
        learnMoreRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const handleCityClick = (query) => {
        setSearchQuery(query);
        navigate(`/Trending?search=${encodeURIComponent(query)}`);
    };

    return (
        <div className="landing-page">
            <section className="hero-section" style={{ marginTop: '-120px', backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${heroImg})` }}>
                <div className="hero-content">
                    <h1 className="hero-title">Experience the Future of <br /><span>Premium Living</span></h1>
                    <p className="hero-subtitle">Lease Hub connects you with the most luxurious properties and seamless leasing experiences across the globe.</p>
                    <div className="hero-btns">
                        <Link to="/Trending" className="btn-primary">Explore Properties <FaArrowRight /></Link>
                        <button onClick={scrollToLearnMore} className="btn-secondary">Learn More</button>
                    </div>
                    <div className="hero-city-search">
                        <p className="city-search-label">Popular Destinations</p>
                        <div className="city-chips">
                            {popularCities.map(city => (
                                <button
                                    key={city.query}
                                    className="city-chip"
                                    onClick={() => handleCityClick(city.query)}
                                >
                                    {city.label}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="process-section">
                <div className="section-header">
                    <h2>How We Do It</h2>
                    <p>A simple 3-step process to find your dream home.</p>
                </div>
                <div className="process-container">
                    <img src={processIcon} alt="Leasing Process" className="process-main-img" />
                    <div className="process-steps">
                        <div className="step-item">
                            <h3><span>01.</span> Discover</h3>
                            <p>Browse through our curated collection of luxury houses, rooms, and studios with high-quality photos.</p>
                        </div>
                        <div className="step-item">
                            <h3><span>02.</span> Verify & Visit</h3>
                            <p>All listings are 100% verified. Book a physical or virtual tour with our expert consultants.</p>
                        </div>
                        <div className="step-item">
                            <h3><span>03.</span> Lease & Move In</h3>
                            <p>Secure online payments and digital contracts. Get your keys and start your new chapter instantly.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="about-section">
                <div className="container">
                    <div className="about-grid">
                        <div className="about-text">
                            <span className="badge">Who We Are</span>
                            <h2>Pioneers in Digital Real Estate Ecosystem</h2>
                            <p>Founded in 2024, Lease Hub was born from a simple idea: making property leasing as easy as booking a hotel. We are a team of tech visionaries and real estate experts dedicated to transparency, safety, and luxury.</p>
                            <ul className="about-features">
                                <li><FaCheckCircle /> 100% Verified Listings</li>
                                <li><FaCheckCircle /> Secure Digital Payments</li>
                                <li><FaCheckCircle /> 24/7 Dedicated Support</li>
                            </ul>
                        </div>
                        <div className="about-stats-grid">
                            <div className="stat-card">
                                <FaUsers />
                                <h3>50k+</h3>
                                <p>Happy Tenants</p>
                            </div>
                            <div className="stat-card">
                                <FaCity />
                                <h3>25+</h3>
                                <p>Cities Covered</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="milestone-section">
                <div className="container">
                    <div className="section-header white">
                        <h2>Our Journey & Milestones</h2>
                        <p>From a small startup to a leading property tech platform.</p>
                    </div>
                    <div className="timeline">
                        <div className="timeline-item">
                            <div className="time-icon"><MdTimeline /></div>
                            <div className="time-content">
                                <h4>2024 - Inception</h4>
                                <p>Launched Lease Hub in Bangalore with 100 listings.</p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="time-icon"><MdVerifiedUser /></div>
                            <div className="time-content">
                                <h4>2025 - Trust Building</h4>
                                <p>Reached 10,000 verified properties and integrated secure payments.</p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="time-icon"><FaHandsHelping /></div>
                            <div className="time-content">
                                <h4>2026 - Global Reach</h4>
                                <p>Expanding to international markets and introducing luxury hotel stays.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section ref={learnMoreRef} className="why-choose-section" id="learn-more">
                <div className="container">
                    <div className="section-header">
                        <span className="badge">Learn More</span>
                        <h2>Why Choose Lease Hub?</h2>
                        <p>We are transforming the way you find and experience your next home.</p>
                    </div>
                    <div className="choose-grid">
                        <div className="choose-card">
                            <div className="icon-box"><FaMagic /></div>
                            <h3>Smart Matching</h3>
                            <p>Our AI-driven search engine understands your lifestyle and finds properties that truly match your needs.</p>
                        </div>
                        <div className="choose-card">
                            <div className="icon-box"><FaShieldAlt /></div>
                            <h3>Verified Trust</h3>
                            <p>Every single property and owner undergoes a 5-step background check to ensure your safety and peace of mind.</p>
                        </div>
                        <div className="choose-card">
                            <div className="icon-box"><FaHeadset /></div>
                            <h3>Concierge Support</h3>
                            <p>From viewing to moving in, our dedicated lifestyle managers are available 24/7 to assist you.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Landing;
