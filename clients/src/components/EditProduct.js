import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

export default function EditProduct() {
  const params = useParams();
  const id = +params.id;
  const URL = "http://localhost:3000";

  const history = useHistory();
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");

  useEffect(() => {
    console.log("use effect jalan");
    getProduct();
  }, []);

  const getProduct = async () => {
    try {
      const access_token = localStorage.getItem("access_token");
      let result = await axios({
        method: "GET",
        url: `${URL}/products/${id}`,
        headers: {
          access_token,
        },
      });
      const { name, category, price, stock } = result.data;
      setName(name);
      setCategory(category);
      setPrice(price);
      setStock(stock);
    } catch (e) {
      console.log(e);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    let objTemp = {
      name,
      category,
      price,
      stock,
    };
    updateData(objTemp, e);
  };

  const updateData = async (user, e) => {
    try {
      const access_token = localStorage.getItem("access_token");
      const { name, category, price, stock } = user;
      await axios({
        method: "PUT",
        url: `${URL}/products/update/${id}`,
        data: {
          name,
          category,
          price,
          stock,
        },
        headers: {
          access_token,
        },
      });
      Swal.fire("Congratulations", "Items has been updated", "success");
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
              <small>Nama Product</small>
              <input
                type="text"
                className="form-control"
                placeholder="Username"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <small>Category</small>
              <input
                type="text"
                className="form-control"
                placeholder="Category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <small>Price</small>
              <input
                type="number"
                className="form-control"
                placeholder="Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <small>stock</small>
              <input
                type="text"
                className="form-control"
                value={stock}
                onChange={(e) => setStock(e.target.value)}
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
