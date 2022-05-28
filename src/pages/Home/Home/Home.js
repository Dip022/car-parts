import React from "react";
import Banner from "../Banner/Banner";
import BusinessSummary from "../BusinessSummary";
import ContactUs from "../ContactUs";
import Parts from "../Parts/Parts";
import Reviews from "../Reviews";
import Subscribe from "../Subscribe";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Parts></Parts>
      <BusinessSummary></BusinessSummary>
      <Reviews></Reviews>
      <Subscribe></Subscribe>
      <ContactUs></ContactUs>
    </div>
  );
};

export default Home;
