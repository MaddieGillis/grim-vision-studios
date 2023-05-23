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
//import { SupportCard } from "../components/SupportCard";

const Privacy = () => {
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
            Privacy Policy
          </Typography>
          <Typography variant="body1" sx={{ mt: 1 }}>


<Typography variant="body1" sx={{ mt: 1 }}>
This Privacy Policy outlines how we handle and protect your personal information when you visit our website. We are committed to maintaining the privacy and security of your data.

</Typography>

<Typography variant="body1" sx={{ mt: 1 }}>

Information Collection and Use
</Typography>
<Typography variant="body1" sx={{ mt: 1 }}>
We do not collect or store any personally identifiable information (PII) when you visit our website. We do not use cookies, web beacons, or any other tracking technologies to gather information about our visitors.

</Typography>

<Typography variant="body1" sx={{ mt: 1 }}>
Third-Party Links

</Typography>

<Typography variant="body1" sx={{ mt: 1 }}>
Our website may contain links to third-party websites for your convenience or reference. We have no control over the content or privacy practices of those sites and, therefore, are not responsible for the protection and privacy of any information you provide while visiting those websites. We recommend reviewing the privacy policies of any third-party websites you visit.

</Typography>

<Typography variant="body1" sx={{ mt: 1 }}>
Data Security

</Typography>

<Typography variant="body1" sx={{ mt: 1 }}>
As we do not collect or store any personal data, we have implemented appropriate security measures to prevent unauthorized access, disclosure, alteration, or destruction of any information.

</Typography>

<Typography variant="body1" sx={{ mt: 1 }}>
Children's Privacy

</Typography>

<Typography variant="body1" sx={{ mt: 1 }}>
Our website is not directed towards children under the age of 13, and we do not knowingly collect any personal information from children. If you believe that we may have inadvertently collected information from a child under the age of 13, please contact us, and we will promptly remove the information from our records.

</Typography>

<Typography variant="body1" sx={{ mt: 1 }}>
Changes to this Privacy Policy

</Typography>

<Typography variant="body1" sx={{ mt: 1 }}>
We reserve the right to modify or update this Privacy Policy from time to time. Any changes will be effective immediately upon posting the updated policy on this page. We encourage you to review this page periodically to stay informed about our privacy practices.

</Typography>

<Typography variant="body1" sx={{ mt: 1 }}>
Contact Us

</Typography>

<Typography variant="body1" sx={{ mt: 1 }}>
If you have any questions or concerns about this Privacy Policy or our privacy practices, please contact us at grimvisionstudios@gmail.com.

</Typography>
              
            </Typography>
        </Container>
      </Container>

        </>
    
    );
}

export default Privacy;