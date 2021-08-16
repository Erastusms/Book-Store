import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

export default function AddImage() {
  const history = useHistory();
  const [image, setImage] = useState("");
  const params = useParams();
  const ProductId = +params.id;

  const saveFile = (e) => {
    setImage(e.target.files[0]);
    console.log(e.target.files[0]);
    console.log(e.target.files[0].name);
  };

  const uploadFile = async (e) => {
    const formData = new FormData();
    formData.append("image", image);
    formData.append("ProductId", ProductId);
    formData.append("primary", true);

    console.log(formData);
    try {
      const access_token = localStorage.getItem("access_token");
      const res = await axios({
        method: "POST",
        url: "http://localhost:3000/images/create",
        data: formData,
        headers: {
          access_token,
        },
      });
      history.push("/");
      Swal.fire("Congratulations", "Image has been created", "success");
    } catch (err) {
      Swal.fire("ERROR", `${err}`, "error");
    }
  };

  return (
    <div className="text-center">
      <input type="file" onChange={saveFile} />
      <br />
      <button onClick={uploadFile}>Upload</button>
    </div>
  );
}
