import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

const Hero = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Hero Entrance Timeline
            const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

            tl.from('.hero-image', { scale: 0.8, opacity: 0, duration: 0.8, ease: 'back.out(1.5)' })
                .from('.hero-eyebrow', { y: 30, opacity: 0, duration: 0.7, delay: 0.1 }, '-=0.4')
                .from('.hero-name', { y: 50, opacity: 0, duration: 0.9 }, '-=0.4')
                .from('.role-pills', { y: 20, opacity: 0, stagger: 0.15 }, '-=0.6')
                .from('.hero-desc', { y: 20, opacity: 0, duration: 0.7 }, '-=0.4')
                .from('.hero-cta', { y: 20, opacity: 0, duration: 0.6 }, '-=0.3');

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden pointer-events-none">

            {/* Main Content */}
            <div className="container mx-auto px-6 md:px-12 relative z-10 text-center max-w-4xl pointer-events-auto">


                <h2 className="hero-eyebrow font-hand text-4xl md:text-5xl text-coral mb-4">
                    Hello, I'm —
                </h2>

                <h1 className="hero-name font-display font-black text-6xl md:text-8xl lg:text-[9vw] leading-tight tracking-tighter mb-8 bg-gradient-to-br from-coral via-gold to-rose bg-clip-text text-transparent italic drop-shadow-sm">
                    Terry Paxton P J
                </h1>

                <div className="flex flex-wrap justify-center gap-3 mb-8">
                    {['Software Developer', 'UI/UX Designer'].map((role, i) => (
                        <span
                            key={i}
                            className="role-pills px-6 py-2 rounded-full border border-ink/10 bg-white/70 backdrop-blur-md text-ink2 font-semibold text-sm tracking-wide shadow-sm"
                        >
                            {role}
                        </span>
                    ))}
                </div>

                <p className="hero-desc text-lg md:text-xl text-ink2/80 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
                    B.Sc. Computer Science student passionate about crafting beautiful digital experiences. Bridging the gap between robust code and pixel-perfect design.
                </p>

                <div className="hero-cta flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a href="#projects" className="btn-primary group">
                        <span className="relative z-10">View My Work</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-coral to-peach opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
                    </a>
                    <a href="#contact" className="btn-outline group backdrop-blur-sm bg-white/20">
                        <span className="relative z-10">Get In Touch</span>
                        <div className="absolute inset-0 bg-ink opacity-0 group-hover:opacity-[0.03] transition-opacity duration-300 rounded-full" />
                    </a>
                </div>
            </div>

        </section>
    );
};

export default Hero;
