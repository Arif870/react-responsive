import React from "react";
import "./Expert.css";

export default function Expert({ expert }) {
  const { name, img, expertize } = expert;
  return (
    <div className="col-md-4 text-center col-sm-6 col-12 col-lg-3 expert">
      <img className="w-100" src={img} alt="" />
      <p className="fs-4">{name}</p>
      <small>{expertize}</small>
    </div>
  );
}
