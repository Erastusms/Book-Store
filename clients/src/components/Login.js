import React, {useState} from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import Swal from 'sweetalert2'
export default function Login() {
//   const [state, setState] = useState({
//     email: "",
//     password: ""
// })

// const submitHandler = e => {

//     // e.preventDefault()
//     // loginAxios()
//     // login(true)
//     userLogin(true)
// }

// const loginAxios = async () => {
//     try {
//         const result = await axios({
//             method: 'POST',
//             url: "http://localhost:3000/users/login",
//             data: state
//         })
//         // const access_token = result.data["access_token"]
//         console.log(result.data)
//         userLogin(true)
//         // getToken(access_token)
//     } catch (err) {
//         Swal.fire("ERROR", `${err}`, "error")
//     }
// }

  return (
    <div className="container-fluid">
      <div class="row justify-content-center mt-5 pt-5">
        <div class="col-5">
          <div className="mt-5">
            <h1>Book Store</h1>
            <p className="lh-base">
              Book Store membantu Anda mengetahui setiap buku yang terjual
              dengan harga terjangkau sesuai minat Anda
            </p>
          </div>
        </div>
        <div class="col-4">
          <div className="shadow border border-2 p-3 rounded">
            <div className="mb-2 text-center">
              <h3>Login Sekarang</h3>
              <small>
                Belum punya akun? <Link to="/register">Register</Link>
              </small>
            </div>
            <div className="mb-3">
              {/* <label>Email</label> */}
              <input
                type="email"
                required
                className="form-control"
                placeholder="Email"
              />
              {/* <small>Input email format</small> */}
            </div>
            <div className="mb-3">
              {/* <label>Password</label> */}
              <input
                type="password"
                required
                className="form-control"
                placeholder="Password"
              />
            </div>
            <div className="mb-3">
              <button className="btn btn-block btn-primary rounded">
                <Link to="/homepage">Login</Link>
                {/* Login */}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
