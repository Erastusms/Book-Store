import React, { useState, useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import axios from "axios";

import Swal from "sweetalert2";

export default function CardUser(props) {
  const { id, name, email, gender } = props.user;
  // const history = useHistory();
  // const URL = "http://localhost:3000";
  // const deleteItemHandler = (id) => {
  //   try {
  //     Swal.fire({
  //       title: "Are you sure?",
  //       text: "You won't be able to revert this!",
  //       icon: "warning",
  //       showCancelButton: true,
  //       confirmButtonColor: "#3085d6",
  //       cancelButtonColor: "#d33",
  //       confirmButtonText: "Yes, delete it!",
  //     }).then((result) => {
  //       if (result.isConfirmed) {
  //         axios({
  //           method: "DELETE",
  //           url: `${URL}/users/delete/${id}`,
  //         });
  //         history.push("/users");
  //         Swal.fire("Deleted!", "Your file has been deleted.", "success");
  //       }
  //     });
  //   } catch (err) {
  //     Swal.fire("Get Error", `${err}`, "error");
  //   }
  // };

  // return (
  //   <div classNameName="col-md-2 col-sm-3 mb-3">
  //     <div classNameName="container-fluid">
  //       <div classNameName="text-center mt-5">
  //         <Link to={`/users/showItems/${id}`}>
  //           <img
  //             classNameName="rounded-circle image-hover"
  //             title={username}
  //             src={image}
  //             width="100px"
  //             height="100px"
  //             alt={username}
  //           />
  //         </Link>
  //         <h5 classNameName="mt-2">{username}</h5>
  //       </div>
  //       <button
  //         onClick={() => deleteItemHandler(id)}
  //         classNameName="btn btn-sm btn-danger"
  //       >
  //         Delete
  //       </button>
  //     </div>
  //   </div>
  // );

  const params = useParams();
  console.log(params.id);
  const [item, setItem] = useState({});
  id = +params.id;
  const URL = "http://localhost:3000";
  useEffect(() => {
    getUserById();
  }, []);

  const getUserById = async () => {
    try {
      let result = await axios({
        method: "GET",
        url: `${URL}/users/${id}`,
      });
      setItem(result.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container">
      <h1>HAI PROFILE</h1>
      {/* <div className="row mt-5">
        <div className="col mt-5">
          <div className="card" style={{ "max-width": "1080px" }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={user.image}
                  className="img-fluid rounded-start"
                  alt="..."
                  width="600px"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <div className="row justify-content-between mb-2">
                    <div className="col-8">
                      <h5 className="card-title text-uppercase">
                        {user.username}
                      </h5>
                    </div>
                    <div className="col-auto">
                      <button className="btn btn-primary">Edit profile</button>
                    </div>
                  </div>
                  <p className="card-text">Date of birth : {user.birthdate}</p>
                  <p className="card-text">Age : {user.age}</p>
                  <p className="card-text">Gender : {user.gender}</p>
                  <p className="card-text card-footer">
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
