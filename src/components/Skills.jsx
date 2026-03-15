import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const row1 = [
    'Python', 'JavaScript', 'Java', 'HTML5', 'CSS3',
    'React', 'Figma', 'Photoshop', 'Adobe Suite',
    'ChatGPT', 'Claude AI', 'GitHub'
];

const row2 = [
    'Gemini', 'Loveable', 'Cursor', 'VS Code',
    'Lightroom', 'CapCut', 'UI/UX Design',
    'Wireframing', 'Prototyping', 'Typography',
    'Color Theory', 'Data Science'
];

const Skills = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Infinite marquee row 1 (Left)
            gsap.to('.track-left', {
                xPercent: -50,
                duration: 35,
                ease: 'none',
                repeat: -1,
            });

            // Infinite marquee row 2 (Right)
            gsap.to('.track-right', {
                xPercent: 50,
                duration: 40,
                ease: 'none',
                repeat: -1,
            });
            // Initialize right track position
            gsap.set('.track-right', { xPercent: -50 });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    // Helper to double the array for seamless looping
    const duplicatedRow1 = [...row1, ...row1, ...row1];
    const duplicatedRow2 = [...row2, ...row2, ...row2];

    return (
        <section id="skills" ref={sectionRef} className="py-24 bg-cream overflow-hidden border-y border-ink/5">

            <div className="text-center mb-16 px-6 relative z-10">
                <h2 className="font-hand text-4xl text-lavender mb-2">Expertise</h2>
                <h3 className="font-display font-black text-4xl text-ink">
                    Tools & Technologies
                </h3>
            </div>

            <div className="relative w-full left-0 right-0 flex flex-col gap-6 transform -rotate-2 scale-105 origin-center my-10">

                {/* Row 1: Scrolling Left */}
                <div className="flex w-[300vw] overflow-hidden">
                    <div className="track-left flex gap-6 items-center whitespace-nowrap pl-6">
                        {duplicatedRow1.map((skill, index) => (
                            <div
                                key={`r1-${index}`}
                                className="px-8 py-4 bg-white/60 backdrop-blur-md rounded-2xl border border-white/40 shadow-[0_8px_30px_rgb(0,0,0,0.04)] text-2xl font-bold text-ink2 hover:text-coral transition-colors hover:scale-[1.02] cursor-default"
                            >
                                {skill}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Row 2: Scrolling Right */}
                <div className="flex w-[300vw] overflow-hidden -ml-[100vw]">
                    <div className="track-right flex gap-6 items-center whitespace-nowrap pl-6">
                        {duplicatedRow2.map((skill, index) => (
                            <div
                                key={`r2-${index}`}
                                className="px-8 py-4 bg-white/60 backdrop-blur-md rounded-2xl border border-white/40 shadow-[0_8px_30px_rgb(0,0,0,0.04)] text-2xl font-bold text-ink2 hover:text-lavender transition-colors hover:scale-[1.02] cursor-default"
                            >
                                {skill}
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Skills;
