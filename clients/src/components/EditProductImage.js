import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

export default function EditProductImage() {
  const history = useHistory();
  const [imageOld, setImageOld] = useState("");
  const [image, setImage] = useState("");
  const params = useParams();
  const ProductId = +params.id;
  const URL = "http://localhost:3000";

  useEffect(() => {
    getImage();
  }, []);

  const getImage = async () => {
    try {
      const access_token = localStorage.getItem("access_token");
      let result = await axios({
        method: "GET",
        url: `${URL}/images/${ProductId}`,
        headers: {
          access_token,
        },
      });
      console.log(result.data[0]);
      setImageOld(result.data[0]);
    } catch (e) {
      console.log(e);
    }
  };

  const saveFile = (e) => {
    setImage(e.target.files[0]);
  };

  const uploadFile = async (e) => {
    const formData = new FormData();
    formData.append("image", image);
    formData.append("ProductId", ProductId);
    formData.append("primary", true);

    console.log(formData);
    try {
      const access_token = localStorage.getItem("access_token");
      await axios({
        method: "PUT",
        url: `${URL}/images/update/${ProductId}`,
        data: formData,
        headers: {
          access_token,
        },
      });
      history.push("/");
      Swal.fire("Congratulations", "Image has been updated", "success");
    } catch (err) {
      Swal.fire("ERROR", `${err}`, "error");
    }
  };

  return (
    <div className="text-center">
      <h4>Foto Product saat ini</h4>
      <br />
      <img src={`${URL}/assets/images/${imageOld.filename}`} alt="" />
      <br />
      <input type="file" onChange={saveFile} className="py-5" />
      <br />
      <button className="btn btn-success mb-5" onClick={uploadFile}>
        Upload
      </button>
    </div>
  );
}
