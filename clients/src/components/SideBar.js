import React from "react";
import { Link } from "react-router-dom";

function SideBar() {
  return (
    <div className="col-2">
      <div className="side-bar p-3">
        <h3 className="text-center">Admin Page</h3>
        <hr />
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/products">
              See Products
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/user">
              See User
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/addProducts">
              Add Products
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
