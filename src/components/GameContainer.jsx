import React from "react";
import { Button, Grid, Skeleton, Typography, CardActions } from "@mui/material";
import { ArrowRightAltRounded } from "@mui/icons-material";
import { Link } from "react-router-dom";
import VideoCard from "./VideoCard";


const GameContainer = ({ title, desc, url}) => {
  return (
    <Grid container gap={10}>
      <Grid item xl={4} sx={{ display: { xs: "none", lg: "block" } }} md={5}>
        {/* <Skeleton width={"100%"} height={500} /> */}
        <VideoCard width={"100%"} height={500}/>
      </Grid>
      <Grid
        item
        xl={7}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          justifyContent: "center",
        }}
      >
        <Typography variant="h4" fontWeight={900}>
          {title}
        </Typography>
        <Typography variant="body1" sx={{ my: 2 }}>
          {desc}
        </Typography>
        <CardActions>
          <Button
             variant="contained"
             color="error"
             endIcon={<ArrowRightAltRounded />}
            onClick={() => window.open(url, "_blank")}
          >
            Discord
          </Button>
        </CardActions>

        {/* <Button
          variant="contained"
          color="error"
          endIcon={<ArrowRightAltRounded />}
        >
          <Link
            to={discordLink}
            style={{ color: "#fff", textDecoration: "none" }}
          >
            Discord
          </Link>
        </Button> */}
      </Grid>
    </Grid>
  );
};

export default GameContainer;
