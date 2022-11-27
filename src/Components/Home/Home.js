import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import bannerLogo from "../../vintage.jpg";
import "./Home.css";

const Home = () => {
  const [loader, setLoader] = useState(true);

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/categories`)
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
        setLoader(false);
      });
  }, []);

  const [advertised, setAdvertised] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/setAdvertiseProduct`)
      .then((res) => res.json())
      .then((data) => {
        setAdvertised(data);
        setLoader(false);
      });
  }, []);

  return (
    <section>
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: `url(${bannerLogo})` }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="lg:w-1/2 w-lg">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">
              camera, in photography, device for recording an image of an object
              on a light-sensitive surface; it is essentially a light-tight box
              with an aperture to admit light focused onto a sensitized film or
              plate.
            </p>
            <Link>
              <button className="btn glass mx-auto">Explore more</button>
            </Link>
          </div>
        </div>
      </div>

      {/* categories section */}
      <section>
        <h1 className="text-center lg:text-3xl text-2xl font-bold mt-20">
          Categories
        </h1>
        {loader ? (
          <div className="mx-auto w-20">
            <progress className="progress w-full"></progress>
          </div>
        ) : (
          <div className="mt-10 mb-20">
            <div className="flex lg:flex-row lg:m-0 m-3 flex-col justify-around ">
              {/* get the categories data  */}
              {categories.map((category) => (
                <div
                  key={category._id}
                  className="card lg:w-96 w-full lg:mb-0 mb-5 bg-base-100 shadow-xl image-full"
                >
                  <figure>
                    <img src={category.categoryThumb} alt="Shoes" />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title  text-white">
                      {category.categoryTitle}
                    </h2>
                    <p>{category.categoryDes}</p>
                    <div className="card-actions justify-end">
                      <Link to={`/category/${category.categoryName}`}>
                        <button className="btn btn-primary text-white">
                          See category
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* advertise section */}
      {advertised.length !== 0 && (
        <section>
          <h1 className="text-center lg:text-3xl text-2xl font-bold mt-20 mb-10">
            Advertised Products
          </h1>
          {loader ? (
            <div className="mx-auto w-20">
              <progress className="progress w-full"></progress>
            </div>
          ) : (
            <div className="flex lg:flex-row flex-wrap lg:m-0 m-3 flex-col justify-around">
              {advertised.map((advertise, i) => (
                <div
                  key={i}
                  className="card card-compact mb-3 lg:w-80 w-full bg-base-100 shadow-xl"
                >
                  <figure>
                    <img src={advertise.photo} alt="Shoes" />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{advertise.title}</h2>
                    <h3 className="font-bold">
                      Price: {advertise.resalePrice}
                    </h3>
                    <h3 className="font-bold">
                      Description: {advertise.description}
                    </h3>
                    <div className="card-actions justify-end">
                      <button className="btn btn-primary text-white ">
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      )}

      {/* user experience */}
      <div className="text-3xl font-bold text-center  my-20">
        <h1 className="mb-8 lg:text-3xl text-2xl">User experience</h1>
        <div className="stats user-experience w-full text-center stats-vertical lg:stats-horizontal shadow">
          <div className="stat">
            <div className="stat-title">Buys</div>
            <div className="stat-value">10K</div>
            <div className="stat-desc">Jan 1st - Feb 1st</div>
          </div>

          <div className="stat">
            <div className="stat-title">New Users</div>
            <div className="stat-value">4,200</div>
            <div className="stat-desc">↗︎ 400 (22%)</div>
          </div>

          <div className="stat">
            <div className="stat-title">New Registers</div>
            <div className="stat-value">1,200</div>
            <div className="stat-desc">↘︎ 90 (14%)</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
