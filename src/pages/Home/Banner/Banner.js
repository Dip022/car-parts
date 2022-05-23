import React from "react";

import car1 from "../../../image/Banner/car-1.jpg";
import car2 from "../../../image/Banner/car-2.jpg";
import car3 from "../../../image/Banner/car-3.jpg";

const Banner = () => {
  return (
    <section>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full h-4/5">
          <img src={car1} className="w-full" alt="..." />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full h-4/5">
          <img src={car2} className="w-full" alt="..." />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full h-4/5">
          <img src={car3} className="w-full" alt="..." />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
