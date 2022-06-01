import React from "react";

const Subscribe = () => {
  return (
    <div className="bg-primary py-12 mb-12  px-5 md:px-8">
      <div className="flex justify-center ">
        <div className="flex justify-center w-full md:w-1/2 lg:w-1/3">
          <input
            type="text"
            placeholder="Your Email Address"
            className="input w-full"
            required
          />
          <button className="btn ">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
