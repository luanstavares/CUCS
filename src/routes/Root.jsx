import React, { useState, useEffect } from "react";
import Nav from "../components/Nav/Nav";
import { Outlet, useLocation } from "react-router-dom";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { Background } from "../components/Background/Background";
export default function Root() {
  const [pageNum, setPageNum] = useState(1.2);

  const location = useLocation();

  useEffect(() => {
    console.log(pageNum);
    if (location.pathname === "/") {
      setPageNum(1.2);
    } else if (
      location.pathname === "/society" ||
      location.pathname === "/contact"
    ) {
      setPageNum(1);
    } else {
      setPageNum(1);
    }
  }, [location.pathname]);

  return (
    <div>
      <Nav />
      <Background />
      <Outlet />
    </div>
  );
}
