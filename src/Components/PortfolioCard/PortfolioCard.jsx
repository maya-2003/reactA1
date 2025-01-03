import React from "react";
import "./PortfolioCard.css";
export default function PortfolioCard({ img, toggleModal }) {
  return (
    <>
      <div className="col-md-6 col-lg-4">
        <div className="inner rounded-3 overflow-hidden position-relative"onClick={() => toggleModal(img.src)} >
          <img src={img.src} alt={img.alt} className="d-block w-100 rounded-3"/>
        </div>
      </div>
    </>
  );
}
