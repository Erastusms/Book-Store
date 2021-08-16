import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

export default function AddProduct() {
  const history = useHistory();
  const URL = "http://localhost:3000";
  const [state, setState] = useState({
    name: "",
    desc: "",
    price: 0,
    stock: 0,
    expire: "",
    weight: 0,
    category: "",
    publisher: "",
    condition: "",
  });

  const submitHandler = (e) => {
    e.preventDefault();
    addData();
    // addImage();
  };

  const addData = async () => {
    try {
      const access_token = localStorage.getItem("access_token");
      const result = await axios({
        method: "POST",
        url: `${URL}/products/create`,
        data: state,
        headers: {
          access_token,
        },
      });
      console.log(result.data);
      history.push("/");
      Swal.fire("Congratulations", "Product has been created", "success");
    } catch (err) {
      Swal.fire("ERROR", `${err}`, "error");
      console.log(err);
    }
  };

  // const [image, setImage] = useState("");

  // const addImage = async () => {
  //   try {
  //     const access_token = localStorage.getItem("access_token");
  //     const result = await axios({
  //       method: "POST",
  //       url: `${URL}/images/create`,
  //       data: { primary, ProductId:  },
  //       headers: {
  //         access_token,
  //       },
  //     });
  //     console.log(result.data);
  //     history.push("/");
  //     Swal.fire("Congratulations", "Product has been created", "success");
  //   } catch (err) {
  //     Swal.fire("ERROR", `${err}`, "error");
  //     console.log(err);
  //   }
  // };

  return (
    <div className="container-fluid">
      <div className="row mb-2">
        <div className="col-sm-12">
          <div className="border border-2 p-3 rounded">
            <div className="mb-3">
              <small>Name</small>
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                name="name"
                onChange={(e) => setState({ ...state, name: e.target.value })}
              />
            </div>
            <div className="mb-3">
              <small>Description</small>
              <textarea
                type="text"
                className="form-control"
                style={{ height: "200px" }}
                placeholder="Description about your book"
                name="desc"
                onChange={(e) => setState({ ...state, desc: e.target.value })}
              />
            </div>
            <div className="mb-3">
              <small>Price</small>
              <input
                type="number"
                className="form-control"
                placeholder="Price"
                name="price"
                onChange={(e) => setState({ ...state, price: e.target.value })}
              />
            </div>
            <div className="mb-3">
              <small>Stock</small>
              <input
                type="number"
                className="form-control"
                placeholder="Stock"
                name="stock"
                onChange={(e) => setState({ ...state, stock: e.target.value })}
              />
            </div>
            <div className="mb-3">
              <small>Expire</small>
              <input
                type="date"
                className="form-control"
                name="expire"
                onChange={(e) => setState({ ...state, expire: e.target.value })}
              />
            </div>
            <div className="mb-3">
              <small>Weight</small>
              <input
                type="number"
                className="form-control"
                placeholder="Weight"
                name="weight"
                onChange={(e) => setState({ ...state, weight: e.target.value })}
              />
            </div>
            <div className="mb-3">
              <small>Category</small>
              <input
                type="text"
                className="form-control"
                placeholder="Category"
                name="category"
                onChange={(e) =>
                  setState({ ...state, category: e.target.value })
                }
              />
            </div>
            <div className="mb-3">
              <small>Publisher</small>
              <input
                type="text"
                className="form-control"
                name="publisher"
                placeholder="Publisher"
                onChange={(e) =>
                  setState({ ...state, publisher: e.target.value })
                }
              />
            </div>
            <div className="mb-3">
              <small>Condition</small>
              <select
                className="form-select"
                required
                aria-label="select example"
                onChange={(e) =>
                  setState({ ...state, condition: e.target.value })
                }
              >
                <option disabled selected value>
                  Choose...
                </option>
                <option value="New">New</option>
                <option value="Bekas">Bekas</option>
              </select>
            </div>
            <div className="mb-3 text-center">
              <button
                className="btn btn-success"
                onClick={(e) => submitHandler(e)}
              >
                Create
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
