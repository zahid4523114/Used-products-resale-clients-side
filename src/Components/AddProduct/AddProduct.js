import React, { useContext } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/ContextProvider";

const AddProduct = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleAddProduct = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const price = form.price.value;
    const review = form.review.value;
    const category = form.category.value;
    const date = form.date.value;
    const phone = form.phone.value;
    const location = form.location.value;
    const description = form.description.value;

    const addProductData = {
      email: user?.email,
      name,
      price,
      review,
      category,
      date,
      phone,
      location,
      description,
    };

    //send data to db
    fetch(`http://localhost:5000/addProduct`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addProductData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Product added successfully");
          form.reset();
          navigate("/dashBoard/myProducts");
          console.log(data);
        }
      });
  };
  return (
    <div className="p-3">
      <h1 className="font-bold text-3xl">Add a product</h1>
      <form onSubmit={handleAddProduct} className="lg:w-1/2 w-full  ">
        <input
          required
          name="name"
          type="text"
          placeholder="Product name"
          className=" input-bordered my-3 input w-full "
        />
        <input
          required
          name="price"
          type="number"
          placeholder="Price"
          className=" input-bordered my-3 input w-full "
        />
        <select name="review" className="select select-bordered w-full mb-5">
          <option>Good</option>
          <option>Bad</option>
        </select>
        <select name="category" className="select select-bordered w-full mb-3">
          <option>a1 category</option>
          <option>b2 category</option>
          <option>c3 category</option>
        </select>

        <input
          name="date"
          required
          className=" input-bordered my-3 input w-full "
          type="date"
        />

        <input
          required
          name="phone"
          type="text"
          placeholder="Phone"
          className=" input-bordered my-3 input w-full "
        />
        <input
          required
          name="location"
          type="text"
          placeholder="location"
          className=" input-bordered my-3 input w-full "
        />
        <textarea
          name="description"
          className="textarea textarea-bordered h-24 w-full"
          placeholder="Enter description here"
        ></textarea>
        <button className="btn btn-nutral  w-full">Submit</button>
      </form>
    </div>
  );
};

export default AddProduct;
