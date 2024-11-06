// import React from 'react'
// import { Header } from './Header'

// export function App() {
//     // return ("Hello World");
//     // return(<h1>Welcome to React applicaion</h1>)
//     return <Header title="Welcome" link="link1"></Header>
// }


// import { Layout } from "./components/layout/Layout";

// export function App() {
//     return (
//         <>
//         <Layout></Layout>
//         </>
//     );
// }

// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import { Layout } from "./layout";
// import Routes from './routes';

// export function App() {

//     const router = createBrowserRouter(Routes);
//     return (
//         <>
//             {/* <header>
//                 <AHeader></AHeader>
//             </header> */}
//             <Layout>
//                 {/* <main><ProductList l1 = "l1"></ProductList></main> */}
//                 <main>
//                     <RouterProvider router={router}></RouterProvider>
//                 </main>
//             </Layout>
//             {/* <footer></footer> */}
//         </>
//     );
// }


// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import { routes } from "./routes";
// import { Layout } from "./layout";

// export function App() {
//     const router = createBrowserRouter(routes);

//     return (
//         <>
//             <Layout prop1="value1">
//                 <main>
//                     <RouterProvider router={router}></RouterProvider>
//                 </main>
//             </Layout>
//         </>
//     );
// }

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "./routes";

export function App() {
  const router = createBrowserRouter(routes);

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}
