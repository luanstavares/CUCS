import React from "react";
import Nav from "../components/Nav/Nav";
import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <div>
      <Nav />
      <Outlet />
    </div>
  );
}
