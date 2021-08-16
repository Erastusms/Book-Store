import React from "react";
import { Link } from "react-router-dom";
export default function CardDetail(props) {
  const {
    id,
    name,
    desc,
    price,
    stock,
    expire,
    weight,
    category,
    publisher,
    condition,
    total_sold,
    rating,
    Products_Images,
  } = props.item;

  return (
    <div className="container px-4 py-2" style={{ height: "100%" }}>
      <div className="card border m-5 p-2">
        <div className="row">
          <div
            className="col-auto py-3 ps-3 ms-3 my-3"
            style={{ width: "300px" }}
          >
            {/* {Products_Images.map((image) => {
              return ( */}
            {/* <img
                  src={`http://localhost:3000/assets/images/${image.filename}`}
                  className="card-img-top rounded"
                  alt={`http://localhost:3000/assets/images/${image.filename}`}
                /> */}
            <img
              src="http://via.placeholder.com/150"
              className="card-img-top rounded"
              alt="http://via.placeholder.com/150"
            />
            {/* );
            })} */}

            <Link to={`/checkout/${id}`} className="btn btn-primary d-block">
              Buy Now
            </Link>
          </div>

          <div className="col py-3 my-3 pe-3 me-3">
            <h1 className="fs-3">{name}</h1>
            <p className="p-0  m-0 text-muted">{publisher}</p>
            <div class="row justify-content-start mb-2">
              <div class="col-4 start">
                <small> Terjual {total_sold} barang</small>
                <div className="vr align-text-bottom mx-2" />
                <small className="align-text-bottom">
                  <span className="me-1">
                    <img
                      src="https://image.flaticon.com/icons/png/512/1828/1828884.png"
                      alt=""
                      width="10%"
                    />
                  </span>
                  {rating}
                </small>
              </div>
            </div>
            <h1 className="fw-bolder pb-2">Rp.{price},00</h1>
            <p className="border-bottom border-top border-2 ps-3 text-primary">
              Detail
            </p>
            <ul>
              <li>Kondisi: {condition}</li>
              <li>Berat: {weight} gram</li>
              <li>Category: {category}</li>
              <li>
                Stock: <span className="text-danger">{stock}</span>
              </li>
              <li>
                Expired Date: <span className="text-danger">{expire}</span>
              </li>
            </ul>
            <p className="border-bottom border-top border-2 ps-3 text-primary">
              Sinopsis
            </p>
            <p className="lh-base">{desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
