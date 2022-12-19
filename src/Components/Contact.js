import React from "react";
import '../Styling/Components.css'


export default function ContactForm(){
  const [formStatus, setFormStatus] = React.useState('Send')
  const onSubmit = (e) => {
    e.preventDefault()
    setFormStatus('Submitting...')
    const { name, email, message } = e.target.elements
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    }
    //console.log(conFom)
  }
  return(
    <div className="all-bg contact-container">
          <h1>Send me a Message!</h1>
          <br></br>
          <br></br>
          <form target="_blank" action="https://formsubmit.co/elliediaz1204@gmail.com" method="POST">
            <div class="form-group">
              <div class="form-row p-1">
                <div class="col">
                  <input type="text" name="name" class="form-control" placeholder="First Name" required/>
                </div>
                <div class="col">
                  <input type="text" name="lastname" class="form-control" placeholder="Last Name" required/>
                </div>
              </div>
              <div class="form-row p-1">           
                <div class="col">
                  <input type="email" name="email" class="form-control" placeholder="Email" required/>
                </div>
                <div class="col">
                  <input type="number" name="phone" class="form-control" placeholder="Phone Number"/>
                </div>
              </div>
            </div>
            <div class="form-group">
              <textarea placeholder="Your Message" class="form-control" name="message" rows="10" required></textarea>
            </div>
            <button type="submit" class="btn btn-lg btn-secondary btn-block">Send</button>
          </form>
      </div>
  )
}
