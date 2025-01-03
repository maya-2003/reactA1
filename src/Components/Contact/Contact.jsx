import React from "react";
import "./Contact.css";
export default function Contact() {
  return (
    <section className="portfolio min-vh-100 py-5 d-flex justify-content-center align-items-center">
      <div className="container mt-5 d-flex flex-column justify-content-center align-items-center">
        <div className="title text-center pt-4 ">
          <h2 className="text-uppercase mb-3 fs-1 fw-bolder">
            conatct me
          </h2>
          <div className="d-flex align-items-center justify-content-center mb-3">
            <div className="dividerPort">
              <i className="fa-solid fa-star fa-xlg"></i>
            </div>
          </div>
        </div>

        <form className="contact-form px-3 py-4 mx-auto mt-5">
          <div>
            <input
              id="userName"
              type="text"
              placeholder="Name"
              name="userName"
              className="form-control border-0 p-3 mb-3 position-relative"
            />
          </div>

          <div>
            <input
              id="email"
              type="text"
              min="0"
              max="120"
              placeholder="Email Address"
              name="email"
              className="form-control border-0 p-3 mb-3 position-relative"
            />
          </div>

          <div>
            <input
              id="phone"
              type="number"
              placeholder="Phone Number"
              name="phone"
              className="form-control border-0 p-3 mb-3 position-relative"
            />
          </div>

          <div>
          <textarea className="form-control border-0" placeholder="Message" spellcheck="false"></textarea>
          </div>
          <input type="submit" className="btn btn-primary my-5" value="send"/>
        </form>
      </div>
    </section>
  );
}
