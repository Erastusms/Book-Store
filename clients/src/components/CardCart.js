import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Link, useHistory } from "react-router-dom";

export default function CardCart() {
  const URL = "http://localhost:3000";
  let history = useHistory();
  const [carts, setCarts] = useState([]);
  useEffect(() => {
    getCart();
  }, []);

  const getCart = async () => {
    try {
      const access_token = localStorage.getItem("access_token");
      let result = await axios({
        method: "GET",
        url: `${URL}/carts/myCarts`,
        headers: {
          access_token,
        },
      });
      console.log(result.data);
      setCarts(result.data);
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
          url: `${URL}/carts/delete/${id}`,
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
        <span className="border-bottom ms-5">Cart</span>
      </h1>
      <Link
        className="ms-5 btn-primary rounded text-decoration-none p-2"
        to="/addCart"
      >
        Add New Cart
      </Link>

      <div class="mx-5 mt-3">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Status</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {carts.length === 0 ? (
              <h1>Cart is Empty</h1>
            ) : (
              carts.map((cart) => {
                return (
                  <tr>
                    <th scope="row">{cart.id}</th>
                    <td>{cart.status}</td>
                    <td>
                      <Link
                        className="btn btn-sm me-2 btn-primary"
                        to={`/editCarts/${cart.id}`}
                      >
                        Edit
                      </Link>
                      <button
                        onClick={(e) => deleteItemHandler(e, cart.id)}
                        class="btn btn-sm btn-danger"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
