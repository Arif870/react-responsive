import React from "react";
import { Link } from "react-router-dom";
import "./Service.css";

export default function Service({ service }) {
  const { id, name, img, description, price } = service;
  return (
    <div className="service text-center">
      <img src={img} alt="" />
      <h1 className="mt-4">{name}</h1>
      <p>{description}</p>
      <h2>Price: ${price}</h2>

      <Link to={`/booking/${id}`}>
        <button className="btn btn-primary my-3">
          Book {name.toLowerCase()}
        </button>
      </Link>
    </div>
  );
}
