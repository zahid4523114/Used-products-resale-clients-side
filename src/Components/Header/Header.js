import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../Camsec-logo.png";

const Header = () => {
  const navLinks = (
    <React.Fragment>
      <Link to="/home" className="text-white">
        Home
      </Link>
      <Link to={"/categories"} className="text-white">
        Categories
      </Link>
      <Link to="/addProduct" className="text-white">
        Add a product
      </Link>
      <Link to={"/blog"} className="text-white">
        Blog
      </Link>

      {/* {user?.email ? (
        <>
      <Link to="/dashBoard" className="rounded-lg">
        Dash Board
      </Link>
          <Link onClick={userSignOut} className="rounded-lg">
            LOG OUT
          </Link>
        </>
      ) : (
        <Link to="/login" className="rounded-lg">
          LOG IN
        </Link>
      )} */}
    </React.Fragment>
  );
  return (
    <div className="navbar bg-neutral  lg:flex lg:justify-between justify-between items-center">
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
            className="menu menu-compact  dropdown-content mt-3 p-2 shadow bg-neutral rounded-box w-52"
          >
            <li>{navLinks}</li>
          </ul>
        </div>
        <Link>
          <img className="w-1/2 " src={Logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0 ">
          <li>{navLinks}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
