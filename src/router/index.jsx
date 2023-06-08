import React from "react";
import Channel from "../Components/Channel";
import MobileLayout from "../Layout/MobileLayout";
import Home from "../Components/Home";

const normalRoutes = {
  path: "*",
  element: <MobileLayout />,
  children: [
    {
      index: true,
      element: <Home />,
    },
    {
      path: "profile",
      element: <Channel />,
      //   children: [
      //     {
      //       path: "",
      //       element: <ProfilePage />,
      //     },
      //   ],
    },
    // {
    //   path: "unauthorized",
    //   element: <UnauthorizePage />,
    // },
  ],
};

const routes = [normalRoutes];

export default routes;
