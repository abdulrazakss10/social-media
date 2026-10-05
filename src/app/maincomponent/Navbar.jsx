"use client";
import React, { useState } from "react";
import "./Navbarsidemenu.css";
// import { useRouter } from "next/router";

const menuItems = [
  { name: "Home", imgSrc: "/navmenu/home/home.png" },
  { name: "Notifications", imgSrc: "/navmenu/notification/notification.png" },
  { name: "Shop", imgSrc: "/navmenu/heart/heart.png" },
  { name: "Conversation", imgSrc: "/navmenu/message/message.png" },
  { name: "Wallet", imgSrc: "/navmenu/wallet/wallet.png" },
  { name: "Subscription", imgSrc: "/navmenu/favorite/favorite.png" },
  { name: "My Profile", imgSrc: "/navmenu/profile/profile.png" },
  { name: "Settings", imgSrc: "/navmenu/setting/setting.png" },
];

const Navmenu = () => {
  const [activeItem, setActiveItem] = useState("Home");
  //   const router = useRouter();
  return (
    <div className="sidebar">
      <ul className="nav-list">
        {menuItems.map((item) => (
          <li
            key={item.name}
            className={`nav-item ${activeItem === item.name ? "active" : ""}`}
            onClick={() => setActiveItem(item.name)}
          >
            <img src={item.imgSrc} alt={item.name} />
            <span>{item.name}</span>
          </li>
        ))}
      </ul>
      <div
        className={`nav-item logout ${
          activeItem === "Log out" ? "active" : ""
        }`}
        onClick={() => setActiveItem("Log out")}
      >
        <img src="/navmenu/logout/logout.png" alt="Log out" />
        <button>Log out</button>
      </div>
    </div>
  );
};
export default Navmenu;
