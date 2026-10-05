"use client";
import React from "react";
import Navmenu from "./Navbar";
import Artistsprofile from "./ArtistsTabs";
import UserFeeds from "./Userpost";

const Secontainer = () => {
  return <div className="container">
    <div className="row">
        <div className="col-sm-12 col-md-3 col-lg-3">
        <Navmenu />
        </div>
        <div className="col-sm-12 col-md-3 col-lg-6">
        <UserFeeds />
        </div>
        <div className="col-sm-12 col-md-3 col-lg-3">
        <Artistsprofile />
        </div>
      </div>
  </div>;
};
export default Secontainer;
