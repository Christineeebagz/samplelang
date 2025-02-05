import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Validation from "./LoginValidation";

const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  const handleInput = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(Validation(values));
    if (errors.email === "" && errors.password === "") {
      axios
        .post("http://localhost:8081/login", values)
        .then((res) => {
          if (res.data === "Success") {
            navigate("/home");
          } else {
            console.log(res.data);
            alert("No record exists");
          }
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
      <div className="bg-white p-3 rounded w-25">
        <h2>Log-in</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              onChange={handleInput}
              name="email"
              className="form-control rounded-2"
            />
            {errors.email && (
              <span className="text-danger">{errors.email}</span>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="password">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              onChange={handleInput}
              name="password"
              className="form-control rounded-2"
            />
            {errors.password && (
              <span className="text-danger">{errors.password}</span>
            )}
          </div>
          <button type="submit" className="btn btn-success w-100 rounded-0">
            <strong>Log in</strong>
          </button>
          <p>You are agree to our terms and policies</p>
          <Link
            to="/signup"
            className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none"
          >
            Create Account
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;

// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import "./LoginValidation";
// import axios from "axios";
// import Validation from "./LoginValidation";

// const Login = () => {
//   const [values, setValues] = useState({
//     email: "",
//     password: "",
//   });

//   const navigate = useNavigate();
//   const [errors, setErrors] = useState({});

//   const handleInput = (event) => {
//     setValues((prev) => ({
//       ...prev,
//       [event.target.name]: [event.target.value],
//     }));
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     setErrors(Validation(values));
//     if (errors.email === "" && errors.password === "") {
//       axios
//         .post("http://localhost:8081/login", values)
//         .then((res) => {
//           console.log("yawa");
//           navigate("/home");
//         })
//         .catch((err) => console.log(err));
//     }
//   };

//   // const handleSubmit = (event) => {
//   //   event.preventDefault();
//   //   setErrors(Validation(values));
//   //   console.log("niagi here");
//   //   if (errors.email === "" && errors.password === "") {
//   //     axios
//   //       .post("http://localhost:8081/login", values)
//   //       .then((res) => {
//   //         if (res.data === "Success") {
//   //           navigate("/home");
//   //         } else {
//   //           alert("No Record Exists");
//   //         }
//   //       })
//   //       .catch((err) => console.log(err));
//   //   }
//   // };

//   return (
//     <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
//       <div className="bg-white p-3 rounded w-25">
//         <h2>Log-in</h2>
//         <form action="" onSubmit={handleSubmit}>
//           <div className="mb-3">
//             <label htmlFor="email">
//               <strong>Email</strong>
//             </label>
//             <input
//               type="email"
//               placeholder="Enter Email"
//               onChange={handleInput}
//               name="email"
//               className="form-control rounded-2"
//             />
//             {errors.email && (
//               <span className="text-danger">{errors.email}</span>
//             )}
//           </div>
//           <div className="mb-3">
//             <label htmlFor="password">
//               <strong>Password</strong>
//             </label>
//             <input
//               type="password"
//               placeholder="Enter Password"
//               onChange={handleInput}
//               name="password"
//               className="form-control rounded-2"
//             />
//             {errors.password && (
//               <span className="text-danger">{errors.password}</span>
//             )}
//           </div>
//           <button type="submit" className="btn btn-success w-100 rounded-0">
//             <strong>Log in</strong>
//           </button>
//           <p>You are agree to our terms and policies</p>
//           <Link
//             to="/signup"
//             className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none"
//           >
//             Create Account
//           </Link>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;
