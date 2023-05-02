import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Container,
  Grid,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useTheme } from "@emotion/react";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function Contact() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  const cardItems = [
    {
      title: "discord",
      description:
        "Our Discord server include various text and voice channels for members to engage in discussions, share resources, and collaborate on coding projects.",
      component: "img",
      href: "https://discord.gg/QKarfQah",
      height: 250,
      image: "discordQR.png",
      alt: "Discord QR Code",
    },
    {
      title: "Instagram",
      description:
        "In our Instagram profile users can interact with the society by viewing images and videos of previous events and getting updates on future meetings",
      component: "img",
      href: "https://www.instagram.com/cucodingsociety/",
      height: 250,
      image: "instagramQR.JPG",
      alt: "Instagram QR Code",
    },
  ];

  return (
    <>
      <Container
        sx={{ marginBottom: "100px" }}
        fixed>
        <Typography
          textAlign={"center"}
          fontWeight={700}
          margin={"100px 0"}
          variant={matches ? "h1" : "h2"}>
          Contact
        </Typography>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={7}>
          {cardItems.map((cardItem, index) => (
            <Grid
              item
              key={index}>
              <Card sx={{ maxWidth: 250 }}>
                <CardActionArea>
                  <Link
                    style={{ textDecoration: "none" }}
                    target="_blank"
                    to={cardItem.href}>
                    <CardMedia
                      height={cardItem.height}
                      component={cardItem.component}
                      image={cardItem.image}
                      alt={cardItem.title}
                    />
                    <CardContent>
                      <Typography
                        sx={{ textTransform: "capitalize" }}
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
                  </Link>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}
