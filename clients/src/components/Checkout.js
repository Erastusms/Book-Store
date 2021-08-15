import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CardCheckout from "./CardCheckout";
import axios from "axios";

export default function DetailItem() {
  const params = useParams();
  const id = +params.id;
  const [item, setItem] = useState({});
  const URL = "http://localhost:3000";
  useEffect(() => {
    getItemById();
  }, []);

  const getItemById = async () => {
    try {
      const access_token = localStorage.getItem("access_token");
      let result = await axios({
        method: "GET",
        url: `${URL}/products/${id}`,
        headers: {
          access_token,
        },
      });
      setItem(result.data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <div className="container-md-2">
        <CardCheckout key={item.id} item={item} />;
      </div>
    </div>
  );
}
