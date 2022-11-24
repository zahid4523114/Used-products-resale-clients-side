import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../Context/ContextProvider";

const BookingModal = ({ products, setProducts }) => {
  const { user } = useContext(AuthContext);

  const { title, resalePrice, originalPrice, photo } = products;

  const handleModalInput = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const product = form.title.value;
    const priceOriginal = form.priceOriginal.value;
    const priceResale = form.priceResale.value;
    const phone = form.phone.value;
    const location = form.location.value;
    console.log(photo);
    const bookingData = {
      name,
      photo,
      email,
      product,
      priceOriginal,
      priceResale,
      phone,
      location,
    };
    //send booking to db
    fetch(`http://localhost:5000/bookings`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookingData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Product booked successfully.");
          setProducts(null);
        }
      });
  };
  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <form onSubmit={handleModalInput}>
            <input
              disabled
              name="name"
              defaultValue={user?.displayName}
              type="text"
              placeholder="Full name"
              className=" input-bordered my-3 input w-full "
            />
            <input
              disabled
              name="email"
              defaultValue={user?.email}
              type="email"
              placeholder="Email address"
              className=" input-bordered my-3 input w-full "
            />
            <input
              defaultValue={title}
              disabled
              name="title"
              type="text"
              placeholder="title"
              className=" input-bordered my-3 input w-full "
            />

            <input
              disabled
              defaultValue={originalPrice}
              name="priceOriginal"
              type="text"
              placeholder="priceOriginal"
              className=" input-bordered my-3 input w-full "
            />
            <input
              disabled
              defaultValue={resalePrice}
              name="priceResale"
              type="text"
              placeholder="priceResale"
              className=" input-bordered my-3 input w-full "
            />
            <input
              name="phone"
              type="text"
              placeholder="Phone"
              className=" input-bordered my-3 input w-full "
            />
            <input
              name="location"
              type="text"
              placeholder="location"
              className=" input-bordered my-3 input w-full "
            />
            <button className="btn btn-nutral  w-full">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
