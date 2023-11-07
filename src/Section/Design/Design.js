import mobile from "../../image/mobile.png";
import "./design.css"
const Design = () => {
  return (
    <div className="design">
      <div className="image">
        <img src={mobile} alt="Mobile" />
      </div>
      <div className="text">
        <h2>Our Design Comes With... </h2>
        <ul>
          <li>Responsive Design</li>
          <li>Modern And Clean Design</li>
          <li>Clean Code</li>
          <li>Browser Friendly</li>
        </ul>
      </div>
    </div>
  )
}
export default Design;