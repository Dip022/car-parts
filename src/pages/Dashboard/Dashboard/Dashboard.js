import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../../firebase.inti";
import useAdmin from "../../../Hooks/useAdmin";
import Loading from "../../../sherd/Loading/Loading";
import "./Dashboard.css";

const Dashboard = () => {
  const [user, loading] = useAuthState(auth);
  const [useMemu, setUseMenu] = useState(false);

  const [admin] = useAdmin(user);

  const handelClick = () => {
    setUseMenu(!useMemu);
  };

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div className="flex truncate">
      <div
        className={`${
          useMemu ? "left-0" : "-left-40"
        } " bg-gray-900 pt-12 absolute lg:static h-auto px-8 truncate"`}
      >
        <div>
          <ul className="text-white text-md">
            <li className="mb-4">
              <Link to="/dashboard">My Profile</Link>
            </li>
            {admin || (
              <>
                <li className="mb-4">
                  <Link to="my-orders">My Orders</Link>
                </li>
                <li className="mb-4">
                  <Link to="my-reviews">My Reviews</Link>
                </li>
              </>
            )}
            {admin && (
              <>
                <li className="mb-4">
                  <Link to="make-admin">Make Admin</Link>
                </li>
                <li className="mb-4">
                  <Link to="manage-order">Manage All Orders</Link>
                </li>
                <li className="mb-4">
                  <Link to="manage-produts">Manage Products</Link>
                </li>
                <li className="mb-4">
                  <Link to="add-product">Add Product</Link>
                </li>
              </>
            )}
          </ul>
        </div>
        <div className="absolute lg:static top-0 lg:hidden dashboard-memu text-white py-2 px-4 bg-gray-900">
          <label className=" swap swap-rotate">
            <input type="checkbox" onClick={() => handelClick()} />

            <svg
              className="swap-off fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512"
            >
              <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
            </svg>

            <svg
              className="swap-on fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512"
            >
              <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
            </svg>
          </label>
        </div>
      </div>
      <div className="w-full min-h-[700px] p-8">
        <h2 className="text-3xl text-primary">Welcome to your Dashboard</h2>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
