import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
function UploadImage() {
  const history = useHistory();
  const [avatar, setAvatar] = useState("");

  const saveFile = (e) => {
    setAvatar(e.target.files[0]);
    console.log(e.target.files[0]);
    console.log(e.target.files[0].name);
  };

  const uploadFile = async (e) => {
    const formData = new FormData();
    formData.append("avatar", avatar);
    console.log(formData);
    try {
      const access_token = localStorage.getItem("access_token");
      await axios({
        method: "PUT",
        url: "http://localhost:3000/users/uploads",
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
      <input type="file" onChange={saveFile} />
      <br />
      <button onClick={uploadFile}>Upload</button>
    </div>
  );
}

export default UploadImage;
