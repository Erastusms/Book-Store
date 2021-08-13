import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

export default function Register() {
  const history = useHistory()
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
    state: "",
    birthdate: "",
    gender: "",
  });

  const submitHandler = (e) => {
    e.preventDefault();
    // this.setState({ [e.target.name]: e.target.value });
    addData();
  };

  const addData = async () => {
    try {
      const result = await axios({
        method: "POST",
        url: "http://localhost:3000/users/register",
        data: state,
      });
      console.log(result.data);
      history.push("/");
      Swal.fire(
        'Welcome new member',
        'Acoount has been created',
        'success'
      )
    } catch (err) {
      Swal.fire("ERROR", `${err}`, "error");
    }
  };

  return (
    <div className="container-fluid">
      <div className="row justify-content-center mt-5 pt-5">
        <div className="col-sm-4">
          <div className="shadow border border-2 p-3 rounded">
            <div className="mb-2 text-center">
              <h3>Daftar Sekarang</h3>
              <small>
                Sudah punya akun? <Link to="/">Login</Link>
              </small>
            </div>
            <div className="mb-3">
              <small>Username</small>
              <input
                type="text"
                className="form-control"
                placeholder="Username"
                required
                onChange={(e) => setState({ ...state, name: e.target.value })}
              />
              {/* <small>Input email format</small> */}
            </div>
            <div className="mb-3">
              <small>Email</small>
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                required
                onChange={(e) => setState({ ...state, email: e.target.value })}
              />
              {/* <small>Input email format</small> */}
            </div>
            <div className="mb-3">
              <small>Password</small>
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                required
                onChange={(e) =>
                  setState({ ...state, password: e.target.value })
                }
              />
            </div>
            <div className="mb-3">
              <small>State</small>
              <input
                type="text"
                className="form-control"
                placeholder="State"
                required
                onChange={(e) => setState({ ...state, state: e.target.value })}
              />
            </div>
            <div className="mb-3">
              <small>Birthdate</small>
              <input
                type="date"
                className="form-control"
                required
                onChange={(e) =>
                  setState({ ...state, birthdate: e.target.value })
                }
              />
            </div>
            <div className="mb-5 text-center" required>
              <div className="form-check form-check-inline border p-2 rounded col-5">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  value="Male"
                  onChange={(e) =>
                    setState({ ...state, gender: e.target.value })
                  }
                />
                <small className="form-check-label" htmlFor="Male">
                  Male
                </small>
              </div>
              <div className="form-check form-check-inline border p-2 rounded col-5">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  value="Female"
                  onChange={(e) =>
                    setState({ ...state, gender: e.target.value })
                  }
                />
                <small className="form-check-label" htmlFor="Female">
                  Female
                </small>
              </div>
            </div>
            <div className="mb-3 text-center">
              <button
                className="btn btn-success"
                onClick={(e) => submitHandler(e)}
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
