import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import Error from "../Pages/ErrorPage/Error";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayouts />,
    errorElement: <Error />,
    children: [
      {
      path: '/',
      element:<Home />
    },
      {
      path: '/login',
      element:<Login />
    },
      {
      path: '/signUP',
      element:<Register />
    },
    ]
  }
])