import Footer from "../components/Footer"
import Hero2 from "../components/Hero2"
import NavBar from "../components/NavBar"

import Work from "../components/Work"


const Projects = () => {
  return (
    <div>
      <NavBar/>
      <Hero2 heading="PROJECTS" text="Some Of My Works"/>
      <Work/>
      <Footer/>
    </div>
  )
}

export default Projects