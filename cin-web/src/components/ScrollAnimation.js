"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import React, { useRef } from "react";
import './scroll-animation.css';

const ScrollAnimation = ({ video, setVideo, setBgOpacity, children, ...props }) => {
    const contentRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: contentRef,
        offset: ["start end", "start start"],
    });

    const contentOpacity = useTransform(
        scrollYProgress,
        [0, 0.1, 0.2, 0.8, 0.9, 1],
        [0, 0, 1, 1, 0, 0]
    );

    const bgOpacity = useTransform(
        scrollYProgress,
        [0, 0.2, 0.8, 1],
        [0.7, 0.3, 0.3, 0.7]
    );

    scrollYProgress.on('change', (val) => {
        if (val > 0 || val < 1) {
            setVideo(video)
        }
    })

    bgOpacity.on('change', (val) => {
        setBgOpacity(val);
    })

    return (
        <section
            className="prop-section"
            {...props}
        >
            <motion.div
                ref={contentRef}
                className="motion-class"
                style={{ opacity: contentOpacity }}
            >
                {children}
            </motion.div>
        </section>
    );
};

export default ScrollAnimation;