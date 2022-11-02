import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./containers/home";
import About from "./containers/about";
import Skills from "./containers/skills";
import Resume from "./containers/resume";
import Portfolio from "./containers/portfolio";
import Contact from "./containers/contact";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      {/* Particles JS */}

      {/* NavBar Component */}
      <NavBar />
      {/* Main Page Content */}
      <Routes>
        {/* Create all Routes */}
        <Route path="/" index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
