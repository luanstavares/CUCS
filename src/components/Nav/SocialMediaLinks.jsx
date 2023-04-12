import { Avatar, Stack } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default function SocialMediaLinks() {
  return (
    <Stack
      sx={{ display: `flex`, alignItems: `center` }}
      direction="row"
      spacing={2.5}>
      <Link
        target="_blank"
        to="https://www.instagram.com/cucodingsociety/">
        <Avatar
          variant="square"
          sx={{
            width: `20px`,
            height: `20px`,
          }}
          src="instagram.svg"
          alt=""
        />
      </Link>
      <Link
        target="_blank"
        to="https://discord.gg/QKarfQah">
        <Avatar
          variant="square"
          sx={{
            width: `30px`,
            height: `30px`,
          }}
          src="discord.svg"
          alt=""
        />
      </Link>
      <Link
        target="_blank"
        to="https://github.com/v1nshul/CUCS">
        <Avatar
          variant="square"
          sx={{
            width: `20px`,
            height: `20px`,
          }}
          src="github.svg"
          alt=""
        />
      </Link>
    </Stack>
  );
}
