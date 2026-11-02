import About from "./components/About/About";
import Contacts from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
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
      <Contacts />
      <Footer />
    </>
  );
}
