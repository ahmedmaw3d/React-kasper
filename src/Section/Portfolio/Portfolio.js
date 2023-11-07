import shuffle1 from "../../image/shuffle-01.jpg";
import shuffle2 from "../../image/shuffle-02.jpg";
import shuffle3 from "../../image/shuffle-03.jpg";
import shuffle4 from "../../image/shuffle-04.jpg";
import shuffle5 from "../../image/shuffle-05.jpg";
import shuffle6 from "../../image/shuffle-06.jpg";
import shuffle7 from "../../image/shuffle-07.jpg";
import shuffle8 from "../../image/shuffle-08.jpg";
import "./portfolio.css";

const Portfolio = () => {

  const portfolio = [
    { image: shuffle1, title: "Awesome Image", text: "Photography" },
    { image: shuffle2, title: "Awesome Image", text: "Photography" },
    { image: shuffle3, title: "Awesome Image", text: "Photography" },
    { image: shuffle4, title: "Awesome Image", text: "Photography" },
    { image: shuffle5, title: "Awesome Image", text: "Photography" },
    { image: shuffle6, title: "Awesome Image", text: "Photography" },
    { image: shuffle7, title: "Awesome Image", text: "Photography" },
    { image: shuffle8, title: "Awesome Image", text: "Photography" },

  ];
  return (<div>
    <div className="portfolio" id="portfolio">
      <div className="container">
        <div className="main-heading">
          <h2>Portfolio</h2>
          <p>
            Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Mauris blandit aliquet elit, eget
            tincidunt.
          </p>
        </div>
        <ul className="shuffle">
          <li className="active">All</li>
          <li>App</li>
          <li>Photo</li>
          <li>Web</li>
          <li>Print</li>
        </ul>
      </div>
      <div className="imgs-container">
        {portfolio.map(item => {
          return (
            <div className="box">
              <img src={item.image} alt="" />
              <div className="caption">
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </div>
            </div>
          )
        })}

      </div>
      <a href="#" className="more">More</a>
    </div>
  </div>
  )
}
export default Portfolio