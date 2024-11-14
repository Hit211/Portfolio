import "./Form.css"

export const Form = () => {
  return (
    <div className="form">
        <form action="">
            <label htmlFor="">Your Name</label>
            <input type="text" />
            <label htmlFor="">Email</label>
            <input type="email" />
            <label htmlFor="">Subject</label>
            <input type="text" />
            <label htmlFor="">Message</label>
            <textarea rows="6" placeholder="Type ur message here"></textarea>
            <button className="btn">Submit</button>
        </form>
    </div>
  )
}
