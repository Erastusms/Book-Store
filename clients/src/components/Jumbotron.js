import React from "react";

export default function Jumbotron() {
  return (
    <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner" style={{"height": "350px"}}>
    <div className="carousel-item active">
      <img src="https://www.periplus.com/image/other/Banner_Main/Main%20New/Periplus_preorder.jpg" width="100%" alt="Gambar - 1"/>
      <div className="carousel-caption">
        {/* <h3>Slide 1</h3>
        <p>Deskripsi Slide 1</p> */}
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://www.periplus.com/image/other/Banner_Main/Main%20New/lp_dropship.jpg" width="100%" alt="Gambar - 2"/>
      <div className="carousel-caption">
        {/* <h3>Slide 2</h3>
        <p>Deskripsi Slide 2</p> */}
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://www.periplus.com/image/other/Banner_Main/Main%20New/lp_pec_kecil.jpg" width="100%" alt="Gambar - 3"/>
      <div className="carousel-caption">
        {/* <h3>Slide 3</h3>
        <p>Deskripsi Slide 3</p> */}
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  );
}
