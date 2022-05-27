import React from "react";
import { useQuery } from "react-query";
import Loading from "../../sherd/Loading/Loading";

const Reviews = () => {
  const { data: reviews, isLoading: reviewLoading } = useQuery(
    "allReviews",
    () => fetch("http://localhost:5000/all-reviews").then((res) => res.json())
  );

  if (reviewLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <h1>Reviews: {reviews?.length}</h1>
    </div>
  );
};

export default Reviews;
