import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../Context/ContextProvider";
import toast from "react-hot-toast";
import UserToken from "../UserToken/UserToken";

const Login = () => {
  const { userLogin, loginWithGoogle } = useContext(AuthContext);

  const [userEmail, setUserEmail] = useState("");

  const navigate = useNavigate();

  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const [token] = UserToken(userEmail);

  if (token) {
    navigate(from, { replace: true });
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = (data) => {
    const email = data.email;
    const password = data.password;
    //
    userLogin(email, password)
      .then((result) => {
        const user = result.user;
        setUserEmail(email);
        toast.success("Login successful");
        navigate(from, { replace: true });
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  console.log(userEmail);
  return (
    <div className="hero min-h-screen  bg-base-200">
      <div className="hero-content flex-col my-5  mx-auto p-0 ">
        <div className="text-center mb-3">
          <h1 className="text-5xl font-bold">
            Login <span className="text-accent">now!</span>{" "}
          </h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(handleLogin)} className="card-body">
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
                    message: "Password must be strong..!",
                  },
                })}
                type="password"
                placeholder="password"
                className="input input-bordered"
              />
              {errors.password && (
                <p className="text-red-600 mt-3">{errors.password?.message}</p>
              )}
              <label className="label">
                <Link className="label-text-alt link link-hover">
                  Forgot password?
                </Link>
              </label>
              <label className="label">
                <Link to="/register" className="label-text-alt link link-hover">
                  Create an account?
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary text-white">Login</button>
            </div>
          </form>
        </div>
        <button onClick={loginWithGoogle} className="btn btn-dark w-full ">
          <FcGoogle className="text-4xl mr-2"></FcGoogle>
          Log in with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
