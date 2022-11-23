import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const navLinks = (
    <React.Fragment>
      <Link to="/home" className=" rounded-xl">
        Home
      </Link>
      <Link className="rounded-lg">About</Link>
      <Link to="/appointmentHome" className="rounded-lg">
        Appointment
      </Link>
      <Link className="rounded-lg">Reviews</Link>
      <Link to="/dashBoard" className="rounded-lg">
        Dash Board
      </Link>
      {/* {user?.email ? (
        <>
          <Link onClick={userSignOut} className="rounded-lg">
            LOG OUT
          </Link>
          <small className="font-bold">{user?.email}</small>
        </>
      ) : (
        <Link to="/login" className="rounded-lg">
          LOG IN
        </Link>
      )} */}
      {/* <input type="checkbox" className="toggle toggle-md rounded-full" /> */}
    </React.Fragment>
  );
  return (
    <div className="navbar lg:flex lg:justify-between justify-between items-center bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
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
            tabIndex={0}
            className="menu menu-compact  dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>{navLinks}</li>
          </ul>
        </div>
        <Link className="btn btn-ghost normal-case text-xl">Doctor Portal</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0 ">
          <li>{navLinks}</li>
        </ul>
      </div>
      <label
        htmlFor="my-drawer"
        tabIndex={1}
        className="btn btn-ghost lg:hidden"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
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
    </div>
  );
};

export default Header;
