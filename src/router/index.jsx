import React from "react";
import CommonLayout from "../Layout/CommonLayout";
import ShortLive from "../Components/ShortLive";
import Channel from "../Components/Channel";
import ShortVideo from "../Components/ShortVideo";

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
      element: <ShortLive />,
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
