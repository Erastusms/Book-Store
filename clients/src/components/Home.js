import React, { useState, useEffect } from "react";
import axios from "axios";
import CardItem from "./CardItem";
import Swal from "sweetalert2";
export default function Home({ login }) {
  const URL = "http://localhost:3000";
  const [items, setItems] = useState([]);

  useEffect(() => {
    console.log("use effect jalan");
    getItems();
  }, []);

  const getItems = async () => {
    try {
      const access_token = localStorage.getItem("access_token");
      let itemsData = await axios({
        method: "GET",
        url: `${URL}/products`,
        headers: {
          access_token,
        },
      });
      console.log(itemsData.data);
      setItems(itemsData.data);
    } catch (err) {
      Swal.fire("Get Error", `${err}`, "error");
    }
  };

  const loadingBar = () => {
    return (
      <div class="d-flex justify-content-center">
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  };

  return (
    <div className="container-md py-5">
      <div className="border p-3 rounded">
        <h1 className="text-center">
          <span className="border-bottom border-3">Available Now</span>
        </h1>
        <div className="row row-cols-md-4">
          {items.length === 0
            ? loadingBar()
            : items.map((item) => {
                return <CardItem key={item.id} item={item} />;
              })}
        </div>
      </div>
    </div>
  );
}
