import './AboutContentStyle.css';
import { Link } from "react-router-dom";
import React1 from "../assets/React1.avif";
import React2 from "../assets/React2.webp";

const AboutContent = () => {
    return (
        <div className="about">
            <div className="left">
                <h1>Who Am I?</h1>
                <p>
                    Im a react front-end developer. I create
                    responsive secure websites for
                    my clients.
                </p>
                <Link to="/contact">
                    <button className="btn">Contact</button>
                </Link>
            </div>
            <div className="right">
                <div className="img-container">
                    <div className="img-stack top">
                        <img src={React1} className="img" alt="React development"/>
                    </div>
                    <div className="img-stack bottom">
                        <img src={React2} className="img" alt="React code"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutContent;