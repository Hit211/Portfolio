import "./Hero.css";
import image from "../assets/image.jpg";                     
import { Link } from "react-router-dom";
function Hero() {
  return (
    <div className="hero">
        <div className="mask">
            <img className="intro-img" src={image} alt="Introimg" />
        </div>
        <div className="content">
            <p>HI, I AM A DEVELOPER</p>
            <h1>MERN STACK DEVELOPER</h1>
            <div>
                <Link to='/project' className="btn">Projects</Link>
                <Link to='/contact' className="btn btn-light">Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default Hero