import React from "react";

export default function CardCart() {
  return (
    <div className="container px-4 py-5">
      {/* <div className="row"> */}
        {/* <div className="col-2 border">kolom 4</div> */}
        <div className="col-8 p-0 mt-4">
          <h2 className="pb-2 border-bottom">Cart</h2>
          <div class="card mb-3" style={{ "max-width": "840px" }}>
            <div class="row g-0">
              <div class="col-md-4">
                <img
                  src="https://via.placeholder.com/150"
                  class="img-fluid rounded-start w-50"
                  alt="..."
                />
              </div>
              <div class="col-md-8 p-0 m-0">
                <div class="card-body">
                  <h2 class="card-title">Nama Produk</h2>
                  
                </div>
                <div className="card-footer">
                  <small class="text-muted">Created on (tanggal buat)</small>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="col-2 border">kolom 4</div> */}
      {/* </div> */}
    </div>
  );
}
