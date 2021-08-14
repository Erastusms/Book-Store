import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Link, useHistory } from "react-router-dom";
export default function AddProduct({ login, userLogin }) {
  const URL = "http://localhost:3000";
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
      <h1>Halaman tambah produk oleh admin</h1>
    </div>
  );
}
