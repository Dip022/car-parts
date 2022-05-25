import React from "react";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.inti";

const Forgotten = () => {
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

  const resetPassword = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    await sendPasswordResetEmail(email);
    toast.success("Check your email for reset password");
  };

  return (
    <div
      style={{ height: "100vh" }}
      className="flex items-center justify-center w-full"
    >
      <div className="shadow-lg p-10 shadow-gray-350 rounded-sm">
        <h1 className="text-center text-2xl font-bold mb-4">Reset password</h1>
        <form onSubmit={resetPassword} className="md:inline-grid">
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="input input-bordered md:w-96 w-full mb-4"
          />
          <input
            type="submit"
            value={sending ? "sending..." : "RESET"}
            className="btn md:w-96 w-full mt-4 btn-primary text-white"
          />
        </form>
      </div>
    </div>
  );
};

export default Forgotten;
