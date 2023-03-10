import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import toast from "react-hot-toast";
import { AuthContext } from "../Context/ContextProvider";
import UserToken from "../UserToken/UserToken";

const Register = () => {
  const { userRegister, loginWithGoogle, updateUser } = useContext(AuthContext);

  const [userEmail, setUserEmail] = useState("");

  const [token] = UserToken(userEmail);

  const navigate = useNavigate();

  if (token) {
    navigate("/home");
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRegister = (data) => {
    const email = data.email;
    const password = data.password;
    const name = data.name;
    const role = data.user;
    // console.log(email, password, name, role);
    //register user
    userRegister(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        updateUser(name);

        //add user to db
        const userData = {
          name,
          email,
          role,
        };
        fetch(`https://used-products-resale-server-side.vercel.app/users`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.acknowledged) {
              setUserEmail(email);
              toast.success("User added successfully");
              // navigate("/");
              console.log(data);
            }
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="hero min-h-screen px-3 bg-base-200">
      <div className="hero-content flex-col my-5 mx-auto  p-0 ">
        <div className="text-center mb-3">
          <h1 className="text-5xl font-bold">
            Register <span className="text-accent">now!</span>{" "}
          </h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(handleRegister)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                {...register("name", { required: true })}
                type="text"
                placeholder="User name"
                className="input input-bordered"
              />
            </div>
            {errors.name && (
              <p className="text-red-600">name is required...!</p>
            )}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                {...register("email", { required: true })}
                type="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            {errors.email && (
              <p className="text-red-600">Email is required...!</p>
            )}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                {...register("password", {
                  required: "Password is required!",
                  minLength: {
                    value: 6,
                    message: "Password should be 6 characters",
                  },
                  pattern: {
                    value: /(?=.*\d)(?=.*[A-Z])(?=.*[a-z])/,

                    message:
                      "Password must be strong.Use symbols,minimum one capital letter and small letter..!",
                  },
                })}
                type="password"
                placeholder="password"
                className="input input-bordered"
              />
              <select
                {...register("user", { required: true })}
                className="select w-full my-5 select-bordered max-w-xs"
              >
                <option>Buyer</option>
                <option>Seller</option>
              </select>
              {errors.password && (
                <p className="text-red-600 mt-3">{errors.password?.message}</p>
              )}
              <label className="label">
                <Link to="/login" className="label-text-alt link link-hover">
                  Already have an account?
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary text-white">Register</button>
            </div>
          </form>
        </div>
        <button
          onClick={loginWithGoogle}
          className="btn rounded-lg btn-dark w-full"
        >
          <FcGoogle className="text-4xl mr-2"></FcGoogle>
          Sign Up with Google
        </button>
      </div>
    </div>
  );
};

export default Register;
