import React, { useState, useEffect } from "react";
import CardUser from "./CardUser";
import axios from "axios";
export default function Profile({ login }) {
  const URL = "http://localhost:3000";
  const [user, setUser] = useState({});
  useEffect(() => {
    console.log("use effect jalan");
    getProfile();
  }, []);

  const getProfile = async () => {
    try {
      const access_token = localStorage.getItem("access_token");
      let result = await axios({
        method: "GET",
        url: `${URL}/users/profile`,
        headers: {
          access_token,
        },
      });
      console.log(result.data);
      setUser(result.data);
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
    <div className="container-md-2">
      <CardUser key={user.id} user={user} />
    </div>
  );
}
