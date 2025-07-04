import Contact from "@/components/Home/Contact";
import Footer from "@/components/Footer";
import About from "@/components/Home/About";
import Projects from "@/components/Home/Projects";
import TechStack from "@/components/Home/TechStack";

export default function HomePage() {
  return (
    <>
      <div className="max-w-4xl px-6 mx-auto pt-25">
        <About />
        <Projects />
        <TechStack />
        <Contact />
      </div>
      <Footer />
    </>
  );
}
