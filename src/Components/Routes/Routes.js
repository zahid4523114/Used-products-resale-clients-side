import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import AddProduct from "../AddProduct/AddProduct";
import AllProducts from "../AllProducts/AllProducts";
import Blog from "../Blog/Blog";
import DashBoard from "../DashBoard/DashBoard";
import Home from "../Home/Home";
import Login from "../Login/Login";
import MyOrders from "../MyOrders/MyOrders";
import MyProducts from "../MyProducts/MyProducts";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Register from "../Register/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/category/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/products/${params.id}`),
        element: (
          <PrivateRoute>
            <AllProducts></AllProducts>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/dashBoard",
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        path: "/dashBoard",
        element: <DashBoard></DashBoard>,
      },
      {
        path: "/dashBoard/addProduct",
        element: <AddProduct></AddProduct>,
      },
      {
        path: "/dashBoard/myProducts",
        element: <MyProducts></MyProducts>,
      },
    ],
  },

  {
    path: "*",
    element: (
      <div className="alert lg:w-1/2 w-3/4  mt-5 mx-auto alert-error shadow-lg">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current flex-shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span className="text-white text-2xl">
            Error!Enter a correct route please...!
          </span>
        </div>
      </div>
    ),
  },
]);
