import React, { useContext } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/ContextProvider";

const AddProduct = ({ setAddedProduct }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleAddProduct = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const image = form.image.value;
    const price = form.price.value;
    const uses = form.uses.value;
    const review = form.review.value;
    const category = form.category.value;
    const date = form.date.value;
    const phone = form.phone.value;
    const loaction = form.location.value;
    const description = form.description.value;

    const addProductData = {
      email: user?.email,
      photo: image,
      title: name,
      resalePrice: price,
      categoryName: category,
      uses,
      review,
      date,
      phone,
      loaction,
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
          fetch(`http://localhost:5000/products`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(addProductData),
          })
            .then((res) => res.json())
            .then((data) => {
              toast.success("Product added successfully");
              form.reset();
              navigate("/dashBoard/myProducts");
              console.log(data);
            });
        }
      });
  };
  return (
    <div className="p-3">
      <h1 className="font-bold text-3xl">Add a product</h1>
      <form onSubmit={handleAddProduct} className="lg:w-1/2 w-full  ">
        <input
          required
          name="image"
          type="text"
          placeholder="Image url"
          className=" input-bordered my-3 input w-full "
        />
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
        <input
          required
          name="uses"
          type="number"
          placeholder="Uses"
          className=" input-bordered my-3 input w-full "
        />
        <select name="review" className="select select-bordered w-full mb-5">
          <option>Good</option>
          <option>Bad</option>
        </select>
        <select name="category" className="select select-bordered w-full mb-3">
          <option>nikon</option>
          <option>sony</option>
          <option>canon</option>
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
