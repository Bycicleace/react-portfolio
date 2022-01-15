import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Nav />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
