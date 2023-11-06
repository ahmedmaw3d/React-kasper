import{FaMugHot}from "react-icons/fa";
import {AiOutlineFolder}from "react-icons/ai";
import {BiEnvelope}from "react-icons/bi";
import {BsTrophy}from "react-icons/bs";
function stats() {
  return (
  <div>
    <div className="stats">
      <div className="container">
        <div className="box">
          <i><FaMugHot size={20}/></i>
          <div className="number">1.236</div>
          <p>Coffee Drinks</p>
        </div>
        <div className="box">
          <i><AiOutlineFolder size={20}/></i>
          <div className="number">256</div>
          <p>Completed Projects</p>
        </div>
        <div className="box">
          <i><BiEnvelope size={20}/></i>
          <div className="number">1,743</div>
          <p>Mail Sent</p>
        </div>
        <div className="box">
          <i><BsTrophy size={20}/></i>
          <div className="number">17</div>
          <p>Awards Received</p>
        </div>
      </div>
    </div>
  </div>)
}
export default stats;