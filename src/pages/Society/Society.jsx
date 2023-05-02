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
      position: "President 😎",
      name: "Vanshul Kumar",
      description:
        "The President plays a critical role in ensuring the success of the society, providing leadership, guidance, and support to members and helping to advance the society's mission.",
      image: "vanshul.png",
    },
    {
      position: "Inclusion Officer 🤝",
      name: "John",
      description:
        "The Inclusion Officer works to ensure that the society is a friendly and inclusive environment for all members by developing policies, offering education, and promoting diversity within the society environment.",
      image: "john.png",
    },
    {
      position: "Social Media Coordinator 📱",
      name: "Penny Mwaura",
      description:
        "The Social Media Coordinator plays an important role in promoting the society and its activities. They are responsible for creating and sharing content that is informative, engaging, and visually appealing.",
      image: "penny.png",
    },
    {
      position: "Tresurer 💰",
      name: "Bandhan Bhaliya",
      description:
        "The Treasurer is a member of the executive board of the society. They are responsible for the financial management of the society, including budgeting, fundraising, and accounting.",
      image: "bandhan.png",
    },
  ];

  const cardItems = [
    {
      title: "LeetCode 📝",
      description:
        "LeetCode is a platform that provides a collection of coding problems and challenges that can be used to improve programming skills and prepare for technical interviews.",
      image: "leetcode.png",
    },
    {
      title: "Tech Talk 🎙️",
      description:
        "Tech Talks is an event that provides an opportunity for students to come together and learn about new and emerging technologies, tools, and programming languages.",
      image: "faang.jpeg",
    },
    {
      title: "Coding Support 🤝",
      description:
        "No, we don't have all the answers, but we are code lovers eager to promote these sessions as a wonderful method to obtain assistance with your coding issues.",
      image: "codingSupport.webp",
    },
    {
      title: "Chess Matches ♟️",
      description:
        "Chess sessions are events that provides an opportunity for students and faculty members to come together and play chess in a friendly and competitive setting making it a popular pastime.",
      image: "chess.jpeg",
    },
    {
      title: "Discord 💻",
      description:
        "Discord is a powerful tool for virtual collaboration and can be used to facilitate discussions, share resources, and build a sense of community among members of the coding society.",
      image: "discord.png",
    },
    {
      title: "Socials 🍻",
      description:
        "Social sessions held by the society are events that provide an opportunity for members of the society to come together and engage in social activities outside of coding and programming.",
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
