import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import Root from "./Root";

const App = () => {

  const router = createBrowserRouter([
    {
      path:'/',
      element: <Root/>,
      children:[
        {index: true,element: <HomePage/>}
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App;
