import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import gsap from 'gsap';
import imageSrc from '../assets/image.jpeg';

const About = () => {
    const sectionRef = useRef(null);
    const textRef = useRef(null);

    // Framer Motion inView for the visual card stack
    const cardStackRef = useRef(null);
    const isInView = useInView(cardStackRef, { threshold: 0.3, triggerOnce: true });

    const cardContainer = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
    };

    const cardItem = {
        hidden: { opacity: 0, scale: 0.8, y: 30 },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
        }
    };

    useEffect(() => {
        // GSAP ScrollTrigger fade-up for text on the right
        const ctx = gsap.context(() => {
            gsap.from('.gsap-fade-up', {
                scrollTrigger: {
                    trigger: textRef.current,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse'
                },
                y: 40,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: 'power3.out'
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="about" ref={sectionRef} className="py-24 bg-white relative">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left: Visual Card Stack (Framer Motion) */}
                    <motion.div
                        ref={cardStackRef}
                        variants={cardContainer}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        className="relative h-[480px] w-full max-w-md mx-auto lg:mx-0 flex items-center justify-center"
                    >
                        {/* Main Image/Text Card */}
                        <motion.div
                            variants={cardItem}
                            className="absolute z-20 w-[300px] h-[380px] rounded-3xl bg-cream border border-ink/5 p-8 flex flex-col justify-end shadow-2xl shadow-ink/5 overflow-hidden"
                        >
                            <img src={imageSrc} alt="Profile" className="absolute inset-0 w-full h-full object-cover scale-[1.3] object-[70%_20%] z-0" />
                            <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/40 to-transparent z-10" />
                            <div className="relative z-20">
                                <h3 className="font-display font-bold text-2xl text-white mb-2 leading-tight">
                                    CS Student &<br />Creative Developer
                                </h3>
                                <p className="text-white/80 text-sm font-medium">Sacred Heart College (Autonomous)</p>
                            </div>
                        </motion.div>

                        {/* Floating Stat Card 1 */}
                        <motion.div
                            variants={cardItem}
                            className="absolute top-10 lg:top-4 right-0 lg:-right-12 z-30 glass rounded-2xl p-5 flex items-center gap-4 w-48 shadow-xl"
                        >
                            <div className="w-12 h-12 rounded-full bg-peach/20 flex items-center justify-center text-peach font-black text-xl">
                                2+
                            </div>
                            <div className="font-bold text-ink text-sm">Real-World<br />Projects</div>
                        </motion.div>

                        {/* Floating Stat Card 2 */}
                        <motion.div
                            variants={cardItem}
                            className="absolute bottom-10 lg:bottom-4 left-0 lg:-left-12 z-30 glass rounded-2xl p-5 flex items-center gap-4 w-52 shadow-xl"
                        >
                            <div className="w-12 h-12 rounded-full bg-mint/20 flex items-center justify-center text-mint font-black text-xl">
                                3+
                            </div>
                            <div className="font-bold text-ink text-sm">Technical<br />Certifications</div>
                        </motion.div>

                        {/* Decorative background shape */}
                        <div className="absolute inset-0 bg-lavender/10 rounded-full blur-3xl transform -rotate-12 scale-110 z-0"></div>
                    </motion.div>

                    {/* Right: Text Content (GSAP) */}
                    <div ref={textRef} className="max-w-xl">
                        <h4 className="gsap-fade-up font-hand text-3xl text-lavender mb-3">
                            My Story
                        </h4>
                        <h2 className="gsap-fade-up font-display font-black text-4xl md:text-5xl text-ink mb-6">
                            Bridging Design & Development
                        </h2>

                        <p className="gsap-fade-up text-lg text-ink2/80 mb-6 leading-relaxed">
                            I'm Terry Paxton PJ, a B.Sc. Computer Science student from Vellore, currently studying at Sacred Heart College. My journey in tech is driven by an obsession with not just how software works, but how it feels to the people using it.
                        </p>

                        <p className="gsap-fade-up text-lg text-ink2/80 mb-8 leading-relaxed">
                            Wearing two hats—as a developer and a designer—allows me to envision a product from its initial wireframe to its final, deployed state. By leveraging modern AI tools alongside traditional coding and design principles, I build scalable applications with intuitive, beautiful interfaces.
                        </p>

                        <div className="gsap-fade-up flex items-center gap-6 pt-4 border-t border-ink/10">
                            <div>
                                <span className="block font-black text-ink text-2xl">71%</span>
                                <span className="text-sm text-muted uppercase tracking-wider font-bold">College CGPA</span>
                            </div>
                            <div className="w-px h-10 bg-ink/10"></div>
                            <div>
                                <span className="block font-black text-ink text-2xl">62%</span>
                                <span className="text-sm text-muted uppercase tracking-wider font-bold">HSC Score</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;
