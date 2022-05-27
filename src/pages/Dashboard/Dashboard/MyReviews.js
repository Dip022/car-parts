import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import auth from "../../../firebase.inti";
import Loading from "../../../sherd/Loading/Loading";
import MyReviewCard from "./MyReviewCard";

const MyReviews = () => {
  const [user, loading] = useAuthState(auth);

  const email = user?.email;

  const { data: reviews, isLoading } = useQuery("reviewOrder", () =>
    fetch(
      `https://quiet-dawn-51463.herokuapp.com/orderes-product/${email}`
    ).then((res) => res.json())
  );

  if (loading || isLoading) {
    return <Loading></Loading>;
  }

  console.log(reviews.length);

  return (
    <div>
      <h2>Your Review</h2>
      <div className="grid gap-12">
        {reviews?.map((review) => (
          <MyReviewCard review={review} key={review._id}></MyReviewCard>
        ))}
      </div>
    </div>
  );
};

export default MyReviews;
