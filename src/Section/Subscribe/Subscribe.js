import { BiEnvelope } from "react-icons/bi";
import "./subscribe.css";

const Subscribe = () => {
    return (
        <div>
            <div className="subscribe">
                <div className="container">
                    <form action="">
                        <i><BiEnvelope size={20} /></i>
                        <input type="email" name="mail" placeholder="your Email" />
                        <input type="submit" name="Subscribe" />
                    </form>
                    <p> Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Mauris blandit aliquet elit, eget
                        tincidunt.</p>
                </div>
            </div>
        </div>)
}
export default Subscribe;