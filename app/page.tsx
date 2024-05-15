import Intro from "@/components/Intro";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="text-[#999999] lg:ml-[31%] min-h-screen max-w-7xl mx-auto">
      <Intro />
      <About />
      <Experience />
      <Services />
      <Skills />
      <Contact />
    </main>
  );
}
