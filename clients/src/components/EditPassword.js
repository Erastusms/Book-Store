import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

export default function EditPassword() {
  const URL = "http://localhost:3000";
  const history = useHistory();
  const [password, setPassword] = useState("");
  const [newPwd, setPasswordNew] = useState("");
  const [verPwd, setPasswordVer] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    let objTemp = {
      password,
      newPwd,
      verPwd,
    };
    updatePassword(objTemp, e);
  };

  const updatePassword = async (userPwd, e) => {
    try {
      const access_token = localStorage.getItem("access_token");
      const { password, newPwd, verPwd } = userPwd;
      if (newPwd === verPwd) {
        const result = await axios({
          method: "PUT",
          url: `${URL}/users/updatePwd`,
          data: { password, newPwd, verPwd },
          headers: {
            access_token,
          },
        });
        console.log(result.data);
        Swal.fire("Congratulations", "Password has been updated", "success");
        history.push("/");
      } else {
        Swal.fire("Sorry", "New Password and Verification not same", "error");
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
                placeholder="Password Lama"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <small>New Password</small>
              <input
                type="text"
                className="form-control"
                placeholder="New Password"
                onChange={(e) => setPasswordNew(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <small>Verification</small>
              <input
                type="text"
                className="form-control"
                placeholder="Verification"
                onChange={(e) => setPasswordVer(e.target.value)}
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
