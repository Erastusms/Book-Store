import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

export default function AddCart() {
  const URL = "http://localhost:3000";
  const params = useParams();
  const id = +params.id;
  const history = useHistory();

  const [status, setStatus] = useState("");
  useEffect(() => {
    console.log("use effect jalan");
    getCarts();
  }, []);

  const getCarts = async () => {
    try {
      const access_token = localStorage.getItem("access_token");
      let result = await axios({
        method: "GET",
        url: `${URL}/carts/${id}`,
        headers: {
          access_token,
        },
      });
      const { status } = result.data;
      setStatus(status);
    } catch (e) {
      console.log(e);
    }
  };
  const submitHandler = (e) => {
    e.preventDefault();
    editCart();
  };

  const editCart = async () => {
    try {
      const access_token = localStorage.getItem("access_token");
      const result = await axios({
        method: "PUT",
        url: `${URL}/carts/update/${id}`,
        data: { status },
        headers: {
          access_token,
        },
      });
      console.log(result.data);
      history.push("/cart");
      Swal.fire("Congratulations", "Cart has been updated", "success");
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
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          />
          <div className="my-3 text-center">
            <button
              className="btn btn-success"
              onClick={(e) => submitHandler(e)}
            >
              Updated
            </button>
          </div>
        </div>
      </div>
      <div className="col-4"></div>
    </div>
  );
}
