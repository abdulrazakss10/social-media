"use client";
import React, { useState } from "react";
import "./FirstContainers.css";

import FilterIcon from "../../../public/logo/FilterIcon.svg";
import searchicon from "../../../public/logo/SearchIcon.svg";
const Headercontainer = () => {
  const [state, setstate] = useState();

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12 col-md-3 col-lg-3">
          <p className="logotxt">LOGO</p>
        </div>
        <div className="col-sm-12 col-md-3 col-lg-6">
          <div className="search-container">
            {/* Search Icon */}
            <img
              src="/logo/SearchIcon.svg"
              alt="Search"
              className="search-icon"
            />

            {/* Input Field */}
            <input
              type="text"
              placeholder="Search here..."
              className="search-input"
            />

            {/* Filter Icon with Text */}
            <div className="filter-container">
              <img
                src="/logo/FilterIcon.svg"
                alt="Filter"
                className="filter-icon"
              />
              <span className="filter-text">Filters</span>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-3 col-lg-3">
          <button className="sellerbtn">
            <p>Become a seller</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Headercontainer;
