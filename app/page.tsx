import Intro from "@/components/Intro";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Services from "@/components/Services";

export default function Home() {
  return (
    <main className="text-[#999999] md:ml-[31%] min-h-screen max-w-7xl mx-auto">
      <Intro />
      <About />
      <Experience />
      <Services />
    </main>
  );
}
