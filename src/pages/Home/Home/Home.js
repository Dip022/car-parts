import React from "react";
import Banner from "../Banner/Banner";
import BusinessSummary from "../BusinessSummary";
import Parts from "../Parts/Parts";
import Reviews from "../Reviews";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Parts></Parts>
      <BusinessSummary></BusinessSummary>
      <Reviews></Reviews>
    </div>
  );
};

export default Home;
