import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

export default function AddOrder() {
  const history = useHistory();
  const URL = "http://localhost:3000";
  const [state, setState] = useState({
    name: "",
    subtotal: 0,
    total_qty: 0,
    city: "",
    address: "",
  });
  const submitHandler = (e) => {
    e.preventDefault();
    addData();
  };

  const addData = async () => {
    try {
      const access_token = localStorage.getItem("access_token");
      const result = await axios({
        method: "POST",
        url: `${URL}/orders/create`,
        data: state,
        headers: {
          access_token,
        },
      });
      console.log(result.data);
      history.push("/cart");
      Swal.fire("Congratulations", "Order has been created", "success");
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
          <small>Name</small>
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            name="name"
            onChange={(e) => setState({...state, name: e.target.value })}
          />
          <small>Subtotal</small>
          <input
            type="number"
            className="form-control"
            placeholder="Subtotal"
            name="subtotal"
            onChange={(e) => setState({...state, subtotal: e.target.value })}
          />
          <small>Total Kuantitas</small>
          <input
            type="number"
            className="form-control"
            placeholder="Total Kuantitas"
            name="total_qty"
            onChange={(e) => setState({...state, total_qty: e.target.value })}
          />
          <small>City</small>
          <input
            type="text"
            className="form-control"
            placeholder="City"
            name="city"
            onChange={(e) => setState({...state, city: e.target.value })}
          />
          <small>Address</small>
          <input
            type="text"
            className="form-control"
            placeholder="Adress"
            name="address"
            onChange={(e) => setState({...state, address: e.target.value })}
          />
          <div className="my-3 text-center">
            <button
              className="btn btn-success"
              onClick={(e) => submitHandler(e)}
            >
              Create
            </button>
          </div>
        </div>
      </div>
      <div className="col-4"></div>
    </div>
  );
}
