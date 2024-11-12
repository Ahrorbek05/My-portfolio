import "./app.scss";
import Contact from "./components/contact/Contact";
import About from "./components/about/About";
import Cursor from "./components/cursor/Cursor";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";

const App = () => {
  return (
    <div>
      <Cursor />
      <section id="Homepage">
        <Navbar />
        <Hero />
        <section id="About">
          <About />
        </section>
      </section>
        <Projects />
      <section id="Contact">
        <Contact />
      </section>
    </div>
  );
};

export default App;