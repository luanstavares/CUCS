import React from "react";
import * as styles from "./Home.module.css";
import { Button, Typography, useTheme } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";
export default function Home() {
  const theme = useTheme();
  console.log(theme);
  return (
    <>
      <Typography
        color="textPrimary"
        fontWeight={700}
        variant="h1">
        Welcome to{" "}
        <span style={{ color: theme.palette.primary.main }}>
          Coding Society!
        </span>
      </Typography>
      <Button
        endIcon={<ArrowForward />}
        variant="contained">
        Join Us
      </Button>

      <div className={styles.card}>
        <Typography
          fontWeight={700}
          variant="h5">
          Our Goal
        </Typography>
        <Typography variant="subtitle1">
          “Lorem ipsum dolor sit amet consectetur. Dictum diam sagittis nulla
          placerat urna. Suspendisse non imperdiet malesuada mauris risus massa
          tincidunt quis sodales. Cursus ac pretium augue lacus integer. Mattis
          mauris sit egestas nibh habitant condimentum in. Duis id ipsum
          consequat.”
        </Typography>
        <Typography
          fontWeight={500}
          variant="h6">
          CS President.
        </Typography>
      </div>
    </>
  );
}
