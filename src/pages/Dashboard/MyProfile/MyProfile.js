import React from "react";

const MyProfile = () => {
  return (
    <div className="pl-12 pt-12">
      <h2 className="text-4xl font-bold text-primary mb-4">
        Welcome to your dashboard
      </h2>
      <div>
        <h2 className="text-3xl font-bold text-red-500 mb-4">
          Edit Infomation
        </h2>
        <form>
          <div className="flex items-center">
            <img
              src="https://tools-manufacturer-99057.web.app/static/media/avatar.7c5eed24048dfd58d045.jpg"
              alt="profile"
              className="w-36 mr-3"
            />
            <input type="file" />
            <label htmlFor=""></label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MyProfile;
