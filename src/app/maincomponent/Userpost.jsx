"use client";
import React, { useEffect, useRef, useState } from "react";
import "./Userpost.css";

const UserFeeds = () => {
  const [expanded, setExpanded] = useState(false);
  const [showReadMore, setShowReadMore] = useState(false);
  const textRef = useRef(null);

  //   useEffect(() => {
  //     if (textRef.current) {
  //       setShowReadMore(
  //         textRef.current.scrollHeight > textRef.current.clientHeight
  //       );
  //     }
  //   }, []);
  useEffect(() => {
    const checkOverflow = () => {
      if (textRef.current) {
        const isOverflowing =
          textRef.current.scrollHeight > textRef.current.clientHeight;
        setShowReadMore(isOverflowing);
      }
    };

    // Ensure content is rendered first before checking
    requestAnimationFrame(() => {
      setTimeout(checkOverflow, 0);
    });

    window.addEventListener("resize", checkOverflow);
    return () => window.removeEventListener("resize", checkOverflow);
  }, []);
  const posts = [
    {
      id: 1,
      user: {
        name: "Lara Leones",
        username: "@thewallart",
        profilePic:
          "/profilecard/pexels-ali-pazani-2613260/pexels-ali-pazani-2613260.png", // Replace with actual URL
      },
      text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      image:
        "/profilecard/pexels-humphrey-muleba-2045248/pexels-humphrey-muleba-2045248.png", // Replace with actual URL
      likes: "9.8k",
      comments: "8.6k",
      shares: "7.2k",
    },
    {
      id: 2,
      user: {
        name: "Thomas J",
        username: "@thecustomcreater",
        profilePic:
          "/profilecard/pexels-imad-clicks-9810659/pexels-imad-clicks-9810659.png", // Replace with actual URL
      },
      text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      image:
        "/profilecard/pexels-tobias-bjørkli-2236382/pexels-tobias-bjørkli-2236382.png", // Replace with actual URL
      likes: "9.8k",
      comments: "8.6k",
      shares: "7.2k",
    },
  ];

  const products = [
    {
      id: 4,
      image: "/artists/pexels-pixabay-164455/pexels-pixabay-164455.png",
      title: "Modern Wall Decor Framed Painting",
      price: "$199.99",
      rating: 4.5,
    },
    {
      id: 1,
      image: "/section2/Image 39/Image 39.png",
      title: "Modern Wall Decor Framed Painting",
      price: "$199.99",
      rating: 5,
    },
    {
      id: 2,
      image: "/section2/Image 40/Image 40.png",
      title: "Modern Wall Decor Framed Painting",
      price: "$199.99",
      rating: 4.5,
    },
    {
      id: 3,
      image:
        "/section2/pexels-max-vakhtbovych-6782342/pexels-max-vakhtbovych-6782342.png",
      title: "Modern Wall Decor Framed Painting",
      price: "$199.99",
      rating: 4.5,
    },
  ];

  return (
    <div className="feed-container">
      {posts.map((post) => (
        <div key={post.id} className="feed-card">
          {/* User Info */}
          <div className="feed-header">
            <div className="profile-container">
              <img
                src={post.user.profilePic}
                alt="User"
                className="profile-pic"
              />
              {/* <div className="online-dot"></div> */}
              <div className="user-info">
                <h3>{post.user.name}</h3>
                <p>{post.user.username}</p>
              </div>
            </div>
            <button className="options-btn">⋮</button>
          </div>

          {/* Post Text */}
          <p
            className={`post-text ${expanded ? "expanded" : ""}`}
            ref={textRef}
          >
            {post.text}
          </p>
          {showReadMore && !expanded && (
            <span className="read-more" onClick={() => setExpanded(true)}>
              Read More
            </span>
          )}
          {/* Post Image */}
          <div className="post-image-container">
            <img src={post.image} alt="Post" className="post-image" />
            <div className="like-btn">
              <img src="/profilecard/heart (1)/heart.png" alt="" />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="post-actions">
            <div>
              <img src="/profilecard/heart/heart.png" alt="" />
              <span>{post.likes}</span>
            </div>
            <div>
              <img src="/profilecard/comment/comment.png" alt="" />
              <span>{post.comments}</span>
            </div>
            <div>
              <img src="/profilecard/share/share.png" alt="" />
              <span>{post.shares}</span>
            </div>
          </div>
        </div>
      ))}
      {/* <h2 className="product-section-title">Suggested Products</h2> */}
      <div className="product-container">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt="Product" className="product-image" />
            <h3 className="product-title">{product.title}</h3>
            <div className="flex items-center justify-between">
              <span className="product-price">{product.price}</span>
              <div className="product-rating flex">
                {[...Array(Math.floor(product.rating))].map((_, i) => (
                  <img
                    key={i}
                    src="/section2/star/star.png"
                    alt="star"
                    className="star-icon"
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default UserFeeds;
