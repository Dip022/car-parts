import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.inti";
import Loading from "../../../sherd/Loading/Loading";
import { toast } from "react-toastify";

const MyReviewCard = ({ review }) => {
  const [user, loading] = useAuthState(auth);
  const [useRating, setUserRating] = useState(1);

  const { _id, productImage, productPrice, productName, quantity } = review;

  if (loading) {
    return <Loading></Loading>;
  }

  const handleReview = (e) => {
    e.preventDefault();

    const userEmail = user?.email;
    const userName = user?.displayName;

    const message = e.target.message.value;
    const rating = useRating;
    const email = userEmail;
    const name = userName;

    const newReview = { name, email, rating, message };

    fetch(`http://localhost:5000/review/${_id}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
      body: JSON.stringify(newReview),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("Review Success");
        }
      });
  };
  return (
    <div class="card xl:max-w-xl lg:max-w-lg card-side bg-base-100 shadow-xl">
      <figure>
        <img className="w-24" src={productImage} alt="Movie" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{productName}</h2>
        <h4>Price: ${productPrice}</h4>
        <h4>Quantity: {quantity}</h4>
        <form onSubmit={handleReview} action="">
          <input
            type="text"
            name="message"
            placeholder="Your Message"
            className="input input-bordered"
          />
          <div>
            <div class="rating">
              <input
                value="1"
                onClick={(e) => setUserRating(e.target.value)}
                type="radio"
                name="rating-2"
                class="mask mask-star-2 bg-orange-400"
              />
              <input
                value="2"
                onClick={(e) => setUserRating(e.target.value)}
                type="radio"
                name="rating-2"
                class="mask mask-star-2 bg-orange-400"
                checked
              />
              <input
                value="3"
                onClick={(e) => setUserRating(e.target.value)}
                type="radio"
                name="rating-2"
                class="mask mask-star-2 bg-orange-400"
              />
              <input
                value="4"
                onClick={(e) => setUserRating(e.target.value)}
                type="radio"
                name="rating-2"
                class="mask mask-star-2 bg-orange-400"
              />
              <input
                value="5"
                onClick={(e) => setUserRating(e.target.value)}
                type="radio"
                name="rating-2"
                class="mask mask-star-2 bg-orange-400"
              />
            </div>
          </div>
          <div class="card-actions justify-end">
            <button type="submit" class="btn btn-primary">
              Review
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MyReviewCard;
