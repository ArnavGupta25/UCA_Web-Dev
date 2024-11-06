// import React from 'react'

// export function Header(props) {
//     console.log("hi", props.title);
//     return <div>{props.title}</div>;
// }

// export function aHeader() {
//     let appTitle = "Online Product Store";
//     return <h2 style={{ textAlign: "center" }}>{appTitle}</h2>;
// }


// export function aHeader() {
//     return (
//       <>
//         <nav className="navbar navbar-expand-lg bg-body-tertiary">
//           <div className="container-fluid">
//             <a className="navbar-brand" href="/">
//               EComm
//             </a>
//             <button
//               className="navbar-toggler"
//               type="button"
//               data-bs-toggle="collapse"
//               data-bs-target="#navbarSupportedContent"
//               aria-controls="navbarSupportedContent"
//               aria-expanded="false"
//               aria-label="Toggle navigation"
//             >
//               <span className="navbar-toggler-icon"></span>
//             </button>
//             <div className="collapse navbar-collapse" id="navbarSupportedContent">
//               <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                 <li className="nav-item">
//                   <a className="nav-link" href="/signin">
//                     Signin
//                   </a>
//                 </li>
//               </ul>
//               <form className="d-flex" role="search">
//                 <input
//                   className="form-control me-2"
//                   type="search"
//                   placeholder="Search"
//                   aria-label="Search"
//                 />
//                 <button className="btn btn-outline-success" type="submit">
//                   Search
//                 </button>
//               </form>
//               {/* <button className="btn btn-outline-success mx-3" onClick={navigateToSignup}>Signup</button> */}
//             </div>
//           </div>
//         </nav>
//       </>
//     );
//   }

import { Link } from "react-router-dom";
import { Button } from "./components/elements/button";

export function aHeader() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <Link to={"/"} className="navbar-brand">
          EComm
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to={"/signin"} className="nav-link">
                Home
              </Link>
            </li>
          </ul>

          <Button type="primary">
            <Link to={"addproduct"} className="nav-link">
              Add Products
            </Link>
          </Button>

          <Button type="primary">
            <Link to={"signin"} className="nav-link">
              Signin
            </Link>
          </Button>

          <Button type="secondary">
            <Link to={"signup"} className="nav-link">
              Register
            </Link>
          </Button>

          {/* <button className="btn btn-outline-success mx-3" onClick={navigateToSignup}>Signup</button> */}
        </div>
      </nav>
    </>
  );
}
