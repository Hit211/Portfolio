import { FaHome, FaLinkedin, FaMailBulk, FaPhone } from "react-icons/fa"
import "./Footer.css"
import { FaGithub } from "react-icons/fa6"


const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
            <div className="location">
            <FaHome size={20} style={{color:"#fff",marginRight:"2rem"}}/>
            <div>
                <p>Ahmedabad</p>
            </div>
            </div>
        
        <div className="call">
            <h4><FaPhone size={20} style={{color:"#fff",marginRight:"2rem"}}/>
            7016620770</h4>
        </div>
        <div className="email">
            <h4><FaMailBulk size={20} style={{color:"#fff",marginRight:"2rem"}}/>
            patelhit@gmail.com</h4>
        </div>
      </div>
      <div className="right">
        <h4>About Me</h4>
        <p>Hi, I’m  Hit Patel, an IT engineering student passionate about creating effective and reliable software solutions. With skills in Java, the MERN stack, and problem-solving, I’m eager to keep learning and tackling new challenges in tech.</p>
        <div className="social">
        <FaLinkedin size={30} style={{color:"#fff",marginRight:"1rem"}}/>
        <FaGithub size={30} style={{color:"#fff",marginRight:"1rem"}}/>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Footer