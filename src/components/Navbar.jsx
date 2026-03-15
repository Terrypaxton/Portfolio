import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
    { name: 'About', path: '/#about' },
    { name: 'Roles', path: '/#roles' },
    { name: 'Projects', path: '/#projects' },
    { name: 'Skills', path: '/#skills' },
    { name: 'Contact', path: '/#contact' },
];

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Smooth scroll logic for hash links
    const handleNavClick = (e, targetHash) => {
        // If not a hash link, let React Router handle it
        if (!targetHash) return;

        if (e) {
            e.preventDefault();
        }

        setMobileMenuOpen(false);

        // Simple scroll to element if it exists
        const element = document.querySelector(targetHash);
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 80, // Adjust for navbar height
                behavior: 'smooth'
            });
        }
    };

    return (
        <>
            <nav
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'py-4 glass' : 'py-6 bg-transparent'
                    }`}
            >
                <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">

                    {/* Logo */}
                    <NavLink
                        to="/"
                        className="text-2xl font-display font-black italic bg-gradient-to-r from-coral to-lavender bg-clip-text text-transparent hover:scale-105 transition-transform interactive"
                    >
                        Terry Paxton
                    </NavLink>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.path}
                                onClick={(e) => handleNavClick(e, link.path.substring(1))}
                                className="relative text-ink2 font-medium hover:text-coral transition-colors py-2 interactive group"
                            >
                                {link.name}
                                {/* Active Indicator / Hover Animation */}
                                <motion.div
                                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-coral origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"
                                />
                            </a>
                        ))}
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden text-ink2 p-2 hover:bg-black/5 rounded-full transition-colors interactive"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 bg-cream/95 backdrop-blur-xl z-40 transition-transform duration-500 ease-in-out md:hidden ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                <div className="flex flex-col items-center justify-center h-full space-y-8">
                    {navLinks.map((link, i) => (
                        <motion.a
                            key={link.name}
                            href={link.path}
                            onClick={(e) => handleNavClick(e, link.path.substring(1))}
                            initial={{ opacity: 0, y: 20 }}
                            animate={mobileMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ delay: 0.1 * i, duration: 0.4 }}
                            className="text-3xl font-display font-bold text-ink hover:text-coral transition-colors"
                        >
                            {link.name}
                        </motion.a>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Navbar;
