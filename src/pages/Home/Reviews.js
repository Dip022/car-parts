import React from "react";
import { useQuery } from "react-query";
import Loading from "../../sherd/Loading/Loading";
import download from "./download.png";
import ReviewsCart from "./ReviewsCart";

const Reviews = () => {
  const { data: reviews, isLoading: reviewLoading } = useQuery(
    "allReviews",
    () =>
      fetch("https://quiet-dawn-51463.herokuapp.com/all-reviews").then((res) =>
        res.json()
      )
  );

  if (reviewLoading) {
    return <Loading></Loading>;
  }

  const products = [
    { id: 1, img: download, name: "balpe", dd: "best quality", reting: 5 },
    { id: 2, img: download, name: "balpe", dd: "best quality", reting: 5 },
    { id: 3, img: download, name: "balpe", dd: "best quality", reting: 5 },
    { id: 4, img: download, name: "balpe", dd: "best quality", reting: 5 },
    { id: 5, img: download, name: "balpe", dd: "best quality", reting: 5 },
    { id: 6, img: download, name: "balpe", dd: "best quality", reting: 5 },
  ];
  return (
    <div className="px-8 md:px-12 mb-16">
      <h1 className="text-center mt-28 mb-12 text-3xl font-bold text-primary">
        Reviews
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {products.slice(0, 6).map((product) => (
          <ReviewsCart product={product} key={product.id}></ReviewsCart>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
