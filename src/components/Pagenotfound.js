import React from "react";
import { Link } from "react-router-dom";

const Pagenotfound = () => {
  return (
    <>
      <div className="not-found">
            <h1> Ooops...! Page not found</h1>
            <br />
            <Link to="/" className="button">
              <button className="btn btn-primary">Home Page </button>
            </Link>
      </div>
    </>
  );
};
export default Pagenotfound;
