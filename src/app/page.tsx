import Hero from '@/components/Hero';
import Experience from '@/components/Experience';
import OpenSource from '@/components/OpenSource';
import Projects from '@/components/Projects';
import About from '@/components/About';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <Experience />
      <OpenSource />
      <Projects />
      <About />
      <Contact />
    </>
  );
}
