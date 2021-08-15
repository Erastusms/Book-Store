import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Link, useHistory } from "react-router-dom";

export default function UserForAdmin({ login, userLogin }) {
  const URL = "http://localhost:3000";
  const history = useHistory();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    console.log("use effect jalan");
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      const access_token = localStorage.getItem("access_token");
      let usersData = await axios({
        method: "GET",
        url: `${URL}/users`,
        headers: {
          access_token,
        },
      });
      console.log(usersData.data);
      setUsers(usersData.data);
    } catch (err) {
      Swal.fire("Get Error", `${err}`, "error");
    }
  };

  const deleteItemHandler = (e, id) => {
    deleteAxios(id);
  };

  const deleteAxios = async (id) => {
    try {
      const access_token = localStorage.getItem("access_token");
      let result = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      });
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "User has been deleted.", "success");

        await axios({
          method: "DELETE",
          url: `${URL}/users/delete/${id}`,
          headers: {
            access_token,
          },
        });
        history.goBack();
      }
    } catch (err) {
      console.log(err);
      Swal.fire("ERROR", `${err}`, "error");
    }
  };

  const loadingBar = () => {
    return (
      <div class="d-flex justify-content-center">
        <div class="spinner-border text-center" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  };

  return (
    <div className="container-fluid">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Gender</th>
            <th scope="col">Birthdate</th>
            <th scope="col">Type</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.length === 0
            ? loadingBar
            : users.map((user) => {
                return (
                  <tr>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.gender}</td>
                    <td>{user.birthdate}</td>
                    <td>{user.type}</td>
                    <td>
                      <button
                        onClick={(e) => deleteItemHandler(e, user.id)}
                        class="btn btn-sm btn-danger"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
        </tbody>
      </table>
    </div>
  );
}
