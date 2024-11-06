// import React from 'react'
// import { aHeader as AHeader } from "./aHeader";

// export function Layout({ props }) {
//     return (
//         <>
//             <header>
//                 <AHeader></AHeader>
//             </header>
//             {props.children}
//             <footer></footer>
//         </>
//     )
// }

/* eslint-disable react/prop-types */
// import {aHeader as AHeader} from "./aHeader"

// export function Layout(props) {

//   return (
//     <div className="container">
//       <header>
//         <AHeader></AHeader>
//       </header>
//       {props.children}
//       <footer></footer>
//     </div>
//   );
// }

import {aHeader as Header} from "./aHeader"
import { Outlet } from "react-router-dom";

export function Layout() {
  return (
    <div className="container">
      <header>
        <Header></Header>
      </header>
      <main style={{marginTop: "10px", padding: "10px"}}>
        <div className="row">
          <div className="col">
            <Outlet />
          </div>
        </div>
      </main>
      <footer></footer>
    </div>
  );
}
