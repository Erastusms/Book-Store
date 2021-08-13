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
      let itemsData = await axios({
        method: "GET",
        url: `${URL}/products`,
      });
      setItems(itemsData.data);
    } catch (err) {
      Swal.fire("Get Error", `${err}`, "error");
    }
  };

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
    <div className="container-md py-5">
      <div className="border p-3 bg-purple rounded">
        <h1 className="text-center">
          <span className="border-bottom border-3">
            New Comers
          </span>
        </h1>
        <div className="row row-cols-md-4">
        {items.length === 0
          ? loadingBar()
          : items.map((item) => {
              return <CardItem key={item.id} item={item} />;
            })}
            </div>
      </div>

      {/* <div className="border p-3 mt-3">
        <h1 className="text-center">
          <span className="border-bottom border-3 text-warning">
            Coming Expired!!!
          </span>
        </h1>
        <CardItem product={itemsData.product} />
      </div> */}
    </div>
  );
}
