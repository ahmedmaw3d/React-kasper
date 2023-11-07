import { FaDesktop } from "react-icons/fa6";
import { FaCog } from "react-icons/fa";
import { FaPencilRuler } from "react-icons/fa";
import { FaCamera } from "react-icons/fa";
function Services() {

  let Services = [
    {
      image: <FaDesktop size={50} />,
      title: "Vorem amet intuitive",
      desc: "Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Curabitur aliquet quam."
    },
    {
      image: <FaCog size={50} />,
      title: "Vorem amet intuitive",
      desc: "Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Curabitur aliquet quam."
    },
    {
      image: <FaPencilRuler size={50} />,
      title: "Vorem amet intuitive",
      desc: "Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Curabitur aliquet quam."
    },
    {
      image: <FaCamera size={50} />,
      title: "Vorem amet intuitive",
      desc: "Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Curabitur aliquet quam."
    },
  ]

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
            {Services.map(item => {
              return (
                <div className="srv-box">
                  <i>{item.image}</i>
                  <div className="text">
                    <h3>{item.title}</h3>
                    <p>
                      {item.desc}
                    </p>
                  </div>
                </div>
              )
            })}

          </div>
        </div>
      </div>
    </div>
  )
}
export default Services;