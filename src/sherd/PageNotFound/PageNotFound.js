import React from "react";
import { useNavigate } from "react-router-dom";
import error from "../../image/error/error.gif";

const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{ height: "100vh", background: "#ECECEC" }}
      className="w-full flex justify-center items-center"
    >
      <div className="text-center">
        <img className="w-96 mx-auto" src={error} alt="error" />
        <h1 className="text-3xl font-bold text-black">404 Page Not Found</h1>
        <h6 className="text-md mt-3 text-black">
          You can search for the page you want here or return to the homepage
        </h6>
        <button
          className="btn btn-black text-white mt-3"
          onClick={() => {
            navigate("/home");
          }}
        >
          GO HOME
        </button>
      </div>
    </div>
  );
};

export default PageNotFound;
