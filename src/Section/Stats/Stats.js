import { FaMugHot } from "react-icons/fa";
import { AiOutlineFolder } from "react-icons/ai";
import { BiEnvelope } from "react-icons/bi";
import { BsTrophy } from "react-icons/bs";
import "./stats.css";

const Stats = () => {

  const stats = [
    {
      image: <FaMugHot size={20} />,
      count: 1.236,
      title: "Coffee Drinks"
    },
    {
      image: <AiOutlineFolder size={20} />,
      count: 256,
      title: "Completed Projects"
    },
    {
      image: <BiEnvelope size={20} />,
      count: 1.743,
      title: "Mail Sent"
    },
    {
      image: <BsTrophy size={20} />,
      count: 17,
      title: "Awards Received"
    }
  ];
  return (
    <div>
      <div className="stats">
        <div className="container">
          {stats.map(item => {
            return (
              <div className="box">
                <i>{item.image}</i>
                <div className="number">{item.count}</div>
                <p>{item.title}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>)
}
export default Stats;