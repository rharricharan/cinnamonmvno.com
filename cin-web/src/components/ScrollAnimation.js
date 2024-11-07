"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import React, { useRef } from "react";

const ScrollAnimation = ({ children, ...props }) => {
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

    return (
        <section
            className="relative flex flex-col items-center justify-center"
            {...props}
        >
            <motion.div
                ref={contentRef}
                className="min-h-screen text-5xl font-bold leading-snug text-center max-w-[80ch]"
                style={{ opacity: contentOpacity }}
            >
                {children}
            </motion.div>
        </section>
    );
};

export default ScrollAnimation;