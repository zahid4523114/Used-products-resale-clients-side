import React from "react";
import { Link, Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";

const DashboardLayout = () => {
  return (
    <div>
      <Header></Header>
      <div className="drawer drawer-mobile">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-200 text-base-content">
            <li>
              <Link to="/dashBoard">My Orders</Link>
            </li>
            <li>
              <Link to="/dashBoard/addProduct">Add Product</Link>
            </li>
            <li>
              <Link to="/dashBoard/myProducts">My Products</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
