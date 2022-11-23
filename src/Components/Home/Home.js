import React from "react";
import { Link } from "react-router-dom";
import bannerLogo from "../../camera.jpg";

const Home = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{ backgroundImage: `url(${bannerLogo})` }}
    >
      <div className="hero-overlay bg-opacity-50"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-lg">
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          <p className="mb-5">
            camera, in photography, device for recording an image of an object
            on a light-sensitive surface; it is essentially a light-tight box
            with an aperture to admit light focused onto a sensitized film or
            plate.
          </p>
          <Link to={"/categories"}>
            <button className="btn glass">Explore more</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
