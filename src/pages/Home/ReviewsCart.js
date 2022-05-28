import React from "react";

const ReviewsCart = ({ review, avatar }) => {
  const { img, name, message, rating } = review;
  return (
    <div className="relative mt-24">
      <div className="lg:w-lg bg-base-100 shadow-xl">
        <div className="mb-5">
          <div className="avatar absolute -top-14">
            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={avatar} alt="" />
            </div>
          </div>
        </div>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{message}</p>
          <p>Rating: {rating} Start</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewsCart;
