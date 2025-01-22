import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Contact from '../components/Contact';
import ScrollButton from '../components/ScrollButton';
import Projects from '@/components/Project';

const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <ScrollButton />
    </>
  );
};

export default Home;