import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Education = () => {
    const sectionRef = useRef(null);
    const trackLineRef = useRef(null);
    const trackDotRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {

            // Reveal timeline items
            gsap.from('.timeline-item', {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 75%',
                },
                y: 40,
                opacity: 0,
                stagger: 0.3,
                duration: 0.8,
                ease: 'power3.out'
            });

            // Track dot animation
            gsap.to(trackDotRef.current, {
                scrollTrigger: {
                    trigger: trackLineRef.current,
                    start: 'top 60%',
                    end: 'bottom 60%',
                    scrub: 1, // smooth scrubbing
                },
                top: '100%',
                ease: 'none'
            });

            // Line fill animation
            gsap.fromTo('.line-fill',
                { scaleY: 0 },
                {
                    scrollTrigger: {
                        trigger: trackLineRef.current,
                        start: 'top 60%',
                        end: 'bottom 60%',
                        scrub: true,
                    },
                    scaleY: 1,
                    transformOrigin: 'top center',
                    ease: 'none'
                }
            );

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="education" ref={sectionRef} className="py-24 bg-cream relative">
            <div className="container mx-auto px-6 md:px-12">

                <div className="text-center mb-20">
                    <h2 className="font-hand text-4xl text-coral mb-2">My Background</h2>
                    <h3 className="font-display font-black text-4xl md:text-5xl text-ink">
                        Education Timeline
                    </h3>
                </div>

                <div className="max-w-3xl mx-auto flex">

                    {/* Vertical Track */}
                    <div className="relative w-8 md:w-16 flex-shrink-0 flex justify-center mt-2 pb-12">

                        {/* The base line */}
                        <div ref={trackLineRef} className="absolute top-0 bottom-0 w-1 bg-ink/10 rounded-full" id="timeline-line">
                            {/* The fill line */}
                            <div className="line-fill absolute top-0 left-0 w-full h-full bg-gradient-to-b from-coral to-lavender rounded-full" />
                        </div>

                        {/* The traveling dot */}
                        <div
                            ref={trackDotRef}
                            id="track-dot"
                            className="absolute w-5 h-5 bg-white border-4 border-coral rounded-full shadow-[0_0_15px_rgba(255,107,107,0.5)] z-10 -translate-x-1/2 left-1/2 top-0"
                        />
                    </div>

                    {/* Timeline Content */}
                    <div className="flex-grow pl-6 md:pl-8 pb-12 pt-2">

                        {/* Item 1: College */}
                        <div className="timeline-item mb-16 relative">
                            <div className="absolute -left-10 md:-left-16 w-4 h-4 rounded-full bg-coral top-2 shadow-sm hidden md:block" style={{ transform: 'translateX(-50%)' }} />

                            <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-ink/5 relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-coral/5 rounded-bl-[100px] transition-transform group-hover:scale-125 duration-500" />

                                <span className="inline-block px-4 py-1.5 rounded-full bg-ink/5 text-ink2 font-bold text-sm tracking-wide mb-4">
                                    2023 – 2026
                                </span>

                                <h4 className="font-display font-black text-2xl md:text-3xl text-ink mb-2">
                                    B.Sc. Computer Science
                                </h4>

                                <h5 className="text-lg text-ink2/80 font-medium mb-4">
                                    Sacred Heart College (Autonomous), Tirupattur
                                </h5>

                                <div className="inline-flex items-center gap-2 px-4 py-2 bg-cream rounded-xl text-ink border border-ink/5">
                                    <span className="font-bold">CGPA:</span>
                                    <span className="text-coral font-black text-lg">70%</span>
                                </div>
                            </div>
                        </div>

                        {/* Item 2: School */}
                        <div className="timeline-item relative">
                            <div className="absolute -left-10 md:-left-16 w-4 h-4 rounded-full bg-lavender top-2 shadow-sm hidden md:block" style={{ transform: 'translateX(-50%)' }} />

                            <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-ink/5 relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-lavender/5 rounded-bl-[100px] transition-transform group-hover:scale-125 duration-500" />

                                <span className="inline-block px-4 py-1.5 rounded-full bg-ink/5 text-ink2 font-bold text-sm tracking-wide mb-4">
                                    Earlier Education
                                </span>

                                <h4 className="font-display font-black text-2xl md:text-3xl text-ink mb-2">
                                    Higher Secondary (HSC)
                                </h4>

                                <h5 className="text-lg text-ink2/80 font-medium mb-4">
                                    Don Bosco Matriculation Hr. Sec. School, Gandhi Nagar
                                </h5>

                                <div className="inline-flex items-center gap-2 px-4 py-2 bg-cream rounded-xl text-ink border border-ink/5">
                                    <span className="font-bold">Score:</span>
                                    <span className="text-lavender font-black text-lg">59%</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
};

export default Education;
