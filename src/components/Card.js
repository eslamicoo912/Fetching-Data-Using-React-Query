import React from "react";

export default function UserCard({ user }) {
  const { title, price, category, image } = user;
  return (
    <div className="card">
      <img className="img-responsive" alt="" src={image} />
      <h3 className="title">{title}</h3>
      <div className="text-container">
        <p className="category">{category}</p>
        <p className="price">${price}</p>
      </div>
    </div>
  );
}
