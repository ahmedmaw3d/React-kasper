import about from "../image/about.png";

function About() {
  return (<div>
    <div className="about">
      <div className="container">
        <div className="main-heading">
          <h2>About Us</h2>
          <p>
            Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Mauris blandit aliquet elit, eget
            tincidunt.
          </p>
        </div>
        <img src={about} alt="" />
      </div>
    </div>
  </div>)
}
export default About