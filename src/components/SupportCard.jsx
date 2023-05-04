import { ArrowForwardRounded } from "@mui/icons-material";
import { Card, CardContent, Typography, Button, CardActions, Box } from "@mui/material";
import React from "react";

export const SupportCard = ({ icon, heading, text, bg, url }) => {
  return (
    <Card
      variant="outlined"
      sx={{
        background: bg,
        mt: 2,
      }}
    >
      <Box>
        <CardContent>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            {icon}
            <Typography variant="h6" component="h2" fontWeight="bold" sx={{ pl: 1 }}>
              {heading}
            </Typography>
          </Box>
          <Typography component="p" variant="body1">
            {text}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            endIcon={<ArrowForwardRounded />}
            sx={{ color: "gray" }}
            onClick={() => window.open(url, "_blank")}
          >
            Learn More
          </Button>
        </CardActions>
      </Box>
    </Card>
  );
};
