import logo from '../../image/logo.png';
import { BsSearch } from "react-icons/bs";
import "./header.css";

const Header = () => {
    return (
        <div>
            <header>
                <div className="container">
                    <a href="#" className="logo">
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
        </div>
    )
}
export default Header;