import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Skills from "./components/skills/Skills";
import Services from "./components/services/Services";
import Projects from "./components/projects/Projects";
import Qualifications from './components/qualifications/Qualifications';

function App() {

  return (
    <>
      <Header/>
      <main className="main">
        <Home />
        <Skills />
        <Services />
        <Qualifications />
        <Projects />
      </main>
    </>
  )
}

export default App
