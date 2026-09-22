import './index.css';
import Seo from './components/Seo';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import WorkHistory from './components/WorkHistory';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Connect from './components/Connect';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Seo />
      {/* Ambient background orbs */}
      <div className="bg-orbs" aria-hidden="true">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
      </div>

      <Navbar />
      <main>
        <Hero />
        <About />
        <WorkHistory />
        <Projects />
        <Skills />
        <Connect />
      </main>
      <Footer />
    </>
  );
}
