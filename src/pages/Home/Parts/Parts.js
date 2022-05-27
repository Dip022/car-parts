import React, { useEffect, useState } from "react";
import Product from "../Product/Product";

const Parts = () => {
  const [parts, setParts] = useState([]);
  useEffect(() => {
    fetch("https://quiet-dawn-51463.herokuapp.com/parts")
      .then((res) => res.json())
      .then((data) => setParts(data));
  }, []);

  return (
    <div className="px-12 mt-20 mb-20">
      <h1 className="text-center text-4xl font-bold mb-8 text-primary">
        Parts
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {parts.map((part) => (
          <Product key={part._id} part={part}></Product>
        ))}
      </div>
    </div>
  );
};

export default Parts;
