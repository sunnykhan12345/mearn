import React from "react";
import { Link } from "react-router-dom";
const Nav = () => {
  const auth = localStorage.getItem("user");
  return (
    <>
      <div className="nav">
        <ul className="nav_ul">
          <li>
            <Link to={"/"}>Products</Link>{" "}
          </li>
          <li>
            {" "}
            <Link to={"/add"}>Add Product</Link>{" "}
          </li>
          <li>
            {" "}
            <Link to={"/update"}>Update Product</Link>{" "}
          </li>
          <li>
            {" "}
            <Link to={"/logout"}>Logout</Link>{" "}
          </li>
          <li>
            {" "}
            <Link to={"/profile"}>Profile</Link>
          </li>
        </ul>
        <div className="personal">
          <li>
            {" "}
            <Link to={"/signup"}>Signup</Link>
          </li>
          <li>
            {auth ? (
              <Link to={"/logout"}>Logout</Link>
            ) : (
              <Link to={"/signup"}>Signup</Link>
            )}
          </li>
          <li>
            {" "}
            <Link to={"/profile"}>Profile</Link>
          </li>
        </div>
      </div>
    </>
  );
};

export default Nav;
