import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Skills from "./components/skills/Skills";
import Services from "./components/services/Services";
import Projects from "./components/projects/Projects";
import Qualifications from './components/qualifications/Qualifications';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';


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
        <Contact />
        <Footer />
      </main>
    </>
  )
}

export default App
