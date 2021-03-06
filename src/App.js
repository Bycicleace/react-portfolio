import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Resume from './components/Resume';

function App() {
  const [currentNavigation, setCurrentNavigation] = useState('about');
  return (
    <div className="App">
      <Header
        currentNavigation = {currentNavigation}
        setCurrentNavigation = {setCurrentNavigation}
      />
      {currentNavigation === 'about' && <About />}
      {currentNavigation === 'projects' && <Projects />}
      {currentNavigation === 'resume' && <Resume />}
      {currentNavigation === 'contact' && <Contact />}
      <Footer />
    </div>
  );
}

export default App;
