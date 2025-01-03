// import React, { useState } from "react";
// import PortfolioCard from "../PortfolioCard/PortfolioCard";
// import Modal from "../Modal/Modal";

// import project1 from "../../imgs/portfolio/poert1.png";
// import project2 from "../../imgs/portfolio/port2.png";
// import project3 from "../../imgs/portfolio/port3.png";
// import project4 from "../../imgs/portfolio/game.png";
// import project5 from "../../imgs/portfolio/safe.png";
// import project6 from "../../imgs/portfolio/submarine.png";

// export default function Portfolio() {
//   const imageList = [
//     {
//       id: 11,
//       src: project1,
//       alt: "Web 1",
//     },
//     {
//       id: 22,
//       src: project2,
//       alt: "Mpbile App 1",
//     },
//     {
//       id: 33,
//       src: project3,
//       alt: "Mpbile App 2",
//     },
//     {
//       id: 44,
//       src: project4,
//       alt: "Web App 2",
//     },
//     {
//       id: 55,
//       src: project5,
//       alt: "Web App 3",
//     },
//     {
//       id: 66,
//       src: project6,
//       alt: "Web App 4",
//     },
//   ];

//   const [isOpen, setIsOpen] = useState(false);
//   const [selectedImage, setSelectedImage] = useState("");
//   const toggleModal = (src) => {
//     setIsOpen(true);
//     setSelectedImage(src);
//   };

//   return (
//     <section className="portfolio min-vh-100 py-5 d-flex justify-content-center align-items-center">
//       <div className="container mt-5 d-flex flex-column justify-content-center align-items-center">
//         <div className="title text-center pt-4 ">
//           <h2 className="text-uppercase mb-3 fs-1 fw-bolder">
//             portfolio
//           </h2>
//           <div className="d-flex align-items-center justify-content-center mb-3">
//             <div className="dividerPort">
//               <i className="fa-solid fa-star fa-xlg"></i>
//             </div>
//           </div>
//         </div>
//         <div className="row  g-4">
//           {imageList.map((img) => (
//             <PortfolioCard key={img.id} img={img} toggleModal={toggleModal} />
//           ))}
//         </div>
//         {isOpen && <Modal setIsOpen={setIsOpen} img={selectedImage} />}
//       </div>
//     </section>
//   );
// }
import React, { useState } from "react";
import PortfolioCard from "../PortfolioCard/PortfolioCard";
import Modal from "../Modal/Modal";
import img1 from "../../imgs/portfolio/house.png";
import img2 from "../../imgs/portfolio/cake.png";
import img3 from "../../imgs/portfolio/circus.png";
import img4 from "../../imgs/portfolio/game.png";
import img5 from "../../imgs/portfolio/safe.png";
import img6 from "../../imgs/portfolio/submarine.png";

export default function Portfolio() {
  const images = [
    { src: img1, alt: "Web 1" },
    { src: img2, alt: "Mobile App 1" },
    { src: img3, alt: "Mobile App 2" },
    { src: img4, alt: "Web App 2" },
    { src: img5, alt: "Web App 3" },
    { src: img6, alt: "Web App 4" },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const toggleModal = (src) => {
    setIsOpen(true);
    setSelectedImage(src);
  };

  return (
    <section className="portfolio min-vh-100 py-5 d-flex justify-content-center align-items-center">
      <div className="container mt-5 d-flex flex-column justify-content-center align-items-center">
        <div className="title text-center pt-4 ">
          <h2 className="text-uppercase mb-3 fs-1 fw-bolder">portfolio</h2>
          <div className="d-flex align-items-center justify-content-center mb-3">
            <div className="dividerPort">
              <i className="fa-solid fa-star fa-xlg"></i>
            </div>
          </div>
        </div>
        <div className="row g-4">
          {images.map((img, index) => (
            <PortfolioCard key={img.src || index} img={img} toggleModal={toggleModal} />
          ))}
        </div>
        {isOpen && <Modal setIsOpen={setIsOpen} img={selectedImage} />}
      </div>
    </section>
  );
}
