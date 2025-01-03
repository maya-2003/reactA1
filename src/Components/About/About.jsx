import React from "react";
import "./AboutStyle.css";
export default function About() {
  return (
    <section className="about d-flex justify-content-center align-items-center">
      <div className="container d-flex flex-column justify-content-center align-items-center">
        <div className="title text-center pt-4 text-white">
          <h2 className="text-uppercase mb-3 fs-1 fw-bolder">About</h2>
          <div className="d-flex align-items-center justify-content-center mb-3">
            <div className="divider">
              <i className="fa-solid fa-star fa-xlg"></i>
            </div>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-md-12 col-lg-4 ">
            <p class="px-3 text-white">Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
          </div>
          <div class="col-md-12 col-lg-4">
            <p class="px-3 text-white">You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p>
          </div>
        </div>
      </div>
    </section>
  );
}
