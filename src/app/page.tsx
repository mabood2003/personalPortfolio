import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <Stats />
      <About />
      <Experience />
      <Projects />
      <Blog />
      <Contact />
      <Footer />
      <BackToTop />
    </>
  );
}
