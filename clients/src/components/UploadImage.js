import React, { useState } from "react";
import axios from "axios";

function UploadImage() {
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
      const res = await axios({
        method: "PUT",
        url: "http://localhost:3000/users/uploads",
        data: formData,
        headers: {
          access_token,
        },
      });
      console.log(res);
    } catch (err) {
      console.log(err);
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
