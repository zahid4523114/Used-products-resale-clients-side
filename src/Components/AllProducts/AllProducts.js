import React from "react";
import { useLoaderData } from "react-router-dom";

const AllProducts = () => {
  const productData = useLoaderData();
  return (
    <div className="flex lg:flex-row flex-col lg:my-20 m-3 justify-around ">
      {productData.map((product) => (
        <div className="card card-compact bg-base-100 shadow-xl mx-auto lg:mt-0 mt-8 lg:w-96 w-full ">
          <figure>
            <img src={product.photo} alt="car!" />
          </figure>
          <div className="card-body">
            <h2 className="card-title ">{product.title}</h2>
            <h3 className="font-bold">
              Uses:
              {product.uses === 1
                ? product.uses + "year"
                : product.uses + "years"}
            </h3>
            <h3 className="font-bold">
              OriginalPrice: {product.originalPrice}
            </h3>
            <h3 className="font-bold">ResalePrice: {product.resalePrice}</h3>
            <h3 className="font-bold">Location: {product.loaction}</h3>
            <div className="card-actions justify-end">
              <button className="btn btn-primary text-white ">Book now</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllProducts;
