import React, { useState, useEffect } from "react";
// import { Link, useHistory, useParams } from "react-router-dom";
// import CardUser from "./CardUser";
// import userData from "json/userExample.json";
import axios from "axios";
export default function Profile() {
  const [profile, setProfile] = useState({});

  useEffect(() => {
    getProfile();
  }, []);

  const getProfile = async () => {
    try {
      const access_token = localStorage.getItem("access_token");
      const result = await axios({
        method: "GET",
        url: "http://localhost:3000/users/profile",
        headers: {
          access_token,
        },
      });
      console.log(result.data)
      setProfile(result.data);
    } catch (e) {
      console.log(e);
    }
  };

  // return (
  //   <div className="container-fluid">
  //     <div className="col">
  //       {/* <CardUser key={userData.user.id} user={userData.user}  /> */}
  //       <CardUser key={user.id} user={user} />
  //     </div>
  //   </div>
  // );
  return (
    <div>
        <h1>Account</h1>
        <p>{JSON.stringify(profile)}</p>
        <p>{profile.name}</p>
    </div>
)
}
