import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

export default function EditPassword() {
  const URL = "http://localhost:3000";
  const history = useHistory();
//   const [password, setPassword] = useState("");
  const [passwordNew, setPasswordNew] = useState("");
  const [passwordVer, setPasswordVer] = useState("");
  const [user, setUser] = useState({});
  useEffect(() => {
    console.log("use effect jalan");
    getPassword();
  }, []);

  const getPassword = async () => {
    try {
      const access_token = localStorage.getItem("access_token");
      let result = await axios({
        method: "GET",
        url: `${URL}/users/profile`,
        headers: {
          access_token,
        },
      });
      setUser(result.data);
    } catch (e) {
      console.log(e);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    let objTemp = {
      passwordNew,
      passwordVer,
    };
    updatePassword(objTemp, e);
  };

  const updatePassword = async (userPwd, e) => {
    try {
      const access_token = localStorage.getItem("access_token");
      const { passwordNew, passwordVer } = userPwd;
      if (passwordNew === passwordVer) {
        const result = await axios({
          method: "PUT",
          url: `${URL}/users/updatePwd`,
          data: { password: passwordNew },
          headers: {
            access_token,
          },
        });
        console.log(result.data);
        Swal.fire("Congratulations", "Password has been updated", "success");
        history.push("/");
      } else {
        Swal.fire("Sorry", "Password has invalid", "error");
      }
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
              <small>Password</small>
              <input
                type="text"
                className="form-control"
                placeholder="Username"
                value={user.password}
                // onChange={(e) => setPassword(e.target.value)}
                // onChange={(e) => setUser(user.name, e.target.value)}
              />
            </div>
            <div className="mb-3">
              <small>New Password</small>
              <input
                type="text"
                className="form-control"
                placeholder="New Password"
                onChange={(e) => setPasswordNew(e.target.value)}
                // onChange={(e) => setPassword(e.target.value)}
                // onChange={(e) => setUser(user.name, e.target.value)}
              />
            </div>
            <div className="mb-3">
              <small>Verification</small>
              <input
                type="text"
                className="form-control"
                placeholder="Verification"
                onChange={(e) => setPasswordVer(e.target.value)}
                // onChange={(e) => setPassword(e.target.value)}
                // onChange={(e) => setUser(user.name, e.target.value)}
              />
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
