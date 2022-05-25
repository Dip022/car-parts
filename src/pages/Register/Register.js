import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import google from "../../image/icon/google.png";

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div
      style={{ height: "100vh" }}
      className="flex items-center justify-center w-full"
    >
      <div className=" shadow-lg p-10 shadow-gray-350 rounded-sm">
        <div>
          <h1 className="text-center text-3xl font-bold">Register</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="md:inline-grid">
            <label className="mb-1 text-sm">Name</label>
            <input
              {...register("name")}
              type="name"
              placeholder="Name"
              className="input input-bordered w-full md:w-96 mb-4"
              required
            />
            <label className="mb-1 text-sm">Email Address</label>
            <input
              {...register("email")}
              type="email"
              placeholder="email"
              className="input input-bordered w-full md:w-96 mb-4"
              required
            />
            <label className="mb-1 text-sm">Password</label>
            <input
              {...register("password")}
              type="password"
              placeholder="Password"
              className="input input-bordered w-full md:w-96 mb-4"
              required
            />
            <label className="mb-1 text-sm">Confirm Password</label>
            <input
              {...register("confirmPassword")}
              type="password"
              placeholder="Confirm Password"
              className="input input-bordered w-full md:w-96"
              required
            />
            <input
              type="submit"
              value="Register"
              className="btn md:w-96 w-full mt-4 btn-primary text-white"
            />
          </form>
        </div>
        <p className="mt-4 mb-4 text-1xl">
          Already have an account?{" "}
          <Link to="/login" className="text-primary">
            Login
          </Link>
        </p>
        <div>
          <div className="or text-center mb-5">or</div>
          <button className="flex w-full aling-center justify-center border-2 border-gray-400 p-2 rounded-lg">
            <img className="w-7 mr-2" src={google} alt="" />{" "}
            <span className="text-xl">Sign in With Google</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;