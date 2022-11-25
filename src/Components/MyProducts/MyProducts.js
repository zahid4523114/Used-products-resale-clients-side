import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/ContextProvider";

const MyProducts = () => {
  const { user } = useContext(AuthContext);

  const { data: addProduct = [], refetch } = useQuery({
    queryKey: ["addProduct", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/addProduct?email=${user?.email}`
      );
      const data = res.json();
      return data;
    },
  });

  const handleDeleteProduct = (id) => {
    fetch(`http://localhost:5000/addProduct/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json)
      .then((data) => {
        console.log(data);
        refetch();
      });
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>No.</th>
              <th>Name</th>
              <th>Quality</th>
              <th>Post date</th>
              <th>Price</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {addProduct.map((product, i) => (
              <tr key={product._id} className="hover">
                <th>{i + 1}</th>
                <td>{product.name}</td>
                <td>{product.review}</td>
                <td>{product.date}</td>
                <td>{product.price}</td>
                <td>
                  <button
                    onClick={() => handleDeleteProduct(product._id)}
                    className="btn btn-error btn-xs"
                  >
                    Delete
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

export default MyProducts;
