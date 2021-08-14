import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

export default function AddCart() {
  const history = useHistory();
  const URL = "http://localhost:3000";
  const [status, setStatus] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    addData();
  };

  const addData = async () => {
    try {
      const access_token = localStorage.getItem("access_token");
      const result = await axios({
        method: "POST",
        url: `${URL}/carts/create`,
        data: {status},
        headers: {
          access_token,
        },
      });
      console.log(result.data);
      history.push("/cart");
      Swal.fire("Congratulations", "Cart has been created", "success");
    } catch (err) {
      Swal.fire("ERROR", `${err}`, "error");
      console.log(err);
    }
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-4"></div>
        <div className="col-4 border border-2 p-2 m-4 rounded">
          <small>Status</small>
          <input
            type="text"
            className="form-control"
            placeholder="Status"
            name="status"
            onChange={(e) => setStatus(e.target.value)}
          />
          <div className="my-3 text-center">
          <button className="btn btn-success" onClick={(e) => submitHandler(e)}>
            Create
          </button>
        </div>
        </div>
        
      </div>
      <div className="col-4"></div>
    </div>
  );
}
