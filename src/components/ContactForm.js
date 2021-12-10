import React from "react"

function ContactForm() {
  return (
    <div>
      <section class="content-section no-spacing">
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <div class="section-title text-left">
              
                <h1>
                Send your Queries
                 
                </h1>
              </div>
            </div>

            <div class="col-lg-6">
              <form class="contact-form">
                <div class="form-group">
                  <span>Full Name</span>
                  <input type="text"></input>
                </div>

                <div class="form-group">
                  <span>Your E-mail</span>
                  <input type="text"></input>
                </div>

                <div class="form-group">
                  <span>Subject</span>
                  <input type="text"></input>
                </div>

                <div class="form-group">
                  <span>Your Message</span>
                  <textarea></textarea>
                </div>

                <div class="form-group">
                  <input type="submit" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
export default ContactForm
