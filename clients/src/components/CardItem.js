import React from "react";

export default function CardItem(props) {
  const { product } = props;
  return (
    <div className="row row-cols-1 row-cols-md-6 g-4 mt-4">
      {product.map((produk) => {
        if (props.isNew)
          return (
            <div className="col">
              <div className="card h-100">
                <img
                  src={produk.image}
                  className="card-img-top h-50"
                  alt={produk.image}
                />
                <div class="card-img-overlay p-0 text-start">
                  <p className="bg-primary badge">{produk.condition}</p>
                </div>
                <div className="card-body">
                  <h5 className="card-title fw-bolder">{produk.name}</h5>
                  {/* <p className="card-text col-sm-12 text-truncate">
                    {produk.desc}
                  </p> */}
                  <small className="rounded bg-danger px-2">
                    {produk.category}
                  </small>
                  <br />
                  <img
                    src="https://image.flaticon.com/icons/png/512/1828/1828884.png"
                    width="15%"
                    className="me-2"
                    alt=""
                    title="Rating"
                  />
                  <small className="pt-2">{produk.rating}</small>
                  <br />
                  <img
                    src="https://image.flaticon.com/icons/png/512/4232/4232149.png"
                    width="15%"
                    alt=""
                  />
                  <small className="ps-2">{produk.views} Views</small>
                </div>
                <div className="card-body m-1 p-0 text-center">
                  <small className="text-white">Buy Now</small>
                  <div className="vr mx-2"></div>
                  <small>
                    <img
                      className="img-fluid"
                      data-bs-toggle="tooltip"
                      data-bs-placement="right"
                      title="Tooltip on right"
                      src="https://image.flaticon.com/icons/png/512/3144/3144456.png"
                      alt=""
                      width="15%"
                    />
                  </small>
                </div>
                <div className="card-footer">
                  <big className="text-warning">Rp {produk.price}</big>
                </div>
              </div>
            </div>
          );

        return (
          <div className="col">
            <div className="card h-100">
              <img
                src={produk.image}
                className="card-img-top h-50"
                alt={produk.image}
              />
              <div class="card-img-overlay p-0 text-start">
                <p className="bg-primary badge">{produk.condition}</p>
              </div>
              <div className="card-body">
                <h5 className="card-title fw-bolder">{produk.name}</h5>
                <p className="card-text col-sm-12 text-truncate">
                  {produk.desc}
                </p>
                <small className="rounded bg-danger px-2">
                  {produk.category}
                </small>
              </div>
              <div className="card-footer">
                <big className="text-danger">Rp {produk.price}</big>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
