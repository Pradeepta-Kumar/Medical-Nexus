import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Register from "./Register";
import Home from "./Home";
import Login from "./Login";
import UserDetails from "./UserDetails";
import AboutUs from "./AboutUs";
import Details from "./Details";

export default function Body() {
  const appRouter = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/signup", element: <Register /> },
    { path: "/login", element: <Login /> },
    { path: "/userdetails", element: <UserDetails /> },
    { path: "/aboutus", element: <AboutUs /> },
    { path: "/details", element: <Details /> },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
}
