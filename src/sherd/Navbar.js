import React from "react";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.inti";
import { signOut } from "firebase/auth";

const Navbar = () => {
  const [user] = useAuthState(auth);

  const menuItem = (
    <>
      <li>
        <Link to="/home">Home</Link>
      </li>
      <li>
        <Link to="/parts">Parts</Link>
      </li>

      <li>
        <Link to="/profile">Profile</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
      {user ? (
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      ) : (
        <></>
      )}
      {user ? (
        <li>
          <Link to="" onClick={() => signOut(auth)}>
            Logout
          </Link>
        </li>
      ) : (
        <>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className="navbar justify-between bg-accent text-white">
      <div className="navbar-start bg-accent">
        <div className="dropdown text-2xl">
          <label tabIndex="0" className="btn btn-accent lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-2 shadow  bg-black w-52"
          >
            {menuItem}
          </ul>
        </div>
        <span className="btn btn-ghost normal-case text-xl">daisyUI</span>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal justify-between p-0 text-1.5xl">
          {menuItem}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
