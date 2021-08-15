import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Link, useHistory } from "react-router-dom";
import dateFormat from "dateformat";
export default function CardOrder() {
  const URL = "http://localhost:3000";
  let history = useHistory();
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    console.log("use effect jalan");
    getOrder();
  }, []);

  const getOrder = async () => {
    try {
      const access_token = localStorage.getItem("access_token");
      let result = await axios({
        method: "GET",
        url: `${URL}/orders/showById`,
        headers: {
          access_token,
        },
      });
      console.log(result.data);
      setOrders(result.data);
    } catch (e) {
      console.log(e);
    }
  };

  const deleteItemHandler = (e, id) => {
    deleteAxios(id);
  };

  const deleteAxios = async (id) => {
    try {
      const access_token = localStorage.getItem("access_token");
      let result = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      });
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Cart has been deleted.", "success");

        await axios({
          method: "DELETE",
          url: `${URL}/orders/delete/${id}`,
          headers: {
            access_token,
          },
        });
        history.push("/");
      }
    } catch (err) {
      console.log(err);
      Swal.fire("ERROR", `${err}`, "error");
    }
  };

  return (
    <div className="container px-4 py-5" style={{ height: "100%" }}>
      <h1 className="mb-4">
        <span className="border-bottom ms-5">Order</span>
      </h1>
      <Link
        className="ms-5 btn-primary rounded text-decoration-none p-2"
        to="/addOrder"
      >
        Add New Order
      </Link>
      {orders.length === 0 ? (
        <h1 className="mx-5 mt-3">Order is Empty</h1>
      ) : (
        orders.map((order) => {
          return (
            <div className="card-group mx-5 my-4">
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-8">
                      <small className="text-muted">
                        order #{order.payt_trx_number}
                      </small>
                      <h2>{order.name}</h2>
                      <p>Jumlah barang yang dibeli: {order.total_qty}</p>
                      <p className="bg-success badge py-2">{order.status}</p>
                      <p className="text-muted small">
                        From: {order.address}, {order.city}
                      </p>
                    </div>
                    <div className="col-2 pt-5">
                      <p>Harga Barang</p>
                      <p>Discount</p>
                      <p>Tax(10%)</p>
                    </div>
                    <div className="col-2">
                      <p className="text-end">
                        <button onClick={(e) => deleteItemHandler(e, order.id)}>
                          <img
                            src="https://image.flaticon.com/icons/png/512/1214/1214428.png"
                            alt=""
                            width="20px"
                          />
                        </button>
                      </p>
                      <p className="text-warning pt-2">
                        Rp.{order.subtotal},00
                      </p>
                      <p className="text-warning">Rp.{order.discount},00</p>
                      <p className="text-warning">Rp.{order.tax},00</p>
                    </div>
                  </div>
                </div>
                <div className="card-footer">
                  <div className="row">
                    <div className="col-8">
                      <p>Total Order</p>
                      <p className="text-muted small">
                        Order created on:{" "}
                        {dateFormat(order.createdAt, "mmmm dS, yyyy")}
                      </p>
                    </div>
                    <div className="col-4 text-end text-warning fs-2">
                      <p>Rp.{order.total_due},00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}
