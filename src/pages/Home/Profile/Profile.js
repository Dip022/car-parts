import React from "react";

const Profile = () => {
  return (
    <div className="">
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src="" alt="" />
          <div>
            <p className="text-xl mb-4">Hey,</p>
            <h1 className=" text-3xl md:text-4xl lg:text-5xl font-bold">
              I'm Web Developer
            </h1>

            <p className="py-6">
              My name is Dipon Roy. I have been doing various works and projects
              in web development for over 1 year. I chose the job of web
              development as a profession. Because I'm attracted to web
              development. Which is why I always like to tackle new types of
              challenges. I am always steadfast towards my goal.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
      <div className="container mx-auto my-24 px-2">
        <h2 className="text-3xl text-center font-semibold underline">
          About My Self
        </h2>
        <div className="mt-4">
          <div className="lg:w-1/2 w-full mx-auto ">
            <h3 className="text-2xl font-semibold">Dipon Roy</h3>
            <h4 className="text-md italic">Web Developer</h4>
            <p className="text-md mt-2">Email: roydipok022@gmail.com</p>
            <div className="mt-8">
              <h4 className="text-3xl font-semibold">Educational Background</h4>
              <hr className="mb-2" />
              <div className="flex justify-between max-w-lg">
                <p className="w-[40%]">Institute Name:</p>
                <p className="w-[60%]">Hatibandha Alimuddin Degree College.</p>
              </div>
              <div className="flex justify-between max-w-lg">
                <p className="w-[40%]">Board</p>
                <p className="w-[60%]">National University.</p>
              </div>
              <div className="flex justify-between max-w-lg">
                <p className="w-[40%]">Subject</p>
                <p className="w-[60%]">Bangla</p>
              </div>
              <div className="flex justify-between max-w-lg">
                <p className="w-[40%]">Session</p>
                <p className="w-[60%]">2020-21</p>
              </div>
              <div className="flex justify-between max-w-lg">
                <p className="w-[40%]">Duration</p>
                <p className="w-[60%]">4 Years</p>
              </div>
            </div>
          </div>
          <div className="mt-12">
            <h4 className="text-3xl font-semibold ">My OWN Projects</h4>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
