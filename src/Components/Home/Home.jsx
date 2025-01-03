import React from "react";
import avater from "../../imgs/avataaars.svg";
import "./HomeStyle.css";
export default function Home() {
  return (
    <>
      <section className="home min-vh-100 d-flex justify-content-center align-items-center">
        <div className="container mt-5 d-flex flex-column justify-content-center align-items-center">
          <img src={avater} alt="" className="img-avater d-block" />
          <div className="title text-center pt-4 text-white">
          <h1 class="fw-bolder text-white text-uppercase">Start React</h1>
          </div>
        </div>
      </section>
    </>
  );
}
