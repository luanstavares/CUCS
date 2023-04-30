import React from "react";
import Avatar from "@mui/material/Avatar";

export default function Logo({ size = 90 }) {
  return (
    <Avatar
      alt="Logo"
      src="CUCS-logo.png"
      sx={{ width: `${size}px`, height: `${size}px` }}
    />
  );
}
