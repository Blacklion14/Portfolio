import Header from "./Header.js";
import Home from "./Home.js";
import Projects from "./Projects.js";
import Resume from "./Resume.js";
import About from "./About.js";
import Connect from "./Connect.js";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  document.body.classList.add("dark-theme");
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/about" element={<About />} />
          <Route path="/connect" element={<Connect />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
