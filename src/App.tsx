import About from "./components/About/About";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import TechStack from "./components/TechStack/TechStack";

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <Projects />
      <TechStack />
      <About />
    </>
  );
}
