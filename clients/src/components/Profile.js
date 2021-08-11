import React from "react";
import CardUser from "./CardUser";
import userData from "json/userExample.json";
export default function Profile() {
  return (
    <div className="container-fluid">
      <div className="col">
        {/* <CardUser key={userData.user.id} user={userData.user}  /> */}
        <CardUser users={userData.user}/>
      </div>
    </div>
  );
}
