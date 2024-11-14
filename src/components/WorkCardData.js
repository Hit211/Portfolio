import Instagram from "../assets/Instagram.jpg"
import Car from "../assets/Car.jpg"
import Shopping from "../assets/Shopping.jpg"
import comingsoon from "../assets/comingsoon.jpg"


const ProjectData = [
    {
        imgsrc:Instagram,
        title: "Instagram Clone",
        text: "I developed an Instagram clone using the MERN stack and Socket.io, offering real-time features like live comments and notifications. The app includes core functionalities such as user authentication, profile pages, and an interactive feed. Leveraging MongoDB, Express, React, and Node.js, the clone replicates the Instagram experience, with Socket.io enabling seamless, real-time updates.",
        source: ""
    },
    {
        imgsrc:Shopping,
        title: "Shopping Cart",
        text: "During my 15-day internship, I developed a shopping cart application using React. The app allowed users to browse products, add items to their cart, adjust quantities, and view a summary with real-time updates. The project enhanced my skills in state management and user interface design, giving me hands-on experience in building dynamic and interactive web applications",
        source: "https://github.com/Hit211/Shopping"
    },
    {
        imgsrc:Car,
        title: "Car Rental System",
        text: "This Car Rental System in Java allows users to rent and return cars through a console-based menu. The system tracks available cars, customers, and active rentals. Users can view available cars, select a car for a specified rental period, and confirm the rental to finalize the transaction. Each rental calculates a total price based on the car’s daily rate and rental duration. Additionally, customers can return rented cars, which updates the system’s availability status.",
        source: "https://github.com/Hit211/Car-Rental-System"
    },
    {
        imgsrc:comingsoon,
        title: "Project Coming Soon",
        text: "A new project is in progress and will be added soon.",
        source: ""
    }
]

export default ProjectData