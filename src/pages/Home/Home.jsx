import React from "react";
import * as styles from "./Home.module.css";
import { Button, Typography, useTheme, Box } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";
import { Background } from "../../components/Background/Background";
import { ParallaxLayer } from "@react-spring/parallax";

export default function Home() {
  const theme = useTheme();

  return (
    <>
      <div className={styles.main}>
        <Box
          textAlign="center"
          className={styles.content}>
          <Typography
            textAlign={"center"}
            color="textPrimary"
            fontWeight={700}
            variant="h1">
            Welcome to <br />
            <span style={{ color: theme.palette.primary.main }}>
              Coding Society!
            </span>
          </Typography>

          <Button
            sx={{ marginTop: "5rem" }}
            endIcon={<ArrowForward />}
            variant="contained"
            target="_blank"
            href="https://www.yoursu.org/activities/societies/join/8196/">
            Join Us
          </Button>

          <div className={styles.card}>
            <div className="cardContent">
              <Typography
                textAlign={"center"}
                fontWeight={700}
                variant="h5">
                Our Goal
              </Typography>
              <Typography
                fontWeight={500}
                paddingTop={"5rem"}
                textAlign={"justify"}
                variant="subtitle1">
                “Lorem ipsum dolor sit amet consectetur. Dictum diam sagittis
                nulla placerat urna. Suspendisse non imperdiet malesuada mauris
                risus massa tincidunt quis sodales. Cursus ac pretium augue
                lacus integer. Mattis mauris sit egestas nibh habitant
                condimentum in. Duis id ipsum consequat.”
              </Typography>
              <Typography
                paddingTop={"5rem"}
                textAlign={"right"}
                fontWeight={500}
                variant="h6">
                CS President.
              </Typography>
            </div>
          </div>
        </Box>
      </div>
    </>
  );
}
