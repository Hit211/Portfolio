import Footer from "../components/Footer"
import { Form } from "../components/Form"
import Hero2 from "../components/Hero2"
import NavBar from "../components/NavBar"


export const Contact = () => {
  return (
    <div>
      <NavBar/>
      <Hero2 heading="CONTACT" text="Lets have a chat"/>
      <Form/>
      <Footer/>
    </div>
  )
}
