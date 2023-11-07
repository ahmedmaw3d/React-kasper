import './app.css';
import Header from './Section/Header';
import Services from './Section/Services';
import Design from './Section/Design';
import Portfolio from './Section/Portfolio';
import Video from './Section/Video';
import About from "./Section/About";
import Stats from "./Section/Stats";
import Skills from './Section/Skills';
import Quote from './Section/Quote';
import Subscribe from './Section/Subscribe';
import Pricing from './Section/Pricing';
import Contact from './Section/Contact';
import Footer from './Section/Footer';
import Landing from './Section/Landing';
function App() {
  return (
    <div>
      <Header/>
      <Landing/>
      <Services />
      <Design />
      <Portfolio />
      <Video />
      <About />
      <Stats />
      <Skills />
      <Quote />
      <Pricing />
      <Subscribe />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
