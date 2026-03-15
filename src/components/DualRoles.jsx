import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Code2, Palette } from 'lucide-react';

const DualRoles = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Flip cards in from the sides
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 75%',
                    toggleActions: 'play none none reverse'
                }
            });

            tl.from('.role-card-left', {
                x: -100,
                opacity: 0,
                rotationY: 45,
                duration: 0.8,
                ease: 'power3.out'
            })
                .from('.role-card-right', {
                    x: 100,
                    opacity: 0,
                    rotationY: -45,
                    duration: 0.8,
                    ease: 'power3.out'
                }, '-=0.6'); // overlap

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="roles" ref={sectionRef} className="py-24 bg-cream relative overflow-hidden">
            <div className="container mx-auto px-6 md:px-12">

                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="font-hand text-4xl text-peach mb-2">Two Paths</h2>
                    <h3 className="font-display font-black text-4xl md:text-5xl text-ink">
                        One Unified Vision
                    </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 perspective-1000">

                    {/* Card A: Software Developer */}
                    <div className="role-card-left group relative bg-white rounded-[2rem] p-8 md:p-10 shadow-xl shadow-ink/5 border border-ink/5 hover:border-coral/30 transition-colors duration-500 flex flex-col h-full transform-gpu">
                        <div className="absolute inset-0 bg-gradient-to-br from-coral/5 to-transparent rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="relative z-10">
                            <div className="w-16 h-16 rounded-2xl bg-coral/10 text-coral flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                                <Code2 size={32} strokeWidth={2.5} />
                            </div>

                            <h3 className="font-display font-bold text-3xl text-ink mb-4">Software Developer</h3>

                            <p className="text-ink2/80 mb-8 leading-relaxed">
                                Building robust, scalable applications from the ground up. I focus on writing clean, efficient code and leveraging AI tools to accelerate development and solve complex problems.
                            </p>

                            <div className="mt-auto">
                                <h4 className="text-sm font-bold uppercase tracking-wider text-muted mb-3 border-b border-ink/10 pb-2">Core Tech</h4>
                                <div className="flex flex-wrap gap-2">
                                    {['Python', 'JavaScript', 'Java', 'HTML/CSS', 'GitHub', 'AI Tools'].map((tech) => (
                                        <span key={tech} className="px-3 py-1 bg-coral/10 text-coral font-semibold text-sm rounded-lg">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card B: UI/UX Designer */}
                    <div className="role-card-right group relative bg-white rounded-[2rem] p-8 md:p-10 shadow-xl shadow-ink/5 border border-ink/5 hover:border-lavender/30 transition-colors duration-500 flex flex-col h-full transform-gpu">
                        <div className="absolute inset-0 bg-gradient-to-br from-lavender/5 to-transparent rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="relative z-10">
                            <div className="w-16 h-16 rounded-2xl bg-lavender/10 text-lavender flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                                <Palette size={32} strokeWidth={2.5} />
                            </div>

                            <h3 className="font-display font-bold text-3xl text-ink mb-4">UI/UX Designer</h3>

                            <p className="text-ink2/80 mb-8 leading-relaxed">
                                Crafting intuitive, user-centered digital experiences. I blend color theory, typography, and interactive prototyping to ensure interfaces are as functional as they are beautiful.
                            </p>

                            <div className="mt-auto">
                                <h4 className="text-sm font-bold uppercase tracking-wider text-muted mb-3 border-b border-ink/10 pb-2">Tools & Skills</h4>
                                <div className="flex flex-wrap gap-2">
                                    {['Figma', 'Photoshop', 'Adobe Suite', 'Prototyping', 'Typography', 'Brand Identity'].map((tech) => (
                                        <span key={tech} className="px-3 py-1 bg-lavender/10 text-lavender font-semibold text-sm rounded-lg">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default DualRoles;
