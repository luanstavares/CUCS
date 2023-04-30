import React, { useState, useEffect } from "react";
import Nav from "../components/Nav/Nav";
import { Outlet, useLocation } from "react-router-dom";

import { Background } from "../components/Background/Background";
export default function Root() {
  const [pageNum, setPageNum] = useState(1.2);

  const location = useLocation();

  return (
    <div>
      <Nav />
      <Background />
      <Outlet />
    </div>
  );
}
