import React from "react";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="container-fluid">
      <div class="row justify-content-center mt-5 pt-5">
        <div class="col-4">
          <div className="shadow border border-2 p-3 rounded">
            <div className="mb-2 text-center">
              <h3>Daftar Sekarang</h3>
              <small>
                Sudah punya akun? <Link to="/">Login</Link>
              </small>
            </div>
            <div className="mb-3">
              {/* <label>Email</label> */}
              <input
                type="text"
                className="form-control"
                placeholder="Username"
              />
              {/* <small>Input email format</small> */}
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
              {/* <label>Password</label> */}
              <small>Birthdate</small>
              <input type="date" className="form-control" />
            </div>
            <div className="mb-5 text-center">
              <div className="form-check form-check-inline border p-2 rounded col-5">
                <input
                  className="form-check-input"
                  type="radio"
                  id="gender"
                  name="gender"
                />
                <label className="form-check-label" htmlFor="Male">
                  Male
                </label>
              </div>
              <div className="form-check form-check-inline border p-2 rounded col-5">
                <input
                  className="form-check-input"
                  type="radio"
                  id="gender"
                  name="gender"
                />
                <label className="form-check-label" htmlFor="Female">
                  Female
                </label>
              </div>
            </div>
            <div className="mb-3">
              <button className="btn btn-block btn-success rounded">
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
