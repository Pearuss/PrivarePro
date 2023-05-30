import React from "react";
import CommonLayout from "../Layout/CommonLayout";
import ShortVideo from "../Components/ShortVideo";
import Channel from "../Components/Channel";

const normalRoutes = {
  path: "*",
  element: <CommonLayout />,
  children: [
    {
      index: true,
      element: <ShortVideo />,
    },
    {
      path: "danh-cho-ban",
      element: <ShortVideo />,
    },
    {
      path: "dang-theo-doi",
      element: <ShortVideo />,
    },
    {
      path: "live",
      element: <ShortVideo />,
    },
    {
      path: "yeu-thich",
      element: <ShortVideo />,
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
