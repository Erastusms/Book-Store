import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Link, useHistory } from "react-router-dom";
export default function ProductsForAdmin({ login, userLogin }) {
  const URL = "http://localhost:3000";
  let history = useHistory();
  let number = 1;
  const [items, setItems] = useState([]);

  useEffect(() => {
    console.log("use effect jalan");
    getItems();
  }, []);

  const getItems = async () => {
    try {
      const access_token = localStorage.getItem("access_token");
      let itemsData = await axios({
        method: "GET",
        url: `${URL}/products`,
        headers: {
          access_token,
        },
      });
      console.log(itemsData.data);
      setItems(itemsData.data);
    } catch (err) {
      Swal.fire("Get Error", `${err}`, "error");
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
        Swal.fire("Deleted!", "Product has been deleted.", "success");

        await axios({
          method: "DELETE",
          url: `${URL}/products/delete/${id}`,
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

  const loadingBar = () => {
    return (
      <div class="d-flex justify-content-center">
        <div class="spinner-border text-center" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  };

  return (
    <div className="container-fluid">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">No.</th>
            <th scope="col">Name</th>
            <th scope="col">Category</th>
            <th scope="col">Publisher</th>
            <th scope="col">Stock</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {items.length === 0
            ? loadingBar
            : items.map((item) => {
                return (
                  <tr>
                    <td>{number++}</td>
                    <td>{item.name}</td>
                    <td>{item.category}</td>
                    <td>{item.publisher}</td>
                    <td>{item.stock}</td>
                    {/* <td>{item.Products_Images[0].filesize}</td> */}
                    <td>
                      <Link
                        className="btn btn-sm me-2 btn-primary"
                        to={`/addImage/${item.id}`}
                      >
                        Add image
                      </Link>
                      <Link
                        className="btn btn-sm me-2 btn-warning"
                        to={`/editProductsImage/${item.id}`}
                      >
                        Edit Image
                      </Link>
                      <Link
                        className="btn btn-sm me-2 btn-warning"
                        to={`/editProducts/${item.id}`}
                      >
                        Edit
                      </Link>
                      <button
                        onClick={(e) => deleteItemHandler(e, item.id)}
                        class="btn btn-sm btn-danger"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
        </tbody>
      </table>
    </div>
  );
}
