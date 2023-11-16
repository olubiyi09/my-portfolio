"use client"

import React, { useState, useEffect } from 'react';
import './globals.css';
import Navbar from './components/Navbar';
import IntroSection from './components/IntroSection';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const Loader = () => {
  return (
    <div className="loader bg flex justify-center items-center h-screen w-screen">
      <img src="loading.svg" alt="Loading..." />
    </div>
  );
};

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <section>
      {loading ? (
        <div className="bg flex justify-center items-center h-screen w-screen">
          <Loader />
        </div>
      ) : (
        <div>
          <Navbar />
          <IntroSection />
          <About />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </div>
      )}
    </section>
  );
};

export default Home;
