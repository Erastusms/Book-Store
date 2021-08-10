import React from "react";

export default function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a href="#" className="navbar-brand">
          Book Store
        </a>
        <div className="ml-auto">
          <a href="#" className="btn btn-outline-success mr-3">
            Login
          </a>
          <a href="#" className="btn btn-outline-danger">
            Daftar
          </a>
        </div>
      </nav>
    </>
  );
}
