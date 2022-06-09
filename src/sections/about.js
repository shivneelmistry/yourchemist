import React from 'react'
import styled from 'styled-components'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';


const AboutSection = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    min-height: 100vh;
    padding: 0;
`
const StyledPaper = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    padding: 0,
    maxWidth: 400,
}));
const message = `Truncation should be conditionally applicable on this long line of text
 as this is a much longer line than what the container can support. `;

const Item = styled(Paper)(() => ({
    backgroundColor: 'grey',
    padding: 100,
    textAlign: 'center',
    color: "yellowgreen"
}));

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

const About = () => {
    return (
        <AboutSection id="about">

            <h1>Yourchemist </h1>
            <Box
                display="flex"
                position="center"
                marginTop={15}
                width={"100%"} height={450}
                bgcolor="lightblue"
                sx={{ justifyContent: 'center' }}
            >
                <Grid container >
                    <Grid item xs={6}>
                        <Card square={true} sx={{ minWidth: 275, minHeight: "50%", height: "100%", boxShadow: 0, backgroundColor:"#fff" }}>
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    About
                                </Typography>
                                <Typography variant="body2">
                                    <br />
                                    Your Friendly Family Chemist, was founded by Atul Mistry in 1995 which is located in Ndola, Zambia. A passionate pharmacist and business owner for more than 30 years.
                                    <br />
                                    <br />
                                    Our company has two wings
                                    Your Chemist is our front line retail store that allows access to the various and affordable medications. Here you are able to meet our friendly pharmacist and sales representative to meet your medical needs.
                                    Sonjay, which is, our wholesale and distributor of medications, drugs and medical devices. Sonjay is a distributor of many pharmaceutical companies such as Sandoz (A Novartis division), Ajanta and Denk (Germancy).
                                    We deliver to clients that are wide spread such as hospitals, mines and other pharmacies throughout Zambia.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>


                    <Grid item xs={6}>
                        <Card square={true} sx={{ minWidth: 275, minHeight: "50%", height: "100%", boxShadow: 0 }}>
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    ADD PHOTO HERE
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Box>




            {/* 2nd ROW */}

            <Box
                display="flex"
                position="center"
                width={"100%"} height={300}
                bgcolor="lightgreen"
            >
                <Grid container >

                <Grid item xs={6}>
                        <Card square={true} sx={{ minWidth: 275, minHeight: "50%", height: "100%", boxShadow: 0 }}>
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    Mission and Goals
                                </Typography>
                                <Typography variant="body2">
                                    <br />
                                    The pharmacy's mission is providing the community in Zambia with the best and affordable medications. Furthermore, we are involved in importing of non-registered life-saving medications to allow better accessibility of medications to the community in Zambia.
                                    Our first priority is to put our patients and customers first with providing best, affordable and have easier access to medications that are needed.
                                    We provide services such as patient consultation keeping the patient's safety.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    {/* NEXT CARD */}
                    <Grid item xs={6}>
                        <Card square={true} sx={{ minWidth: 275, minHeight: "50%", height: "100%", boxShadow: 0 }}>
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    ADD PHOTO HERE
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Box>

        </AboutSection>
    )
};

export default About;