import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../Context/ContextProvider";

const DashBoard = () => {
  const { user } = useContext(AuthContext);
  //user query to get data from db
  const { data: bookings = [] } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `https://used-products-resale-server-side.vercel.app/bookings?email=${user?.email}`,
        {
          headers: {
            authorization: `bearer ${localStorage.getItem("user-token")}`,
          },
        }
      );
      const data = res.json();
      return data;
    },
  });

  console.log(bookings);

  return (
    <div className="lg:mx-3">
      <h1 className="lg:text-3xl text-xl font-bold my-3  ">My orders</h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>No.</th>
              <th>Product</th>
              <th>Name</th>
              <th>email</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {bookings?.map((book, i) => (
              <tr key={i} className="hover">
                <th>{i + 1}</th>
                <td>
                  <div className="avatar online">
                    <div className="w-12 rounded-full">
                      <img alt="" src={book?.photo} />
                    </div>
                  </div>
                </td>

                <td>{book?.product}</td>
                <td>{book?.email}</td>
                <td>
                  <button className="btn btn-error btn-xs text-white">
                    Pay Money
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashBoard;
