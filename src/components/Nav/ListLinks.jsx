import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import ListItem from "@mui/material/ListItem";
import Groups2Icon from "@mui/icons-material/Groups2";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { ListItemIcon } from "@mui/material";
export function ListLinks({ spacing = 4, direction = "row", type = "button" }) {
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
      direction={direction}
      spacing={spacing}>
      {links.map((link, index) => (
        <Link
          style={{ textDecoration: "none" }}
          to={link.to}
          key={index}>
          {type === "list" ? (
            <>
              <ListItem
                sx={{ color: "white" }}
                key={link.text}
                disablePadding>
                <ListItemButton>
                  <ListItemIcon>{link.icon}</ListItemIcon>
                  <ListItemText
                    sx={{ textTransform: "uppercase" }}
                    primary={link.text}
                  />
                </ListItemButton>
              </ListItem>
            </>
          ) : (
            <Button
              variant={location.pathname === link.path ? "outlined" : "text"}
              endIcon={link.icon}>
              {link.text}
            </Button>
          )}
        </Link>
      ))}
    </Stack>
  );
}
