import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { Mail, Linkedin, Github, Phone } from 'lucide-react';

const Contact = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Floating particles
            gsap.to('.particle', {
                y: 'random(-40, 40)',
                x: 'random(-40, 40)',
                rotation: 'random(0, 360)',
                duration: 'random(3, 8)',
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut',
                stagger: 0.2
            });

            // Scale up reveal
            gsap.from('.contact-card', {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 80%',
                },
                scale: 0.95,
                opacity: 0,
                y: 40,
                duration: 0.8,
                ease: 'power3.out'
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section id="contact" ref={containerRef} className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-6 md:px-12 relative z-10">

                <div className="contact-card relative w-full rounded-[3rem] p-10 md:p-16 lg:p-24 overflow-hidden shadow-2xl shadow-ink/20 bg-gradient-to-br from-gold via-rose to-ink text-center">

                    {/* Noise texture for the card */}
                    <div className="absolute inset-0 opacity-10 mix-blend-overlay pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }} />

                    {/* Animated particles */}
                    <div className="absolute top-10 left-10 w-8 h-8 rounded-full bg-white/20 blur-sm particle" />
                    <div className="absolute bottom-20 right-10 w-12 h-12 rounded-full bg-white/20 blur-md particle" />
                    <div className="absolute top-20 right-1/4 w-6 h-6 rounded-full bg-white/30 blur-sm particle" />
                    <div className="absolute bottom-10 left-1/3 w-10 h-10 rounded-full bg-white/10 blur-sm particle" />

                    <div className="relative z-20 max-w-3xl mx-auto">
                        <h2 className="font-display font-black text-5xl md:text-7xl text-white mb-6 drop-shadow-md">
                            Open for Opportunities
                        </h2>

                        <p className="text-white/90 font-medium text-xl md:text-2xl mb-12 flex flex-wrap justify-center gap-4">
                            <span>Internships</span>
                            <span className="opacity-50">•</span>
                            <span>Freelance</span>
                            <span className="opacity-50">•</span>
                            <span>Full-time</span>
                        </p>

                        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                            <a
                                href="mailto:terrypaxton10@gmail.com"
                                className="flex items-center gap-3 px-8 py-4 bg-white rounded-full text-coral font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group interactive"
                            >
                                <Mail size={20} className="group-hover:-translate-y-1 transition-transform" />
                                <span>Email Me</span>
                            </a>

                            <a
                                href="https://linkedin.com/"
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-3 px-8 py-4 bg-white/20 backdrop-blur-md border border-white/30 rounded-full text-white font-bold hover:bg-white/30 transition-all duration-300 interactive"
                            >
                                <Linkedin size={20} />
                                <span>LinkedIn</span>
                            </a>

                            <a
                                href="https://github.com/"
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-3 px-8 py-4 bg-white/20 backdrop-blur-md border border-white/30 rounded-full text-white font-bold hover:bg-white/30 transition-all duration-300 interactive"
                            >
                                <Github size={20} />
                                <span>GitHub</span>
                            </a>

                            <a
                                href="tel:8870756563"
                                className="flex items-center gap-3 px-8 py-4 bg-white/20 backdrop-blur-md border border-white/30 rounded-full text-white font-bold hover:bg-white/30 transition-all duration-300 interactive"
                            >
                                <Phone size={20} />
                                <span>8870756563</span>
                            </a>
                        </div>

                        <p className="mt-16 text-white/70 font-display italic text-lg">
                            "Let's build something beautiful together."
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Contact;
