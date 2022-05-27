import React from "react";
import { useNavigate } from "react-router-dom";

const Product = ({ part }) => {
  const { _id, name, image, price, stock } = part;
  const navigate = useNavigate();
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
          <p>
            Available: <span>$</span>
            {stock}
          </p>
          <div className="card-actions w-full">
            <botton
              onClick={() => navigate(`/purchase/${_id}`)}
              className="btn btn-primary w-full text-white uppercase"
            >
              Order now
            </botton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
