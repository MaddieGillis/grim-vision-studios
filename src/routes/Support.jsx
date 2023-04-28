import HeroBanner from "../components/HeroBanner";
import {
    Grid,
    Container,
    Typography,
    Button,
    Stack,
    IconButton
} from "@mui/material"

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
            <HeroBanner
                heading='Support Us'
            // text='Example text for page heading...'
            // height='long'
            // image={'./home-page.jpg'}
            />

<Typography variant="h2" component="h1" fontWeight="bold">
Help Bring Our Vision to Life
              
            </Typography>

<Typography variant="body1" sx={{ mt: 1 }}>
            Welcome to Grim Vision Studios, an independent game development company that is committed to producing the next generation of high-quality games. 
            We invite you to check out our website, meet our team, learn about our projects, and join us on our exciting quest to create the next big thing in the gaming world.
            </Typography>
        </>
    
    );
}

export default Support;