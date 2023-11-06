import logo from './image/logo.png';
import { BsSearch } from "react-icons/bs";
import './App.css';
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
function App() {
  return (
    <div>
      <header>
        <div className="container">
          <a href="#" class="logo">
            <img src={logo} alt="Logo" />
          </a>
          <nav>
            <ul>
              <li><a className="active" href="#">Home</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Portfolio</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
            <div className="form">
              <i><BsSearch /></i>
            </div>
          </nav>
        </div>
      </header>

      <div className="landing">
        <div className="overlay"></div>
        <div className="text">
          <div className="content">
            <h2>
              Hello World!<br />
              We Are Kasper We Make Art.
            </h2>
            <p>
              Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Mauris blandit aliquet elit, eget
              tincidunt
              nibh pulvinar a. Curabitur aliquet quam. Accumsan id imperdiet et, porttitor at sem. Mauris blandit
              aliquet
              elit, eget tincidunt.
            </p>
          </div>
        </div>
        <ul className="bullets">
          <li></li>
          <li className="active"></li>
          <li></li>
        </ul>
      </div>
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
