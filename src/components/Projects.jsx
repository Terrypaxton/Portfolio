import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
    {
        title: "Portfolio Website",
        tags: "HTML · CSS · JS · Figma",
        desc: "Responsive personal portfolio featuring dual career paths. Designed with Figma prototyping and built using modern web development practices including custom GSAP animations.",
        stack: ["HTML5", "CSS3", "JavaScript", "React", "GSAP"],
        link: "#",
        color: "coral"
    },
    {
        title: "Lumina Library System",
        tags: "Java · APIs · Vanilla JS",
        desc: "A comprehensive Java-based Library Management System featuring a custom HTTP server REST API and a web-based Dashboard to manage the catalog (Add, Issue, Return, Delete).",
        stack: ["Java (JDK Server)", "HTML5", "Vanilla CSS", "JavaScript"],
        link: "#",
        color: "lavender"
    }
];

const Projects = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Stagger reveal from bottom
            gsap.from('.project-card', {
                scrollTrigger: {
                    trigger: '.projects-grid',
                    start: 'top 80%',
                },
                y: 80,
                opacity: 0,
                stagger: 0.2,
                duration: 0.9,
                ease: 'back.out(1.5)'
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="projects" ref={sectionRef} className="py-24 bg-white relative">
            <div className="container mx-auto px-6 md:px-12">

                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div>
                        <h2 className="font-hand text-4xl text-mint mb-2">My Work</h2>
                        <h3 className="font-display font-black text-4xl md:text-5xl text-ink">
                            Featured Projects
                        </h3>
                    </div>
                    <p className="text-ink2/80 max-w-md text-lg">
                        A selection of my recent work showcasing my dual expertise in development and design.
                    </p>
                </div>

                <div className="projects-grid grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
                    {projects.map((project, i) => (
                        <motion.div
                            key={i}
                            className="project-card group relative bg-cream rounded-[2rem] p-8 md:p-10 shadow-xl shadow-ink/5 border border-ink/5"
                            whileHover={{ y: -10, rotate: i % 2 === 0 ? 0.5 : -0.5 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        >
                            {/* Background Glow */}
                            <div className={`absolute inset-0 bg-${project.color}/5 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                            <div className="relative z-10 h-full flex flex-col">
                                <div className="flex justify-between items-start mb-6">
                                    <span className={`px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-${project.color}/10 text-${project.color}`}>
                                        {project.tags}
                                    </span>
                                    <a href={project.link} className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-ink hover:text-coral shadow-sm hover:scale-110 transition-all">
                                        <ExternalLink size={20} />
                                    </a>
                                </div>

                                <h3 className="font-display font-bold text-3xl text-ink mb-4 group-hover:text-coral transition-colors">
                                    {project.title}
                                </h3>

                                <p className="text-ink2/80 mb-8 leading-relaxed text-lg flex-grow">
                                    {project.desc}
                                </p>

                                <div className="mt-auto">
                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {project.stack.map((tech) => (
                                            <span key={tech} className="text-sm font-medium text-ink2 bg-white px-3 py-1 rounded-md shadow-sm border border-ink/5">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    <a href={project.link} className="inline-flex items-center gap-2 font-bold text-ink hover:text-coral transition-colors group/btn">
                                        <Github size={20} />
                                        <span>View Source Code</span>
                                        <motion.span
                                            className="inline-block"
                                            initial={{ x: 0 }}
                                            whileHover={{ x: 5 }}
                                        >→</motion.span>
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Projects;
