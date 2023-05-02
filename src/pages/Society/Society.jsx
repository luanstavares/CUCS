import React from "react";
import { Container, Typography } from "@mui/material";
import { Card, CardActionArea, CardContent, CardMedia } from "@mui/material";
import Grid from "@mui/material/Grid";
import * as styles from "./Society.module.css";
import { useTheme } from "@emotion/react";
import useMediaQuery from "@mui/material/useMediaQuery";
export default function Society() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  const committeeItems = [
    {
      position: "President",
      name: "Vanshul Kumar",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      image: "vanshul.png",
    },
    {
      position: "Inclusion Officer",
      name: "John",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      image: "john.png",
    },
    {
      position: "Social Media Coordinator",
      name: "Penny Mwaura",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      image: "penny.png",
    },
    {
      position: "Tresurer",
      name: "Bandhan Bhaliya",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      image: "bandhan.png",
    },
  ];

  const cardItems = [
    {
      title: "LeetCode",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      image: "leetcode.png",
    },
    {
      title: "Tech Talk",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      image: "faang.jpeg",
    },
    {
      title: "Coding Support",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      image: "codingSupport.webp",
    },
    {
      title: "Chess Matches",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      image: "chess.jpeg",
    },
    {
      title: "Discord",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      image: "discord.png",
    },
    {
      title: "Socials",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      image: "social.jpeg",
    },
  ];

  return (
    <>
      <Container fixed>
        <Typography
          textAlign={"center"}
          fontWeight={700}
          margin={"100px 0"}
          variant={matches ? "h1" : "h3"}>
          Activities
        </Typography>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={4}>
          {cardItems.map((cardItem, index) => (
            <Grid
              item
              key={index}>
              <Card sx={{ maxWidth: 250 }}>
                <CardMedia
                  height="150"
                  component="img"
                  image={cardItem.image}
                  alt={cardItem.title}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant={matches ? "h5" : "h6"}
                    fontWeight={700}
                    component="div">
                    {cardItem.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary">
                    {cardItem.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Typography
          textAlign={"center"}
          fontWeight={700}
          margin={"150px 0"}
          variant={matches ? "h1" : "h3"}>
          Committee
        </Typography>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          marginBottom={"100px"}
          spacing={4}>
          {committeeItems.map((committeeItem, index) => (
            <Grid
              item
              key={index}>
              <Card
                sx={{
                  maxWidth: 325,
                }}>
                <CardMedia
                  height="300"
                  component="img"
                  image={committeeItem.image}
                  alt={committeeItem.position}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant={matches ? "h5" : "h6"}
                    fontWeight={700}
                    component="div">
                    {committeeItem.name}
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="h7"
                    fontWeight={700}
                    component="div">
                    {committeeItem.position}
                  </Typography>

                  <Typography
                    marginTop={"20px"}
                    variant="body2"
                    color="text.secondary">
                    {committeeItem.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}
