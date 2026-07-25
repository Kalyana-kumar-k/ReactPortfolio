import { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header/Header";
import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";
import Skills from "./Components/Skills/Skills";
import Contact from "./Components/Contact/Contact";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";
import Footer from "./Components/Footer/Footer";
import "./app.css";

function App() {
  return (
    <div className="app" id="top">
      <Header />

      <main>
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <ScrollToTop />
      <Footer />
    </div>
  );
}

export default App;
