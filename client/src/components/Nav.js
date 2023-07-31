import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Nav = () => {
  const auth = localStorage.getItem("user");
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate("/signup");
  };
  return (
    <div>
      {auth ? (
        <ul className="nav-ui">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/add">Add Product</Link>
          </li>
          <li>
            <Link to="/update">Update Product</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link onClick={logout} to="/signup">
              Log Out {JSON.parse(auth).name}
            </Link>
          </li>{" "}
        </ul>
      ) : (
        <ul className="nav-ui nav-right">
          <li>
            <>
              <Link to="/signup">Sign up</Link>
              <Link to="/login">Log in</Link>
            </>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Nav;
