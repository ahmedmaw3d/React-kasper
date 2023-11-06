import skill from "../image/skills-01.jpg";
import skills from "../image/skills-02.jpg";


function Skills() {
  return (<div>
    <div className="our-skills">
      <div className="container">
        <div className="testimonials">
          <h3>Testimonials</h3>
          <p>
            Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Mauris blandit aliquet elit, eget
            tincidunt.
          </p>
          <div className="content">
            <img src={skill} alt="" />
            <div className="text">
              Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Mauris blandit aliquet elit, eget
              tincidunt.
              <p>John Doe, CEO</p>
            </div>
          </div>
          <div className="content">
            <img src={skills} alt="" />
            <div className="text">
              Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Mauris blandit aliquet elit, eget
              tincidunt.
              <p>John Doe, CEO</p>
            </div>
          </div>
          <ul className="bullets">
            <li></li>
            <li className="active"></li>
            <li></li>
          </ul>
        </div>
        <div className="skills">
          <h3>Skills</h3>
          <p>
            Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Mauris blandit aliquet elit, eget
            tincidunt.
          </p>
          <div className="prog-holder">
            <h4>Adobe</h4>
            <div className="prog">
              <span style={{width: "90%"}} data-progress="90%"></span>
            </div>
          </div>
          <div className="prog-holder">
            <h4>Html &amp; Css</h4>
            <div className="prog">
              <span style={{width: "85%"}} data-progress="85%"></span>
            </div>
          </div>
          <div className="prog-holder">
            <h4>JavaScript</h4>
            <div className="prog">
              <span style={{width: "80%"}} data-progress="80%"></span>
            </div>
          </div>
          <div className="prog-holder">
            <h4>Php</h4>
            <div className="prog">
              <span style={{width: "30%"}} data-progress="90%"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>)
}
export default Skills