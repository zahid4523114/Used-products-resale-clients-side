import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import bannerLogo from "../../camera.jpg";
import "./Home.css";

const Home = () => {
  // const { data: categories = [] } = useQuery({
  //   queryKey: ["categories"],
  //   queryFn: async () => {
  //     const res = await fetch(`http://localhost:5000/categories`);
  //     const data = res.json();
  //     return data;
  //   },
  // });
  const [loader, setLoader] = useState(true);

  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/categories`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCategories(data);
        setLoader(false);
      });
  }, []);

  return (
    <section>
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
            <Link>
              <button className="btn glass">Explore more</button>
            </Link>
          </div>
        </div>
      </div>

      {/* categories section */}
      <section>
        <h1 className="text-center text-3xl font-bold mt-20">Categories</h1>
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
                      <Link to={`/category/${category.categoryId}`}>
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
      {/* user experience */}
      <div className="text-3xl font-bold text-center  my-20">
        <h1 className="mb-8">User experience</h1>
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
