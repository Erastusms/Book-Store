import React from "react";
import { Link } from "react-router-dom";
export default function CardCheckout(props) {
  const { name, condition, price } = props.item;

  return (
    <div className="container px-4 py-5" style={{ height: "100%" }}>
      <h1>
        <span className="border-bottom ms-5">Checkout</span>
      </h1>
      <div
        className="card border rounded-2 m-5 p-2"
        style={{ "max-height": "540px" }}
      >
        <div className="row">
          <div className="col-auto py-3 ps-3 ms-3 my-3">
            <img
              src="https://via.placeholder.com/150"
              className="card-img-top rounded"
              alt="https://via.placeholder.com/150"
            />
          </div>
          <div className="col py-3 my-3 pe-3 me-3">
            <div class="row justify-content-between">
              <h2 class="col-4 fw-bolder">{name}</h2>
              <div class="col-4 text-end">
                <Link
                  className="card-link text-dark text-decoration-none"
                  to="/checkout"
                >
                  Buy Now
                </Link>
                <div className="vr align-text-bottom mx-2" />
                <Link className="card-link text-decoration-none" to="/delete">
                  <img
                    src="https://image.flaticon.com/icons/png/512/1214/1214428.png"
                    alt=""
                    width="10%"
                  />
                </Link>
              </div>
            </div>
            <h6 className="bg-warning rounded p-2 d-inline">{condition}</h6>
            <p className="footer pt-4">Rp.{price}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
