import "./globals.css";
import Navbar from "./components/Navbar";
import IntroSection from "./components/IntroSection";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

const Home = () => {
  return (
    <section>
      <div>
        <Navbar />
        <IntroSection />
        <About />
        <Skills />
        <Projects />
      </div>
    </section>
  );
};

export default Home;
