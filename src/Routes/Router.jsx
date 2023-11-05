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
      element:<AddJob />
    },
      {
      path: '/myJobs',
        element: <MyPostedJob />,
      loader: ()=> fetch(`http://localhost:5000/jobs`)
    },
      {
      path: '/bids',
      element:<MyBids />
    },
      {
      path: '/jobs/:id',
        element: <JobDetails />,
      loader:({params})=> fetch(`http://localhost:5000/jobs/${params.id}`)
    },
    ]
  }
])