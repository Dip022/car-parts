import React from "react";
import { Link } from "react-router-dom";

const Product = ({ part }) => {
  const { name, image, price } = part;
  return (
    <div>
      <div className="card lg:w-full bg-base-100 shadow-2xl pt-10">
        <figure>
          <img className="md:w-auto lg:w-80" src={image} alt="part" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>
            Price: <span>$</span>
            {price}
          </p>
          <div className="card-actions w-full">
            <Link
              to="/purchase"
              className="btn btn-primary w-full text-white uppercase"
            >
              order now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
