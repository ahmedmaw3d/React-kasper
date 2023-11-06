import logo from "../image/logo.png";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
function Footer() {
  return (<div>
    <div className="footer">
      <div className="container">
        <img src={logo} alt="Logo" />
        <p>We Are Social</p>
        <div className="social-icons">
          <i><FaFacebookF s /></i>
          <i><BsTwitter /></i>
          <i><AiFillHome /></i>
          <i><BsLinkedin /></i>
        </div>
        <p className="copyright">&copy; 2021 <span>Kasper</span> All Right Reserved</p>
      </div>
    </div>
  </div>)
}
export default Footer;