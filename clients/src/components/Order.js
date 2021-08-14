import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Link, useHistory } from "react-router-dom";
import CardOrder from "./CardOrder";
export default function Order() {
  const URL = "http://localhost:3000";
  const [cart, setCart] = useState({});
  useEffect(() => {
    console.log("use effect jalan");
    getCart();
  }, []);

  const getCart = async () => {
    try {
      const access_token = localStorage.getItem("access_token");
      let result = await axios({
        method: "GET",
        url: `${URL}/carts/myCarts`,
        headers: {
          access_token,
        },
      });
      console.log(result.data);
      setCart(result.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="container-fluid">
      <CardOrder />
    </div>
  );
}
