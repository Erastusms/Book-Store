import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="container-fluid">
      <div class="row justify-content-center mt-5 pt-5">
        <div class="col-5">
          <div className="mt-5">
            <h1>Book Store</h1>
            <p className="lh-base">
              Book Store membantu Anda mengetahui setiap buku yang terjual
              dengan harga terjangkau sesuai minat Anda
            </p>
          </div>
        </div>
        <div class="col-4">
          <div className="shadow border border-2 p-3 rounded">
            <div className="mb-2 text-center">
              <h3>Login Sekarang</h3>
              <small>
                Belum punya akun? <Link to="/register">Register</Link>
              </small>
            </div>
            <div className="mb-3">
              {/* <label>Email</label> */}
              <input
                type="email"
                className="form-control"
                placeholder="Email"
              />
              {/* <small>Input email format</small> */}
            </div>
            <div className="mb-3">
              {/* <label>Password</label> */}
              <input
                type="password"
                className="form-control"
                placeholder="Password"
              />
            </div>
            <div className="mb-3">
              <button className="btn btn-block btn-primary rounded">
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
