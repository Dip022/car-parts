import React from "react";

const ContactUs = () => {
  return (
    <div className="mb-20 px-8">
      <h1 className="text-center text-primary text-3xl font-bold mb-12">
        Contact Us
      </h1>
      <div className="flex justify-center items-center">
        <form className="w-full md:w-3/4 lg:w-1/2 mx-auto">
          <div className="flex flex-col">
            <label htmlFor="" className="mb-2">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Full Name"
              className="input  input-bordered"
            />
          </div>
          <div className="flex flex-col mt-3">
            <label htmlFor="" className="mb-2">
              Email Address
            </label>
            <input
              type="text"
              placeholder="Email Address"
              className="input  input-bordered"
            />
          </div>
          <div className="flex flex-col mt-3">
            <textarea
              name=""
              id=""
              cols="30"
              rows="5"
              placeholder="Your Message"
              className="border-2 border-gray rounded-lg p-5"
            ></textarea>
          </div>
          <div className="mt-3">
            <input
              type="submit"
              value="Submit"
              className="btn btn-primary text-white"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
