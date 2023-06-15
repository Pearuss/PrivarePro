import React from "react";
import MobileLayout from "../Layout/MobileLayout";
import Home from "../Components/Home";
import Profile from "../Components/Profile";
import Love from "../Components/Love";

const normalRoutes = [
  {
    path: "/",
    element: <MobileLayout showMenuBar={true} />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  {
    path: "/profile",
    element: <MobileLayout />,
    children: [
      {
        index: true,
        element: <Profile />,
      },
    ],
  },
  {
    path: "/love",
    element: <MobileLayout />,
    children: [
      {
        index: true,
        element: <Love />,
      },
    ],
  },
];

const routes = normalRoutes;

export default routes;
