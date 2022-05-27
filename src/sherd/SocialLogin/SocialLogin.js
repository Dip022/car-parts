import React, { useEffect } from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.inti";
import useToken from "../../Hooks/useToken";
import google from "../../image/icon/google.png";

const SocialLogin = () => {
  const [signInWithGoogle, user] = useSignInWithGoogle(auth);

  const [token] = useToken(user);

  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      toast.success("Login success");
      navigate("/home");
    }
  }, [token, navigate]);

  return (
    <div>
      <button
        onClick={() => {
          signInWithGoogle();
        }}
        className="btn btn-outline border-slate-300 flex justify-center items-center w-full false"
      >
        <img className="w-6 mr-2" src={google} alt="" />{" "}
        <span className="text-md">Sign in With Google</span>
      </button>
    </div>
  );
};

export default SocialLogin;
