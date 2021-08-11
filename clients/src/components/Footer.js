import React from "react";

export default function Footer() {
  return (
    <div>
      <footer className="footer mt-auto py-3 bg-light">
        <div className="container">
          <div className="container text-center">
            <div className="row">
              <div className="col-2">BookStore</div>
              <div className="col-8">
                <div className="p-1 text-center bg-blue">
                  <p>Copyright 2021 &copy; by Erastus & Septian</p>
                </div>
              </div>
              <div className="col-2">Logo akun github</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
