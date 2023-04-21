import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import Groups2Icon from "@mui/icons-material/Groups2";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";

export function ListLinks() {
  const location = useLocation();

  const links = [
    {
      to: "/",
      text: "Home",
      icon: <HomeRoundedIcon />,
      path: "/",
    },
    {
      to: "/society",
      text: "The society",
      icon: <Groups2Icon />,
      path: "/society",
    },
    {
      to: "/contact",
      text: "Contact",
      icon: <ContactPageIcon />,
      path: "/contact",
    },
  ];

  return (
    <Stack
      direction="row"
      spacing={4}>
      {links.map((link, index) => (
        <Link
          style={{ textDecoration: "none" }}
          to={link.to}
          key={index}>
          <Button
            variant={location.pathname === link.path ? "outlined" : "text"}
            endIcon={link.icon}>
            {link.text}
          </Button>
        </Link>
      ))}
    </Stack>
  );
}
