import React from "react";
import Home from './components/Home';
import About from "./components/About";
import Projects from "./components/Projects";
import './styles/App.css';

const App = () => {
  return (
    <div>
      <Home />
      <About />
      <Projects />
    </div>
  );
}

export default App;
