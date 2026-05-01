import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Stack from "./components/Stack";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Stack />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
