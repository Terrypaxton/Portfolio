import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { Award, Code, PenTool } from 'lucide-react';

const certs = [
    {
        title: "Design Fundamentals with AI",
        issuer: "Adobe",
        icon: <PenTool size={32} className="text-lavender" />,
        color: "lavender",
        bgLine: "bg-lavender",
        hoverBorder: "hover:border-lavender/40",
        gradFrom: "from-lavender/10",
        bgIcon: "bg-lavender/10",
        dotColor: "bg-lavender"
    },
    {
        title: "Python for Data Science, AI & Development",
        issuer: "IBM",
        icon: <Code size={32} className="text-mint" />,
        color: "mint",
        bgLine: "bg-mint",
        hoverBorder: "hover:border-mint/40",
        gradFrom: "from-mint/10",
        bgIcon: "bg-mint/10",
        dotColor: "bg-mint"
    },
    {
        title: "C Programming Core Skills",
        issuer: "Course Certificate",
        icon: <Award size={32} className="text-coral" />,
        color: "coral",
        bgLine: "bg-coral",
        hoverBorder: "hover:border-coral/40",
        gradFrom: "from-coral/10",
        bgIcon: "bg-coral/10",
        dotColor: "bg-coral"
    }
];

const Certifications = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.cert-card', {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 85%',
                },
                y: 60,
                opacity: 0,
                stagger: 0.15,
                duration: 0.8,
                ease: 'power3.out'
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section id="certifications" ref={sectionRef} className="py-24 bg-white">
            <div className="container mx-auto px-6 md:px-12">

                <div className="text-center mb-16">
                    <h2 className="font-hand text-4xl text-peach mb-2">Continuous Learning</h2>
                    <h3 className="font-display font-black text-4xl md:text-5xl text-ink">
                        Certifications
                    </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {certs.map((cert, i) => (
                        <motion.div
                            key={i}
                            className={`cert-card relative bg-cream rounded-3xl p-8 border border-white ${cert.hoverBorder} shadow-xl shadow-ink/5 transition-colors overflow-hidden group`}
                            whileHover={{ scale: 1.04 }}
                            transition={{ type: "spring", stiffness: 400, damping: 25 }}
                        >
                            <div className={`absolute top-0 left-0 w-full h-1 ${cert.bgLine}`} />

                            {/* Internal Glow */}
                            <div className={`absolute inset-0 bg-gradient-to-b ${cert.gradFrom} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                            <div className="relative z-10">
                                <div className={`w-16 h-16 rounded-2xl ${cert.bgIcon} flex items-center justify-center mb-6`}>
                                    {cert.icon}
                                </div>
                                <h4 className="font-display font-bold text-xl text-ink leading-snug mb-3">
                                    {cert.title}
                                </h4>
                                <p className="text-ink2/70 font-semibold uppercase tracking-wider text-sm flex items-center gap-2">
                                    <span className={`w-2 h-2 rounded-full ${cert.dotColor}`}></span>
                                    {cert.issuer}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Certifications;
