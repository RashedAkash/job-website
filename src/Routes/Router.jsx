import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import Error from "../Pages/ErrorPage/Error";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AddJob from "../Pages/AddJob/AddJob";
import MyPostedJob from "../Pages/MyPostedJob/MyPostedJob";
import MyBids from "../Pages/MyBids/MyBids";
import JobDetails from "../Pages/JobDetails/JobDetails";
import JobUpdate from "../Components/JobUpdate/JobUpdate";
import PrivateRoutes from "./PrivateRoutes";

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
      {
      path: '/addJob',
      element:<PrivateRoutes><AddJob /></PrivateRoutes>
    },
      {
      path: '/myJobs',
        element: <PrivateRoutes><MyPostedJob /></PrivateRoutes>,
      loader: ()=> fetch(`http://localhost:5000/jobs`)
    },
      {
      path: '/bids',
        element: <PrivateRoutes><MyBids /></PrivateRoutes>,
      loader:()=>fetch(`http://localhost:5000/users`)
    },
      {
      path: '/jobs/:id',
        element: <PrivateRoutes><JobDetails /></PrivateRoutes>,
      loader:({params})=> fetch(`http://localhost:5000/jobs/${params.id}`)
    },
      {
      path: '/jobUpdate/:id',
        element: <JobUpdate />,
      loader:({params})=> fetch(`http://localhost:5000/jobs/${params.id}`)
    },
    ]
  }
])