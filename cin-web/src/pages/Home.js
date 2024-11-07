"use client";

import React from "react";
import NavBar from '../components/NavBar';
import ScrollAnimation from "./components/ScrollAnimation";
import Spline from '@splinetool/react-spline';
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
            <div className="sub-hero">
                <div className="sub-hero-wrap">
                    <div className="sub-r-hero">
                        <div className="sub-text">
                            <h3 className="sub-sub-p">Connecting shouldn’t be complicated.</h3>
                            <h2 className="sub-h2">Cinnamon makes it effortless for businesses to keep the conversation going, at scale.</h2>
                        </div>
                    </div>
                    <div className="sub-l-hero">
                        <Spline scene="https://prod.spline.design/d44bjDVsZG4ISGV6/scene.splinecode" />
                    </div>
                </div>
            </div>
            <main className="min-h-screen">
                <section className="min-h-screen flex justify-center items-center bg-neutral-50">
                    <h1 className="font-bold text-neutral-900 text-5xl">Hero section</h1>
                </section>
                <section>
                    <ScrollAnimation>Welcome to the era of scroll animations.</ScrollAnimation>
                    <ScrollAnimation>
                    This demo seamlessly blends video content with aesthetic interactions.
                    </ScrollAnimation>
                    <ScrollAnimation>You navigate simply by scrolling.</ScrollAnimation>
                    <ScrollAnimation>You've never seen everything like this before.</ScrollAnimation>
                </section>
                <section className="min-h-screen flex justify-center items-center bg-neutral-50">
                    <h1 className="font-bold text-neutral-900 text-5xl">Another section</h1>
                </section>
            </main>
        </div>
    );
};

export default Home;