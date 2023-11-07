import './app.css';
import Header from './Section/Hesder/Header';
import Services from './Section/Services/Services';
import Design from './Section/Design/Design';
import Portfolio from './Section/Portfolio/Portfolio';
import Video from './Section/Video/Video';
import About from "./Section/About/About";
import Stats from "./Section/Stats/Stats";
import Skills from './Section/Skills/Skills';
import Quote from './Section/Quote/Quote';
import Subscribe from './Section/Subscribe/Subscribe';
import Pricing from './Section/Pricing/Pricing';
import Contact from './Section/Contact/Contact';
import Footer from './Section/Footer/Footer';
import Landing from './Section/Landing/Landing';
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
