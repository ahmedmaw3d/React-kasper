import { FaMugHot } from "react-icons/fa";
import { AiOutlineFolder } from "react-icons/ai";
import { BiEnvelope } from "react-icons/bi";
import { BsTrophy } from "react-icons/bs";
function stats() {

  let Stats = [
    {
      image: <FaMugHot size={20} />,
      number: 1.236,
      title: "Coffee Drinks"
    },
    {
      image: <AiOutlineFolder size={20} />,
      number: 256,
      title: "Completed Projects"
    },
    {
      image: <BiEnvelope size={20} />,
      number: 1.743,
      title: "Mail Sent"
    },
    {
      image: <BsTrophy size={20} />,
      number: 17,
      title: "Awards Received"
    }
  ];
  return (
    <div>
      <div className="stats">
        <div className="container">
          {Stats.map(item => {
            return (
              <div className="box">
                <i>{item.image}</i>
                <div className="number">{item.number}</div>
                <p>{item.title}</p>
              </div>
            )
          })}

        </div>
      </div>
    </div>)
}
export default stats;