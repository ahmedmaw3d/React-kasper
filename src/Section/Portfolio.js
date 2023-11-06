import shuffle1 from "../image/shuffle-01.jpg"
import shuffle2 from "../image/shuffle-02.jpg"
import shuffle3 from "../image/shuffle-03.jpg"
import shuffle4 from "../image/shuffle-04.jpg"
import shuffle5 from "../image/shuffle-05.jpg"
import shuffle6 from "../image/shuffle-06.jpg"
import shuffle7 from "../image/shuffle-07.jpg"
import shuffle8 from "../image/shuffle-08.jpg"
function Portfolio() {
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
        <div className="box">
          <img src={shuffle1} alt="" />
          <div className="caption">
            <h4>Awesome Image</h4>
            <p>Photography</p>
          </div>
        </div>
        <div className="box">
        <img src={shuffle2} alt="" />
          <div className="caption">
            <h4>Awesome Image</h4>
            <p>Photography</p>
          </div>
        </div>
        <div className="box">
        <img src={shuffle3} alt="" />
          <div className="caption">
            <h4>Awesome Image</h4>
            <p>Photography</p>
          </div>
        </div>
        <div className="box">
        <img src={shuffle4} alt="" />
          <div className="caption">
            <h4>Awesome Image</h4>
            <p>Photography</p>
          </div>
        </div>
        <div className="box">
        <img src={shuffle5} alt="" />
          <div className="caption">
            <h4>Awesome Image</h4>
            <p>Photography</p>
          </div>
        </div>
        <div className="box">
        <img src={shuffle6} alt="" />
          <div className="caption">
            <h4>Awesome Image</h4>
            <p>Photography</p>
          </div>
        </div>
        <div className="box">
        <img src={shuffle7} alt="" />
          <div className="caption">
            <h4>Awesome Image</h4>
            <p>Photography</p>
          </div>
        </div>
        <div className="box">
        <img src={shuffle8} alt="" />
          <div className="caption">
            <h4>Awesome Image</h4>
            <p>Photography</p>
          </div>
        </div>
      </div>
      <a href="#" className="more">More</a>
    </div>
  </div>
  )
}
export default Portfolio