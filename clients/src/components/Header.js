import React from "react";
import { Link, useHistory } from "react-router-dom";
import Swal from "sweetalert2";

export default function Header({ login, userLogin, isAdmin }) {
  const history = useHistory();

  const logoutHandler = (e) => {
    Swal.fire({
      title: "Hello there..",
      text: "Are you sure you want to log out?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        userLogin(false);
        localStorage.clear();
        history.push("/");
      }
    });
  };

  if (isAdmin)
    return (
      <>
        <nav className="navbar navbar-expand-md navbar-blue bg-dark p-2 m-0">
          <div className="navbar-collapse collapse justify-content-between">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link navbar-brand" to="/">
                  Book Store
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav">
              <button
                onClick={(e) => logoutHandler(e)}
                className="btn btn-sm btn-outline-danger"
              >
                Logout
              </button>
            </ul>
          </div>
        </nav>
      </>
    );

  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-blue bg-dark p-2">
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
          </ul>
          <ul className="navbar-nav">
            <button
              onClick={(e) => logoutHandler(e)}
              className="btn btn-sm btn-outline-danger"
            >
              Logout
            </button>
          </ul>
        </div>
      </nav>
    </>
  );
}
