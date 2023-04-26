import React from "react";
import * as styles from "./Nav.module.css";
import { ListLinks } from "./ListLinks";
import Logo from "../Logo/Logo";
import SocialMediaLinks from "./SocialMediaLinks";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Drawer, Grid, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Box } from "@mui/system";
import Button from "@mui/material/Button";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import { Divider } from "@mui/material";
import { useLocation } from "react-router-dom";

export default function Nav() {
  const location = useLocation();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const [state, setState] = React.useState({ right: false });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{
        marginTop: "10px",
        width: 250,
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}>
      <List>
        <ListLinks
          spacing={1}
          type="list"
          direction="column"
        />
      </List>
      <Divider sx={{ margin: "20px" }} />
      <SocialMediaLinks />
    </Box>
  );

  const anchor = "right";

  const handleNav = (path) => {
    if (path === "/") {
      return "Home";
    } else if (path === "/society") {
      return "The Society";
    } else if (path === "/contact") {
      return "Contact";
    } else {
      return <></>;
    }
  };

  return (
    <div className={styles.navBar}>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center">
        <Grid item>
          <Logo />
        </Grid>

        {matches ? (
          <>
            <h3>{handleNav(location.pathname)}</h3>
            <IconButton onClick={toggleDrawer("right", true)}>
              <MenuOutlinedIcon />
            </IconButton>

            <Drawer
              PaperProps={{
                sx: {
                  background: "#0a0908e7",
                  backgroundColor: "#0a0908e7",
                  backdropFilter: "blur(5px)",
                },
              }}
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}>
              {list(anchor)}
            </Drawer>
          </>
        ) : (
          <>
            <Grid item>
              <ListLinks />
            </Grid>
            <Grid item>
              <SocialMediaLinks />
            </Grid>
          </>
        )}
      </Grid>
    </div>
  );
}
