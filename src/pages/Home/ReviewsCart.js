import React from "react";

const ReviewsCart = ({ product }) => {
  const { img, name, dd, reting } = product;
  return (
    <div className="relative mt-24">
      <div class="lg:w-lg bg-base-100 shadow-xl">
        <div className="mb-5">
          <div class="avatar absolute -top-14">
            <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={img} alt="" />
            </div>
          </div>
        </div>
        <div class="card-body">
          <h2 class="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewsCart;
