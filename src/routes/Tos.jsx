import React from "react";
import { Link } from 'react-router-dom';
import {
    Container,
    Typography
    
} from "@mui/material"



const Tos = () => {
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
            Terms of Service Agreement
          </Typography>
          <Typography variant="body1" sx={{ mt: 1 }}>


<Typography variant="body1" sx={{ mt: 1 }}>
This Terms of Service Agreement (the "Agreement") is entered into by and between Grim Vision Studios ("Company") and the user ("User" or "you") of the website www.grimvisionstudios.com and/or grimvisionstudios.netlify.app (the "Website").

</Typography>

<Typography variant="body1" sx={{ mt: 1 }}>

By accessing or using the Website, you agree to be bound by the terms and conditions of this Agreement. If you do not agree with any part of this Agreement, you must not use the Website.

</Typography>

<Typography variant="h6"
            component="h2"
            fontWeight="bold" 
            sx={{ mt: 1 }}>

Information Collection and Use
</Typography>
<Typography variant="body1" sx={{ mt: 1 }}>
We do not collect or store any personally identifiable information (PII) when you visit our website. We do not use cookies, web beacons, or any other tracking technologies to gather information about our visitors.

</Typography>

<Typography variant="h6"
            component="h2"
            fontWeight="bold"
             sx={{ mt: 1 }}>
1. Intellectual Property

</Typography>

<Typography variant="body1" sx={{ mt: 1 }}>
a. All content, including but not limited to text, graphics, logos, images, audio clips, and software, on the Website is the intellectual property of the Company or its licensors and is protected by copyright, trademark, and other intellectual property laws.
</Typography>

<Typography variant="body1" sx={{ mt: 1 }}>
b. You may not modify, copy, distribute, transmit, display, perform, reproduce, publish, license, create derivative works from, transfer, or sell any content obtained from the Website without prior written consent from the Company.

</Typography>

<Typography variant="h6"
            component="h2"
            fontWeight="bold"
             sx={{ mt: 1 }}>
2. User Conduct

</Typography>

<Typography variant="body1" sx={{ mt: 1 }}>
a. You agree to use the Website in accordance with applicable laws and regulations and to refrain from any conduct that may disrupt or interfere with the operation or security of the Website.
</Typography>

<Typography variant="body1" sx={{ mt: 1 }}>
b. You shall not engage in any unauthorized access, use, or distribution of any data, content, or materials on the Website.

</Typography>

<Typography variant="body1" sx={{ mt: 1 }}>
c. You shall not upload, post, or transmit any content that is unlawful, defamatory, obscene, harmful, or infringing upon the rights of others.

</Typography>

<Typography variant="h6"
            component="h2"
            fontWeight="bold"
             sx={{ mt: 1 }}>
3. Disclaimer of Warranty

</Typography>

<Typography variant="body1" sx={{ mt: 1 }}>
a. The Website and its content are provided on an "as is" and "as available" basis. The Company makes no warranties, expressed or implied, regarding the Website's accuracy, reliability, availability, or suitability for any purpose.

</Typography>

<Typography variant="body1" sx={{ mt: 1 }}>
b. The Company disclaims all liability for any damages or losses arising from the use of or reliance on the Website or its content.

</Typography>

<Typography variant="h6"
            component="h2"
            fontWeight="bold"
             sx={{ mt: 1 }}>
4. Limitation of Liability

</Typography>

<Typography variant="body1" sx={{ mt: 1 }}>
a. In no event shall the Company be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in connection with the use of or inability to use the Website or its content.

</Typography>

<Typography variant="body1" sx={{ mt: 1 }}>
b. The Company's total liability to you for any claims arising under this Agreement shall not exceed the amount paid, if any, by you to the Company for the use of the Website.

</Typography>

<Typography variant="h6"
            component="h2"
            fontWeight="bold"
             sx={{ mt: 1 }}>
5. Governing Law and Jurisdiction

</Typography>

<Typography variant="body1" sx={{ mt: 1 }}>
a. This Agreement shall be governed by and construed in accordance with the laws of The Unisted States of America. Any legal actions arising out of or relating to this Agreement shall be exclusively brought in the courts of the United States of America.
</Typography>

<Typography variant="h6"
            component="h2"
            fontWeight="bold"
             sx={{ mt: 1 }}>
6. Modifications to the Agreement

</Typography>

<Typography variant="body1" sx={{ mt: 1 }}>
a. The Company reserves the right to modify or update this Agreement at any time without prior notice. By continuing to use the Website after any modifications, you agree to be bound by the revised terms and conditions.

</Typography>

<Typography variant="body1" sx={{ mt: 1 }}>
By accessing or using the Website, you acknowledge that you have read, understood, and agree to be bound by this Agreement.

</Typography>

              
            </Typography>
        </Container>
      </Container>

        </>
    
    );
}

export default Tos;