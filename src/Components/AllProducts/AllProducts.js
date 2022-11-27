import React, { useContext, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import AddProduct from "../AddProduct/AddProduct";
import BookingModal from "../BookingModal/BookingModal";
import { AuthContext } from "../Context/ContextProvider";

const AllProducts = () => {
  const productData = useLoaderData();

  const { user } = useContext(AuthContext);

  const [products, setProducts] = useState(null);

  return (
    <div className="">
      <h1 className="text-center lg:text-3xl text-2xl font-bold mt-10">
        Book <span className="text-violet-500">Products</span> Here!
      </h1>
      <div className="flex lg:flex-row flex-col flex-wrap lg:my-20 m-3 justify-around ">
        {productData.data.map((product) => (
          <div
            key={product._id}
            className="card card-compact lg:mb-5 bg-base-100 shadow-xl mx-auto lg:mt-0 mt-8 lg:w-80 w-full "
          >
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
              {product.originalPrice ? (
                <h3 className="font-bold">
                  OriginalPrice: {product.originalPrice}
                </h3>
              ) : (
                <h3 className="font-bold">OriginalPrice: no price added</h3>
              )}

              <h3 className="font-bold">ResalePrice: {product.resalePrice}</h3>
              <h3 className="font-bold">Location: {product.loaction}</h3>
              <h3 className="font-bold">Date: {product.date}</h3>
              <h3 className="font-bold">Seller: {user?.displayName}</h3>
              <div className="card-actions">
                <label
                  onClick={() => setProducts(product)}
                  htmlFor="booking-modal"
                  className="btn text-white btn-primary"
                >
                  Book now
                </label>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* booking modal */}
      {products && (
        <BookingModal
          setProducts={setProducts}
          products={products}
        ></BookingModal>
      )}
    </div>
  );
};

export default AllProducts;
