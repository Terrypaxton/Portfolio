import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Components
import Navbar from './components/Navbar';
import LiquidCanvas from './components/LiquidCanvas';
import Hero from './components/Hero';
import About from './components/About';
import DualRoles from './components/DualRoles';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Education from './components/Education';
import Contact from './components/Contact';

gsap.registerPlugin(ScrollTrigger);

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const PageTransition = ({ children }) => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

const Home = () => {
  return (
    <main className="w-full relative overflow-x-hidden">
      <Hero />
      <About />
      <DualRoles />
      <Projects />
      <Certifications />
      <Education />
      <Skills />
      <Contact />
    </main>
  );
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="noise-overlay pointer-events-none"></div>

      {/* Liquid background and interaction element */}
      <LiquidCanvas />

      <div className="min-h-screen relative z-10">
        <Navbar />

        <Routes>
          <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
