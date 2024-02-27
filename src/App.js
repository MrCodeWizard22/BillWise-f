import "./App.css";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./Components/Body";
import Login from "./Components/Login";
import { useEffect, useState } from "react";
import Loader from "./common/Loader";
import "./css/satoshi.css";
import "jsvectormap/dist/css/jsvectormap.css";
import "flatpickr/dist/flatpickr.min.css";

const isLogged = localStorage.getItem("acessToken");
const appRoutes = createBrowserRouter([
  {
    path: "/",
    element: isLogged ? <Body /> : <Login />,
  },
  {
    path: "/login",
    element: isLogged ? <Body /> : <Login />,
  },
]);
function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? <Loader /> : <RouterProvider router={appRoutes} />;
}

export default App;
