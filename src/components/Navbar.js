import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-1"></div>
          <div className="col-sm-10">
            <nav>
              <ul className="navbar">
                {/* app heading and home page link */}
                <Link style={{ textDecoration: "none" }} to="/">
                  <h1 style={{ color: "green" }}> Student Management</h1>
                </Link>
                <br />
                {/* adding new student button with new page */}
                <Link style={{ textDecoration: "none" }} to="/students/add">
                  <button className="btn btn-info">Add Student</button>
                </Link>
              </ul>
            </nav>
          </div>
          <div className="col-sm-1"></div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
