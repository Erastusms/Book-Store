import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import Fade from "react-reveal/Fade";

export default function Register() {
  const history = useHistory();
  const URL = "http://localhost:3000";
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
    state: "",
    birthdate: "",
    gender: "",
  });

  const [avatar, setAvatar] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    addData();
  };

  const addData = async () => {
    try {
      let data = new FormData();
      data.append("avatar", avatar);
      data.append("name", state.name);
      data.append("email", state.email);
      data.append("password", state.password);
      data.append("state", state.state);
      data.append("gender", state.gender);
      data.append("birthdate", state.birthdate);
      const result = await axios({
        method: "POST",
        url: `${URL}/users/register`,
        data: data,
        header: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(result.data);
      history.push("/");
      Swal.fire("Congratulations", "Account has been created", "success");
    } catch (err) {
      // Swal.fire("ERROR", `${err}`, "error");
      console.log(err);
    }
  };

  return (
    <div className="container-fluid">
      {/* <div className="row justify-content-center mt-5 pt-5">
        <div className="col-md-4">
          <div className="shadow border border-2 p-3 rounded"> */}
      <form class="row g-3 was-validated">
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
          <small className="valid-feedback">Username can be used!</small>
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
          <small className="valid-feedback">Email verified!</small>
        </div>
        <div className="mb-3">
          <small>Password</small>
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            required
            onChange={(e) => setState({ ...state, password: e.target.value })}
          />
          <small className="valid-feedback">Nice password!</small>
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
            onChange={(e) => setState({ ...state, birthdate: e.target.value })}
          />
          <small className="valid-feedback">Awesome birthdate!</small>
        </div>
        <div className="mb-5 text-center">
          <div className="form-check form-check-inline border py-2 px-5 mx-5 rounded col-4">
            <input
              className="form-check-input"
              type="radio"
              name="gender"
              value="Male"
              required
              onChange={(e) => setState({ ...state, gender: e.target.value })}
            />
            <small className="form-check-label" htmlFor="Male">
              Male
            </small>
          </div>
          <div className="form-check form-check-inline border py-2 px-5 mx-5 rounded col-4">
            <input
              className="form-check-input"
              type="radio"
              name="gender"
              value="Female"
              required
              onChange={(e) => setState({ ...state, gender: e.target.value })}
            />
            <small className="form-check-label" htmlFor="Female">
              Female
            </small>
          </div>
        </div>
        <div className="mb-3">
          <small>Upload File</small>
          <input
            type="file"
            className="form-control"
            name="avatar"
            required
            onChange={(e) => setAvatar(e.target.files[0])}
          />
          <small className="valid-feedback">File uploaded!</small>
        </div>
        <div className="mb-3 text-center">
          <button className="btn btn-success" onClick={(e) => submitHandler(e)}>
            Register
          </button>
        </div>
      </form>
      {/* </div>
        </div>
      </div> */}
    </div>
  );
}
