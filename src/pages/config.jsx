import { createBrowserRouter } from "react-router-dom";
import React from "react";
import Dashboard from "./dashboard";
import AllNews from "./allnews";
import ChooseOption from "./chooseoption";
import Roles from "./roles";
import Profile from "./profile";
import Login from "./auth/login";
import Auth from "./auth";
import Register from "./auth/register";
import Verify from "./verifyAccount/verify";
import VerifyLayout from "./verifyAccount";
import Thanks from "./verifyAccount/thanks";
import Err from "./verifyAccount/err";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/news/all",
    element: <AllNews />,
  },
  {
    path: "/choose/option",
    element: <ChooseOption />,
  },
  {
    path: "/roles",
    element: <Roles />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/auth",
    element: <Auth />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/verify",
    element: <VerifyLayout />,
    children: [
      {
        path: "",
        element: <Verify />,
      },
      {
        path: "thanks",
        element: <Thanks />,
      },
      {
        path: "error",
        element: <Err />,
      },
    ],
  },
]);
