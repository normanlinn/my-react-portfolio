import "./App.scss";
import { Routes, Route, useLocation } from "react-router-dom";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Home from "./containers/home";
import About from "./containers/about";
import Skills from "./containers/skills";
import Resume from "./containers/resume";
import Portfolio from "./containers/portfolio";
import Contact from "./containers/contact";
import NavBar from "./components/NavBar";
import { particleConfig } from "./helpers/particlesConfig";
import Theme from "./components/Theme";

function App() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const location = useLocation();
  const renderParticlesJSInHomePage =
    location.pathname === "/" || "/my-react-portfolio/";

  return (
    <div className="App">
      {/* Particles JS */}
      {renderParticlesJSInHomePage && (
        <Particles
          id="particles"
          options={particleConfig}
          init={particlesInit}
        />
      )}
      {/* NavBar Component */}
      <div className="App-navbar-wrapper">
        <NavBar />
      </div>
      {/* Main Page Content */}
      <div className="App-main-content-wrapper">
        <Theme />
        <Routes>
          {/* Create all Routes */}
          <Route path="/my-react-portfolio" index element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
