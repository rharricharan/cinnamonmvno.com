"use client";

import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import NavBar from '../components/NavBar';
import ScrollAnimation from '../components/ScrollAnimation';
import Spline from '@splinetool/react-spline';
import './home.css';

function Home() {
    const [bgOpacity, setBgOpacity] = useState(0.7);
    const [video, setVideo] = useState("/motion-1.mp4");

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
            <main className="scroll-section">
                <section className="scroll-content">
                    <div className="scroll-video-wrap">
                        <div className="overlay-video" />
                        <AnimatePresence mode="popLayout">
                            <motion.video
                                className="video-tag"
                                autoPlay
                                muted
                                loop
                                playsInline
                                src={video}
                                key={video}
                                style={{ opacity: bgOpacity }}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 0.7 }}
                                exit={{ opacity: 0 }}
                                />
                        </AnimatePresence>
                    </div>
                    <ScrollAnimation video="/motion-1.mp4" setVideo={setVideo} setBgOpacity={setBgOpacity}>In a world that’s always moving</ScrollAnimation>
                    <ScrollAnimation video="/motion-2.mp4" setVideo={setVideo} setBgOpacity={setBgOpacity}>
                    Cinnamon is here to help you stay in sync.
                    </ScrollAnimation>
                    <ScrollAnimation video="/motion-3.mp4" setVideo={setVideo} setBgOpacity={setBgOpacity}>We’re a partner who understands that for you, clarity is everything.</ScrollAnimation>
                    <ScrollAnimation video="motion4.mp4" setVideo={setVideo} setBgOpacity={setBgOpacity}>With us, every word, every call, every text is exactly as it should be: simple, dependable, and unbreakable.</ScrollAnimation>
                </section>
            </main>
            <div className="commit-section">
                <div className="commit-tt-section">
                    <h2 className="commit-title">Our Commitment to You</h2>
                    <h3 className="commit-p">Whether you’re a growing startup or a multinational leader, we exist to make connecting as natural as a conversation across the table.</h3>
                </div>
                <div className="card-wrapper-com">
                    <div className="card-com">
                        <h3 className="top-title-com">Always Clear, Always Reliable</h3>
                        <h3 className="bttm-title-com">Delivering uncompromising quality with 99.99% uptime.</h3>
                        <div className="bttn-container-com">
                            <a className="com-bttn">
                                get started
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                    <path d="M16.172 11.5L10.808 6.13605L12.222 4.72205L20 12.5L12.222 20.278L10.808 18.864L16.172 13.5H4V11.5H16.172Z" fill="#F8F8F8"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="card-com">
                        <h3 className="top-title-com">Built for Growth, Made to Last</h3>
                        <h3 className="bttm-title-com">Scale at your pace, without limits or inflated costs.</h3>
                        <div className="bttn-container-com">
                            <a className="com-bttn">
                                get started
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                    <path d="M16.172 11.5L10.808 6.13605L12.222 4.72205L20 12.5L12.222 20.278L10.808 18.864L16.172 13.5H4V11.5H16.172Z" fill="#F8F8F8"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="card-com">
                        <h3 className="top-title-com">Seamless and Intuitive</h3>
                        <h3 className="bttm-title-com">Technology that just works, without the technical headache.</h3>
                        <div className="bttn-container-com">
                            <a className="com-bttn">
                                get started
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                    <path d="M16.172 11.5L10.808 6.13605L12.222 4.72205L20 12.5L12.222 20.278L10.808 18.864L16.172 13.5H4V11.5H16.172Z" fill="#F8F8F8"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;