import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Nav = () => {
  const auth = localStorage.getItem("user");
  const navigate = useNavigate(); // Move useNavigate to the top level

  const Logout = () => {
    localStorage.clear();
    navigate("/signup");
  };

  return (
    <>
      <div className="nav">
        {auth ? (
          <ul className="nav_ul">
            <li>
              <Link to={"/"}>Products</Link>
            </li>
            <li>
              <Link to={"/add"}>Add Product</Link>
            </li>
            <li>
              <Link to={"/update"}>Update Product</Link>
            </li>
            <li>
              <Link to={"/profile"}>Profile</Link>
            </li>
            <li>
              <Link onClick={Logout} to={"#"}>
                Logout ({JSON.parse(auth).name})
              </Link>
            </li>
          </ul>
        ) : (
          <div className="personal nav-right">
            <li>
              <Link to={"/signup"}>Signup</Link>
            </li>
            <li>
              <Link to={"/login"}>Login</Link>
            </li>
          </div>
        )}
      </div>
    </>
  );
};

export default Nav;
