import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

export default function EditData() {
  const URL = "http://localhost:3000";

  const history = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [state, setState] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [gender, setGender] = useState("");

  // const [user, setUser] = useState({});
  useEffect(() => {
    console.log("use effect jalan");
    getProfile();
  }, []);

  const getProfile = async () => {
    try {
      const access_token = localStorage.getItem("access_token");
      let result = await axios({
        method: "GET",
        url: `${URL}/users/profile`,
        headers: {
          access_token,
        },
      });
      const { name, email, state, birthdate, gender } = result.data;
      setName(name);
      setEmail(email);
      setState(state);
      setBirthdate(birthdate);
      setGender(gender);
    } catch (e) {
      console.log(e);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    let objTemp = {
      name,
      email,
      state,
      birthdate,
      gender,
    };
    updateData(objTemp, e);
  };

  const updateData = async (user, e) => {
    try {
      const access_token = localStorage.getItem("access_token");
      const { name, email, state, birthdate, gender } = user;
      const result = await axios({
        method: "PUT",
        url: `${URL}/users/update`,
        data: {
          name,
          email,
          state,
          birthdate,
          gender,
        },
        headers: {
          access_token,
        },
      });
      Swal.fire("Congratulations", "Account has been updated", "success");
      history.push("/");
    } catch (err) {
      Swal.fire("ERROR", `${err}`, "error");
    }
  };

  return (
    <div className="container-fluid">
      <div className="row justify-content-center m-2 p-2">
        <div className="col-sm-4">
          <div className="shadow border border-2 p-3 rounded">
            <div className="mb-3">
              <small>Username</small>
              <input
                type="text"
                className="form-control"
                placeholder="Username"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <small>Email</small>
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <small>State</small>
              <input
                type="text"
                className="form-control"
                placeholder="State"
                value={state}
                onChange={(e) => setState(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <small>Birthdate</small>
              <input
                type="date"
                className="form-control"
                value={birthdate}
                onChange={(e) => setBirthdate(e.target.value)}
              />
            </div>
            <div className="mb-5 text-center" required>
              <div className="form-check form-check-inline border p-2 rounded col-5">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  value="Male"
                  onChange={(e) => setGender(e.target.value)}
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
                  onChange={(e) => setGender(e.target.value)}
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
                Updated
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
