import { FaDesktop } from "react-icons/fa6";
import { FaCog } from "react-icons/fa";
import { FaPencilRuler } from "react-icons/fa";
import { FaCamera } from "react-icons/fa";
function Services() {
  return (
    <div>
      <div className="services">
        <div className="container">
          <div className="main-heading">
            <h2>Services</h2>
            <p>
              Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Mauris blandit aliquet elit, eget
              tincidunt.
            </p>
          </div>
          <div className="services-container">
            <div className="srv-box">
              <i><FaDesktop size={50}/></i>
              <div className="text">
                <h3>Vorem amet intuitive</h3>
                <p>
                  Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Mauris blandit aliquet
                  elit, eget
                  tincidunt nibh pulvinar a. Curabitur aliquet quam.
                </p>
              </div>
            </div>
            <div className="srv-box">
              <i><FaCog size={50}/></i>
              <div className="text">
                <h3>Vorem amet intuitive</h3>
                <p>
                  Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Mauris blandit aliquet
                  elit, eget
                  tincidunt nibh pulvinar a. Curabitur aliquet quam.
                </p>
              </div>
            </div>
            <div className="srv-box">
              <i><FaPencilRuler size={50} /></i>
              <div className="text">
                <h3>Vorem amet intuitive</h3>
                <p>
                  Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Mauris blandit aliquet
                  elit, eget
                  tincidunt nibh pulvinar a. Curabitur aliquet quam.
                </p>
              </div>
            </div>
            <div className="srv-box">
              <i><FaCamera size={50} /></i>
              <div className="text">
                <h3>Vorem amet intuitive</h3>
                <p>
                  Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Mauris blandit aliquet
                  elit, eget
                  tincidunt nibh pulvinar a. Curabitur aliquet quam.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Services;