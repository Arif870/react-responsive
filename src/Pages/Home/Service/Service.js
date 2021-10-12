import React from "react";
import "./Service.css";

export default function Service({ service }) {
  const { name, img, description, price } = service;
  return (
    <div className="service text-center">
      <img src={img} alt="" />
      <h1>{name}</h1>
      <p>{description}</p>
      <h2>Price: ${price}</h2>
    </div>
  );
}
