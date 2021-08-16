import React from "react";
import { Link } from "react-router-dom";
export default function CardItem(props) {
  const {
    id,
    name,
    price,
    condition,
    category,
    rating,
    views,
    Products_Images,
  } = props.item;

  return (
    <div className="card-group mt-3">
      <div className="card">
        <div class="card bg-dark text-white">
          {Products_Images.map((image) => {
            return (
              <Link className="text-decoration-none" to={`/products/${id}`}>
                <img
                  src={`http://localhost:3000/assets/images/${image.filename}`}
                  className="card-img-top rounded"
                  alt={`http://localhost:3000/assets/images/${image.filename}`}
                />
                <div class="card-img-overlay p-0 text-start">
                  <p
                    className={`${
                      condition === "New"
                        ? "bg-primary badge"
                        : "bg-danger badge"
                    }`}
                  >
                    {condition}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
        <div className="card-body">
          <h5 className="card-title fw-bolde text-dark">{name}</h5>
          <small className="rounded bg-danger text-dark px-2">{category}</small>
          <br />
          <img
            src="https://image.flaticon.com/icons/png/512/1828/1828884.png"
            width="10%"
            className="m-2"
            alt=""
            title="Rating"
          />
          <small className="ms-2">{rating}</small>
          <br />
          <img
            src="https://image.flaticon.com/icons/png/512/4232/4232149.png"
            width="10%"
            className="m-2"
            alt=""
          />
          <small className="ps-2">{views} Views</small>
        </div>
        <div className="card-footer m-1 p-0 text-center">
          <Link
            className="card-link text-black text-decoration-none"
            to={`/checkout/${id}`}
          >
            Buy Now
          </Link>
          <div className="vr align-text-bottom mx-2"></div>
          <Link to="/cart">
            <img
              className="img-fluid"
              title="Add to Cart"
              src="https://image.flaticon.com/icons/png/512/3144/3144456.png"
              alt=""
              width="10%"
            />
          </Link>
        </div>
        <div className="card-footer bg-warning text-center rounded">
          <h4 className="text-white fw-bolder">Rp {price},00</h4>
        </div>
      </div>
    </div>
  );
}
