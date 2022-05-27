import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import auth from "../../../firebase.inti";
import avater from "../../../image/avatar/avatar.png";
import Loading from "../../../sherd/Loading/Loading";

const MyProfile = () => {
  const [user, loading] = useAuthState(auth);

  const { register, handleSubmit } = useForm();

  if (loading) {
    return <Loading></Loading>;
  }

  const email = user?.email;

  const imageKey = "b61f975ab7c49fb001eebda643166024";

  const onSubmit = (data, e) => {
    e.preventDefault();

    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);

    const url = `https://api.imgbb.com/1/upload?key=${imageKey}`;

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const img = result.data.url;
          const user = {
            fullName: data.fullName,
            image: img,
            phoneNumber: data.phoneNumber,
            addressLine1: data.addressLine1,
            addressLine2: data.addressLine2,
            city: data.city,
            state: data.state,
            postalCode: data.postalCode,
          };

          // update user to database
          fetch(`http://localhost:5000/profile/${email}`, {
            method: "PUT",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem("access_token")}`,
            },
            body: JSON.stringify(user),
          })
            .then((res) => res.json())
            .then((result) => {
              if (result.modifiedCount > 0) {
                toast.success("Profile Save Success!");
                e.target.reset();
              } else {
                toast.error("Please any Changes!");
              }
            });
        }
      });
  };

  return (
    <div className="pl-12 pt-12">
      <h2 className="text-4xl font-bold text-primary mb-4">
        Welcome to your dashboard
      </h2>
      <div>
        <h2 className="text-3xl font-bold text-red-500 mb-4">
          Edit Infomation
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex items-center">
            <img className="w-36 mr-4" src={user?.photoURL || avater} alt="" />
            <input
              type="file"
              {...register("image", {
                required: {
                  value: true,
                  message: "Image is Required",
                },
              })}
            />
          </div>
          <div className="mt-6">
            <h2 className="text-3xl">Account Information</h2>
            <div className="mt-4">
              <div className="text-xl mb-4">
                <label htmlFor="">Full Name:</label>
                <input
                  className="input input-bordered w-full max-w-xs ml-2"
                  type="text"
                  placeholder="Full Name"
                  {...register("fullName")}
                  required
                />
              </div>
              <div className="text-xl mb-4">
                <label htmlFor="">Email Address:</label>
                <input
                  className="input input-bordered w-full max-w-xs ml-2"
                  type="email"
                  placeholder="Email Address"
                  value={user?.email}
                  disabled
                />
              </div>
              <div className="text-xl mb-4">
                <label htmlFor="">Phone Number:</label>
                <input
                  className="input input-bordered w-full max-w-xs ml-2"
                  type="number"
                  placeholder="Phone Number"
                  {...register("phoneNumber")}
                  required
                />
              </div>
              <div className="text-xl mb-4">
                <label htmlFor="">Address Line 1:</label>
                <input
                  className="input input-bordered w-full max-w-xs ml-2"
                  type="text"
                  placeholder="Address Line 1"
                  {...register("addressLine1")}
                  required
                />
              </div>
              <div className="text-xl mb-4">
                <label htmlFor="">Address Line 2:</label>
                <input
                  className="input input-bordered w-full max-w-xs ml-2"
                  type="text"
                  placeholder="Address Line 2"
                  {...register("addressLine2")}
                  required
                />
              </div>
              <div className="text-xl mb-4">
                <label htmlFor="">City:</label>
                <input
                  className="input input-bordered w-full max-w-xs ml-2"
                  type="text"
                  placeholder="City"
                  {...register("city")}
                  required
                />
              </div>
              <div className="text-xl mb-4">
                <label htmlFor="">State:</label>
                <input
                  className="input input-bordered w-full max-w-xs ml-2"
                  type="text"
                  placeholder="State"
                  {...register("state")}
                  required
                />
              </div>
              <div className="text-xl mb-4">
                <label htmlFor="">Postal Code:</label>
                <input
                  className="input input-bordered w-full max-w-xs ml-2"
                  type="text"
                  placeholder="Postal Code"
                  {...register("postalCode")}
                  required
                />
              </div>
            </div>
          </div>
          <input type="submit" value="Save" className="btn btn-primary" />
        </form>
      </div>
    </div>
  );
};

export default MyProfile;
