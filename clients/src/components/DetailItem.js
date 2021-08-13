import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
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
      let result = await axios({
        method: "GET",
        url: `${URL}/products/${id}`,
      });
      setItem(result.data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <h1>{item.name}</h1>
    </div>
  );
}
