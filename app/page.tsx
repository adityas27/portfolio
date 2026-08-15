import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { ProofMap } from "@/components/sections/ProofMap";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Education } from "@/components/sections/Education";
import { Skills } from "@/components/sections/Skills";
import { Achievements } from "@/components/sections/Achievements";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProofMap />
        <FeaturedProjects />
        <Projects />
        <Experience />
        <Education />
        <Skills />
        <Achievements />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
