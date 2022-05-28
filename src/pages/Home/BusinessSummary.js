import React from "react";
import { useQuery } from "react-query";
import useParts from "../../Hooks/useParts";
import Loading from "../../sherd/Loading/Loading";
import summary from "../../image/Banner/summary.jpg";

const BusinessSummary = () => {
  const [parts] = useParts();

  const { data: reviews, isLoading: reviewLoading } = useQuery(
    "allReviews",
    () =>
      fetch("https://quiet-dawn-51463.herokuapp.com/all-reviews").then((res) =>
        res.json()
      )
  );

  const { data: orders, isLoading: orderLoading } = useQuery("allOrders", () =>
    fetch("https://quiet-dawn-51463.herokuapp.com/all-order").then((res) =>
      res.json()
    )
  );

  console.log(orders);

  if (reviewLoading || orderLoading) {
    return <Loading></Loading>;
  }
  return (
    <div
      style={{
        background: `url(${summary})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="hero min-h-[600px] w-full"
    >
      <div className="hero-overlay bg-opacity-50 bg-[#000]"></div>
      <div className="text-center">
        <h1 className="text-3xl text-white mb-4 font-bold">Business Summary</h1>
        <div className="w-full h-auto flex justify-center items-center">
          <div className="bg-white px-12 md:px-6 py-8 rounded-xl">
            <div className="grid md:grid-cols-3 gap-7 ">
              <div>
                <h1 className="text-xl text-gray-600">Products</h1>
                <h1 className="text-3xl font-bold mt-2">{parts?.length}</h1>
              </div>
              <div>
                <h1 className="text-xl text-gray-600">Reviews</h1>
                <h1 className="text-3xl font-bold mt-2">{reviews?.length}</h1>
              </div>
              <div>
                <h1 className="text-xl text-gray-600">Total Orders</h1>
                <h1 className="text-3xl font-bold mt-2">{orders?.length}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSummary;
