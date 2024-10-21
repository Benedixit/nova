import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Newsletter from './components/Newsletter';
import Projects from './components/Projects';
import Services from './/components/Services'
import Advert from './components/Advert';
import Contact from './components/Contact';

function App() {
  return (
    <>
    <Header />
    <Hero />
    <Services />
    <Projects />
    <Newsletter />
    <Advert />
    <Contact />
    <Footer />
    </>
  );
}

export default App;
