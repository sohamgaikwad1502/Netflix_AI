import React from "react";
import Header from "./Header";
import { Outlet } from "react-router";

const Body = () => {
  return (
    <div>
      <Header></Header>
      <Outlet />
    </div>
  );
};

export default Body;
