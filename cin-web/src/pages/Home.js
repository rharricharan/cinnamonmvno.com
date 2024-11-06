import React from "react";
import NavBar from '../components/NavBar';
import './home.css';

function Home() {
    return (
        <div className="home-wrapper">
            <NavBar />
            <div className="hero-container">
                <div className="hero-wrapper">
                    <img 
                        src={require('../assets/Hero.jpg')} 
                        alt="Hero" 
                        className="hero-image"
                    />
                    <div className="hero-text">
                        <h1 className="hero-h1">Communication without Compromise.<br />Clearer, simpler, built for now.</h1>
                        <a className="hero-cta">
                            discover how
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                <path d="M16.172 11.5L10.808 6.13605L12.222 4.72205L20 12.5L12.222 20.278L10.808 18.864L16.172 13.5H4V11.5H16.172Z" fill="#F8F8F8"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;