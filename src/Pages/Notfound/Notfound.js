import React from "react";
import { Link } from "react-router-dom";
import notfound from "../../images/icon/notfound.png";

export default function Notfound() {
  return (
    <div>
      <h1 className="fw-light text-center mt-5">Opps!</h1>
      <p className="text-center">Page not found</p>
      <img className="d-block mx-auto img-fluid " src={notfound} alt="" />
      <Link to="/">
        <button className="btn btn-success d-block mx-auto mt-4">
          Go back
        </button>
      </Link>
    </div>
  );
}
