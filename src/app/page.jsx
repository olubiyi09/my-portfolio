import "./globals.css";
import Navbar from "./components/Navbar";
import IntroSection from "./components/IntroSection";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const Home = () => {
  return (
    <section>
      <div>
        <Navbar />
        <IntroSection />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </section>
  );
};

export default Home;
