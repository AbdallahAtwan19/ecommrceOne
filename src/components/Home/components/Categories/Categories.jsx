import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Categories.css";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get("https://ecommerce.routemisr.com/api/v1/categories")
      .then((response) => {
        setCategories(response.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="container my-5 categories">
      <h2 className="mb-4">Shop Collection</h2>
      <div className="row">
        {categories.map((category) => (
          <div className="col-lg-4 col-md-6 mb-4" key={category._id}>
            <Link to={`/categories/${category._id}`} className="card h-100 border-0 shadow no-underline">
              <img
                src={category.image}
                alt={category.name}
                className="h-100 card-img-top"
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{category.name}</h5>
                <button className="btn btn-dark my-2">
                  Collection <i className="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
