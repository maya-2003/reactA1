import React from "react";
import "./FooterStyle.css";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="footer-head py-5">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-lg-4 py-4 px-2">
                <h4 className="fw-bolder">LOCATION</h4>
                <p className="mt-3">2215 John Daniel Drive <br/>Clark, MO 65243</p>
              </div>

              <div className="col-md-6 col-lg-4 py-4 px-2">
                <h4 className="fw-bolder">AROUND THE WEB</h4>
                <div className="footer-links mt-5">
                  <a>
                    <i className="fa-brands fa-facebook mx-1" />
                  </a>
                  <a>
                    <i className="fa-brands fa-twitter mx-1" />
                  </a>
                  <a>
                    <i className="fa-brands fa-linkedin-in mx-1" />
                  </a>
                  <a>
                    <i className="fa-brands fa-youtube mx-1" />
                  </a>
                </div>
              </div>

              <div className="col-md-6 col-lg-4 py-4 px-2">
                <h4 className="fw-bolder">ABOUT FREELANCER</h4>
                <p className="fw-bolder mt-3">
                  Freelance is a free to use, licensed Bootstrap theme created
                  by Route
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-copyright text-white">
          <p>Copyright © Hamza Nouh 2022</p>
        </div>
      </footer>
    </>
  );
}
