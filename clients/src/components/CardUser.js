import React from "react";
import { Link } from "react-router-dom";
import dateFormat from "dateformat";
export default function CardDetail(props) {
  const { name, email, state, birthdate, gender, avatar } = props.user;

  return (
    <div className="container px-4 py-2" style={{ height: "100%" }}>
      <div className="card border m-5 p-2">
        <div className="row">
          <div
            className="col-auto py-3 ps-3 ms-3 my-3"
            style={{ width: "300px" }}
          >
            <img
              src={avatar}
              className="card-img-top rounded"
              alt={avatar}
            />
            <Link to="/uploads" className="btn btn-primary d-block rounded mt-3">
              Upload Image
            </Link>
          </div>
          <div className="col py-3 my-3 pe-3 me-3">
            <h4>Biodata Diri</h4>
            <div className="table-responsive-sm">
              <table className="table">
                <td className="text-muted">
                  <tr>Name</tr>
                  <tr>Birthdate</tr>
                  <tr>Gender</tr>
                </td>
                <td className="text-warning">
                  <tr>{name}</tr>
                  <tr>{dateFormat(birthdate, "mmmm dS, yyyy")}</tr>
                  <tr>{gender}</tr>
                </td>
              </table>
            </div>
            <h4>Contact</h4>
            <div className="table-responsive-sm">
              <table className="table">
                <td className="text-muted pe-4">
                  <tr>Email</tr>
                  <tr>State</tr>
                </td>
                <td className="text-warning">
                  <tr>{email}</tr>
                  <tr>{state}</tr>
                </td>
              </table>
            </div>
            <Link
              to="/editData"
              className="btn btn-outline-secondary btn-sm d-inline rounded me-3"
            >
              Edit Data
            </Link>
            <Link
              to="/editPwd"
              className="btn btn-outline-secondary btn-sm d-inline rounded"
            >
              Edit Password
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
