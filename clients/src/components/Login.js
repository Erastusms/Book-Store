import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
export default function Login({ login, userLogin, getToken }) {
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const submitHandler = (e) => {
    e.preventDefault();
    loginAxios();
  };

  const loginAxios = async () => {
    try {
      const result = await axios({
        method: "POST",
        url: "http://localhost:3000/users/login",
        data: state,
      });
      const access_token = result.data["access_token"];
      console.log(access_token);
      userLogin(true);
      getToken(access_token);
    } catch (err) {
      Swal.fire("ERROR", `${err}`, "error");
    }
  };

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
                onChange={e => setState({ ...state, email: e.target.value })}
              />
              {/* <small>Input email format</small> */}
            </div>
            <div className="mb-3">
              {/* <label>Password</label> */}
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                onChange={e => setState({ ...state, password: e.target.value })}
              />
            </div>
            <div className="mb-3 text-center">
              <button
                onClick={(e) => submitHandler(e)}
                className="btn btn-block btn-primary"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
