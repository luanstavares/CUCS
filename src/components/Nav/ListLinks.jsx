import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

// Import Material UI Components
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

// Import Material UI Icons
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Groups2Icon from "@mui/icons-material/Groups2";
import ContactPageIcon from "@mui/icons-material/ContactPage";

export function ListLinks() {
  const location = useLocation();

  return (
    <Stack
      direction="row"
      spacing={4}>
      <Link
        style={{ textDecoration: "none" }}
        to="/">
        <Button
          variant={location.pathname === "/" ? "outlined" : "text"}
          endIcon={<ArrowForwardIcon />}>
          Home
        </Button>
      </Link>
      <Link
        style={{ textDecoration: "none" }}
        to="/society">
        <Button
          variant={location.pathname === "/society" ? "outlined" : "text"}
          endIcon={<Groups2Icon />}>
          The society
        </Button>
      </Link>
      <Link
        style={{ textDecoration: "none" }}
        to="/contact">
        <Button
          variant={location.pathname === "/contact" ? "outlined" : "text"}
          endIcon={<ContactPageIcon />}>
          Contact
        </Button>
      </Link>
    </Stack>
  );
}
