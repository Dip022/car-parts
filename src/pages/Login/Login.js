import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import SocialLogin from "../../sherd/SocialLogin/SocialLogin";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.inti";
import Loading from "../../sherd/Loading/Loading";
import { toast } from "react-toastify";
import useToken from "../../Hooks/useToken";

const Login = () => {
  const { register, handleSubmit } = useForm();

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const [token] = useToken(user);

  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      navigate("/home");
      toast.success("Sign in success");
    }
  }, [token, navigate]);

  if (loading) {
    return <Loading></Loading>;
  }

  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password);
  };

  return (
    <div
      style={{ height: "100vh" }}
      className="flex items-center justify-center w-full"
    >
      <div className=" shadow-lg p-10 shadow-gray-350 rounded-sm">
        <div>
          <h1 className="text-center text-3xl font-bold">Login</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="md:inline-grid">
            <label className="mb-1 text-sm">Email Address</label>
            <input
              {...register("email")}
              type="email"
              placeholder="Email Address"
              className="input input-bordered w-full md:w-96 mb-4"
            />
            <label className="mb-1 text-sm">Password</label>
            <input
              {...register("password")}
              type="password"
              placeholder="Password"
              className="input input-bordered w-full md:w-96 mb-4"
            />
            <span className="text-red-500">{error?.message}</span>
            <input
              type="submit"
              value="Login"
              className="btn md:w-96 w-full mt-4 btn-primary text-white"
            />
          </form>
        </div>
        <button
          onClick={() => navigate("/forgotten")}
          className=" mt-4 mb-4 text-primary"
        >
          Forgotten password?
        </button>
        <p className="mb-4 text-1xl">
          Not an account?{" "}
          <Link to="/register" className="text-primary">
            Register
          </Link>
        </p>
        <div>
          <div className="or text-center mb-5">or</div>
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </div>
  );
};

export default Login;
