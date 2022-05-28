import React from "react";
import { useQuery } from "react-query";
import Loading from "../../sherd/Loading/Loading";
import avatar from "../../image/avatar/avatar.png";
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
  return (
    <div className="px-8 md:px-12 mb-16">
      <h1 className="text-center mt-28 mb-12 text-3xl font-bold text-primary">
        Reviews
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {reviews.map((review) => (
          <ReviewsCart
            review={review}
            key={review._id}
            avatar={avatar}
          ></ReviewsCart>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
