"use client";

import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import NavBar from '../components/NavBar';
import ScrollAnimation from '../components/ScrollAnimation';
import Spline from '@splinetool/react-spline';
import Footer from '../components/Footer';
import { useNavigate, useLocation } from 'react-router-dom';
import './home.css';

function Home() {
    const [bgOpacity, setBgOpacity] = useState(0.7);
    const [video, setVideo] = useState("/motion-1.mp4");
    const navigate = useNavigate();

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
                        <h1 className="hero-h1">Communication without Compromise. Clearer, simpler, built for now.</h1>
                        <a className="hero-cta" onClick={() => navigate('/solutions')}>
                            Discover how
                            {/*<svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                <path d="M16.172 11.5L10.808 6.13605L12.222 4.72205L20 12.5L12.222 20.278L10.808 18.864L16.172 13.5H4V11.5H16.172Z" fill="#F8F8F8"/>
                            </svg>*/}
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
                    <ScrollAnimation className="video-animation" video="/motion-1.mp4" setVideo={setVideo} setBgOpacity={setBgOpacity}>In a world that’s always moving</ScrollAnimation>
                    <ScrollAnimation className="video-animation" video="/motion-2.mp4" setVideo={setVideo} setBgOpacity={setBgOpacity}>
                    Cinnamon is here to help you stay in sync.
                    </ScrollAnimation>
                    <ScrollAnimation className="video-animation" video="/motion-3.mp4" setVideo={setVideo} setBgOpacity={setBgOpacity}>We’re a partner who understands that for you, clarity is everything.</ScrollAnimation>
                    <ScrollAnimation className="video-animation" video="motion4.mp4" setVideo={setVideo} setBgOpacity={setBgOpacity}>With us, every touchpoint of communication is simple, dependable, and unbreakable.</ScrollAnimation>
                </section>
            </main>
            <div className="commit-section">
                <div className="commit-tt-section">
                    <h2 className="commit-title">Our Commitment to You</h2>
                    <h3 className="commit-p">Whether you’re a growing startup or a multinational leader, we exist to make connecting as natural as a conversation across the table.</h3>
                    <div className="bttn-container-com">
                        <a className="com-bttn" onClick={() => navigate('/contact')}>
                            Get started
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="rgba(163, 50, 11, 1)">
                                <path d="M16.172 11.5L10.808 6.13605L12.222 4.72205L20 12.5L12.222 20.278L10.808 18.864L16.172 13.5H4V11.5H16.172Z" fill="rgba(163, 50, 11, 1)"/>
                            </svg>
                        </a>
                    </div>
                </div>
                <div className="card-wrapper-com">
                    <div className="card-com">
                        <div className="card-top">
                            <h3 className="top-title-com">Always Clear,<br />Always Reliable</h3>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M11.9999 2C12.2652 2 12.5195 2.10536 12.707 2.29289C12.8946 2.48043 12.9999 2.73478 12.9999 3V6C12.9999 6.26522 12.8946 6.51957 12.707 6.70711C12.5195 6.89464 12.2652 7 11.9999 7C11.7347 7 11.4804 6.89464 11.2928 6.70711C11.1053 6.51957 10.9999 6.26522 10.9999 6V3C10.9999 2.73478 11.1053 2.48043 11.2928 2.29289C11.4804 2.10536 11.7347 2 11.9999 2V2ZM11.9999 17C12.2652 17 12.5195 17.1054 12.707 17.2929C12.8946 17.4804 12.9999 17.7348 12.9999 18V21C12.9999 21.2652 12.8946 21.5196 12.707 21.7071C12.5195 21.8946 12.2652 22 11.9999 22C11.7347 22 11.4804 21.8946 11.2928 21.7071C11.1053 21.5196 10.9999 21.2652 10.9999 21V18C10.9999 17.7348 11.1053 17.4804 11.2928 17.2929C11.4804 17.1054 11.7347 17 11.9999 17V17ZM20.6599 7C20.7925 7.22968 20.8285 7.50263 20.7598 7.7588C20.6912 8.01497 20.5236 8.23339 20.2939 8.366L17.6959 9.866C17.5822 9.9327 17.4563 9.97623 17.3257 9.9941C17.195 10.012 17.0621 10.0038 16.9346 9.9701C16.8071 9.93639 16.6875 9.8778 16.5828 9.79769C16.478 9.71758 16.3901 9.61754 16.3242 9.50333C16.2582 9.38912 16.2155 9.26299 16.1985 9.13221C16.1815 9.00143 16.1906 8.86858 16.2251 8.74131C16.2597 8.61403 16.3191 8.49485 16.3999 8.39063C16.4807 8.2864 16.5813 8.19918 16.6959 8.134L19.2939 6.634C19.5236 6.5014 19.7966 6.46546 20.0527 6.5341C20.3089 6.60274 20.5273 6.77033 20.6599 7V7ZM7.66994 14.5C7.80254 14.7297 7.83848 15.0026 7.76984 15.2588C7.7012 15.515 7.53361 15.7334 7.30394 15.866L4.70594 17.366C4.59217 17.4327 4.46633 17.4762 4.33566 17.4941C4.205 17.512 4.07209 17.5038 3.94459 17.4701C3.81709 17.4364 3.69752 17.3778 3.59276 17.2977C3.488 17.2176 3.40012 17.1175 3.33418 17.0033C3.26823 16.8891 3.22554 16.763 3.20854 16.6322C3.19154 16.5014 3.20058 16.3686 3.23513 16.2413C3.26968 16.114 3.32907 15.9949 3.40987 15.8906C3.49067 15.7864 3.59129 15.6992 3.70594 15.634L6.30394 14.134C6.53362 14.0014 6.80657 13.9655 7.06274 14.0341C7.31891 14.1027 7.53733 14.2703 7.66994 14.5ZM20.6599 17C20.5273 17.2297 20.3089 17.3973 20.0527 17.4659C19.7966 17.5345 19.5236 17.4986 19.2939 17.366L16.6959 15.866C16.4681 15.7324 16.3024 15.5142 16.2349 15.2589C16.1674 15.0036 16.2036 14.732 16.3357 14.5033C16.4677 14.2746 16.6848 14.1074 16.9397 14.0383C17.1945 13.9691 17.4664 14.0035 17.6959 14.134L20.2939 15.634C20.5236 15.7666 20.6912 15.985 20.7598 16.2412C20.8285 16.4974 20.7925 16.7703 20.6599 17ZM7.66994 9.5C7.53733 9.72967 7.31891 9.89726 7.06274 9.9659C6.80657 10.0345 6.53362 9.9986 6.30394 9.866L3.70594 8.366C3.59129 8.30082 3.49067 8.2136 3.40987 8.10937C3.32907 8.00515 3.26968 7.88597 3.23513 7.75869C3.20058 7.63142 3.19154 7.49857 3.20854 7.36779C3.22554 7.23701 3.26823 7.11088 3.33418 6.99667C3.40012 6.88246 3.488 6.78242 3.59276 6.70231C3.69752 6.62221 3.81709 6.56361 3.94459 6.5299C4.07209 6.49619 4.205 6.48804 4.33566 6.5059C4.46633 6.52377 4.59217 6.5673 4.70594 6.634L7.30394 8.134C7.53361 8.26661 7.7012 8.48503 7.76984 8.7412C7.83848 8.99737 7.80254 9.27032 7.66994 9.5Z" fill="rgba(163, 50, 11, 1)"/>
                            </svg>
                        </div>
                        <h3 className="bttm-title-com">Delivering uncompromising quality<br />with 99.99% uptime.</h3>
                    </div>
                    <div className="card-com">
                        <div className="card-top">
                            <h3 className="top-title-com">Built for Growth,<br />Made to Last</h3>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M5 3V19H21V21H3V3H5ZM20.293 6.293L21.707 7.707L16 13.414L13 10.415L8.707 14.707L7.293 13.293L13 7.586L16 10.585L20.293 6.293V6.293Z" fill="rgba(163, 50, 11, 1)"/>
                            </svg>
                        </div>
                        <h3 className="bttm-title-com">Scale at your pace, without<br />limits or inflated costs.</h3>
                    </div>
                    <div className="card-com">
                        <div className="card-top">
                            <h3 className="top-title-com">Seamless &<br />Intuitive</h3>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M11.602 13.76L13.014 15.172L21.48 6.706L22.894 8.12L13.014 18L6.65 11.636L8.064 10.222L10.189 12.347L11.602 13.759V13.76ZM11.604 10.932L16.556 5.979L17.966 7.389L13.014 12.342L11.604 10.932ZM8.777 16.587L7.364 18L1 11.636L2.414 10.222L3.827 11.635L3.826 11.636L8.777 16.587V16.587Z" fill="rgba(163, 50, 11, 1)"/>
                            </svg>
                        </div>
                        <h3 className="bttm-title-com">Technology that just works, without<br />the technical headache.</h3>
                    </div>
                </div>
            </div>
            <div className="solutions-section">
                <div className="solutions-wrap">
                    <div className="solutions-txt">
                        <h2>Our solutions are<br />reimagined for you</h2>
                        <h3>Our solutions are tailored to make sure every conversation, from quick calls to complex discussions, flows effortlessly.</h3>
                        <a className="sol-cta" onClick={() => navigate('/contact')}>
                            Get started
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="#A3320B">
                                <path d="M10.7813 7.33336L7.20529 3.75736L8.14796 2.8147L13.3333 8.00003L8.14796 13.1854L7.20529 12.2427L10.7813 8.6667H2.66663V7.33336H10.7813Z" fill="A3320B"/>
                            </svg>
                        </a>
                    </div>
                    <div className="solution-img">
                        <img src="/ring.svg"/>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Home;