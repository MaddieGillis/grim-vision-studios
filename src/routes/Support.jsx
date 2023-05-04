import React from "react";
import { Link } from 'react-router-dom';
import HeroBanner from "../components/HeroBanner";
import {
  ArrowRightAltRounded,
  BugReportRounded,
  Computer,
  PeopleAltRounded,
  WaterfallChartRounded,
  CurrencyRuble,
  EmojiEmotions
} from "@mui/icons-material";
import {
    Grid,
    Container,
    Typography,
    Button,
    Stack,
    IconButton,
    
} from "@mui/material"

//import { IconCard } from "../components/IconCard";
import { SupportCard } from "../components/SupportCard";

const Support = () => {
    const gradientText = {
        root: {
          background: "-webkit-linear-gradient(45deg, #d32f2f 30%, #9f1a1a 90%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        },
      };
    
      const textStyles = {
        link: {
          color: "#fff",
          textDecoration: "none",
        },
        redLink: {
          color: "#d32f2f",
          textDecoration: "none",
        },
        footerHeading: {
          color: "#fff",
          fontWeight: "bold",
          marginBottom: 10,
        },
        footerText: {
          color: "#f7f7f7",
        },
      };
    return (
        <>
            {/* <HeroBanner
                heading='Help Bring Our Vision to Life'
            // text='Example text for page heading...'
            // height='long'
            // image={'./home-page.jpg'}
            /> */}

<Container maxWidth="xxl" sx={{ bgcolor: "#f7f7f7", py: 10 }}>
        <Container maxWidth="xl">
          <Typography
            variant="h3"
            component="h2"
            fontWeight="bold"
            sx={{ mb: 3 }}
          >
            Help bring our <span style={gradientText.root}>vision</span> to life
          </Typography>
          <Typography variant="body1" sx={{ mt: 1 }}>
          We are a small independent studio made up of students and recent graduates hoping to make an amazing horror experience. If you would like to support us please head on over to our Patreon.

If you would like to make a one time donation, please head over to our Paypal.

Any support whether monetary or just following the game is appreciated!!
<Typography variant="body1" sx={{ mt: 1 }}>--Grim Vision Studio Team ❤️</Typography>
              
            </Typography>
          <Grid container spacing={2}>
          <Grid item xs={12} md={3} sx={{ height: "-webkit-fill-available" }}>
             <SupportCard
                icon={<CurrencyRuble color="error" />}
                text="For regular updates, cool BTS images, and much more head on over to our Patreon"
                heading="Patreon"
                url="https://www.patreon.com/grimvisionstudios"
            >
          {/* <Link href="https://www.patreon.com/grimvisionstudios" target="_blank" rel="noopener noreferrer">
             Patreon
          </Link> */}
          </SupportCard>
          </Grid>
            <Grid item xs={12} md={3}>
              <SupportCard
                icon={<EmojiEmotions color="error" />}
                text="For a one time donation please head over to our paypal"
                heading="Paypal"
                url="https://www.paypal.com/donate/?hosted_button_id=M93F9E36PMMDC"
              />
            </Grid>
          </Grid>
        </Container>
      </Container>

        </>
    
    );
}

export default Support;