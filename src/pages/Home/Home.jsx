import React from "react";
import * as styles from "./Home.module.css";
import {
  Button,
  Typography,
  useTheme,
  Box,
  Container,
  Grid,
} from "@mui/material";
import { ArrowForward } from "@mui/icons-material";
import { Card } from "../../components/Card/Card";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function Home() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      <Container
        maxWidth="md"
        sx={{ marginBottom: "100px" }}
        fixed>
        <Grid
          sx={{ marginTop: { xs: "50px", sm: "100px" } }}
          textAlign="center"
          justifyContent="space-between"
          alignItems="center">
          <Typography
            textAlign={"center"}
            color="textPrimary"
            fontWeight={700}
            variant={matches ? "h3" : "h1"}>
            Welcome to <br />
            <span style={{ color: theme.palette.primary.main }}>
              Coding Society!
            </span>
          </Typography>

          <Button
            sx={{
              marginTop: { xs: "3rem", sm: "5rem" },
              marginBottom: "5rem",
            }}
            endIcon={<ArrowForward />}
            variant="contained"
            target="_blank"
            size={matches ? "small" : "large"}
            href="https://www.yoursu.org/activities/societies/join/8196/">
            Join Us
          </Button>

          <Card>
            <Typography
              paddingTop={"1em"}
              textAlign={"center"}
              fontWeight={700}
              variant={matches ? "body1" : "h5"}>
              Our Goal 🎯
            </Typography>
            <Typography
              fontStyle={"italic"}
              fontWeight={300}
              paddingTop={"5em"}
              textAlign={"justify"}
              variant={matches ? "body2" : "subtitle1"}>
              "As programmers, we have the power to shape the world around us.
              Let's use our skills not just for personal gain, but to create
              positive change and make a{" "}
              <span
                style={{
                  color: theme.palette.primary.main,
                }}>
                meaningful impact on society
              </span>
              ."
            </Typography>
            <Typography
              paddingTop={"5em"}
              textAlign={"right"}
              fontWeight={400}
              variant={matches ? "subtitle2" : "h6"}>
              CS President.
            </Typography>
          </Card>
        </Grid>
      </Container>
    </>
  );
}
