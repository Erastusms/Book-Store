import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

export default function Header() {
  // const logoutHandler = (e) => {
  //   e.preventDefault();
  //   Swal.fire({
  //     title: "Hello there..",
  //     text: "Are you sure you want to log out?",
  //     icon: "warning",
  //     showCancelButton: true,
  //     confirmButtonColor: "#3085d6",
  //     cancelButtonColor: "#d33",
  //     confirmButtonText: "Yes, delete it!",
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       userLogin(false);
  //       localStorage.clear();
  //     }
  //   });
  // };

  return (
    <>
      <nav className="navbar navbar-expand-md navbar-light bg-light p-2">
        <div className="navbar-collapse collapse justify-content-between">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link navbar-brand" to="/">
                Book Store
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/profile">
                Profile
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart">
                Cart
              </Link>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a class="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item bg-danger">
              <Link className="nav-link text-white" to="">
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
