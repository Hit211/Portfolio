import AboutCmt from "../components/AboutCmt"
import Footer from "../components/Footer"
import Hero2 from "../components/Hero2"
import NavBar from "../components/NavBar"

const About = () => {
  return (
    <div>
      <NavBar/>
      <Hero2 heading="ABOUT" text="COMMITTED TO DELIVERING MY BEST"/>
      <AboutCmt/>
      <Footer/>
    </div>
  )
}

export default About