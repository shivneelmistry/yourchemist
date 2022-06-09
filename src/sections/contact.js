import React, { useRef } from 'react'
import styled from 'styled-components'
import emailjs from '@emailjs/browser';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from "@mui/material/CardContent"
import TextField from '@mui/material/TextField';

import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography';
import Stack from "@mui/material/Stack"

const ContactSection = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    min-height: 100vh;
    padding: 0;
`

const Contact = () => {
    const form = useRef();
    return (
        <ContactSection id="contact">
            <h1>
                Contact
            </h1>
            <Box
                display="flex"
                position="center"
                width={"100%"} height={450}
                bgcolor="lightblue"
                sx={{ justifyContent: 'center' }}
            >
                <Grid container >
                    <Grid item xs={6}>
                        <Card square={true} sx={{ minWidth: 275, minHeight: "50%", height: "100%", boxShadow: 0 }}>
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    Send us a Message
                                </Typography>

                                <form>
                                    <TextField label="First Name" fullWidth autocomplete="none" />
                                    <TextField label="Last Name" fullWidth autocomplete="none" />
                                    <TextField label="Email" fullWidth autocomplete="none" />
                                    <TextField label="Message" fullWidth multiline rows={5} autocomplete="none" />
                                    <Button type="submit">Submit</Button>
                                </form>

                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={6}>
                        <Stack spacing={2}>
                            <Stack item>
                                <Card square={true} sx={{ minWidth: 275, minHeight: "50%", height: "100%", boxShadow: 0, paddingTop: 4 }}>
                                    <CardContent>
                                        <div>
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1943.9884867639562!2d28.649826019351636!3d-12.973324543183901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x196cb55c59894973%3A0xfeb43c98ceb7f64f!2sSONJAY%20LTD%20T%2FA%20YOUR%20CHEMIST!5e0!3m2!1sen!2sca!4v1654759237049!5m2!1sen!2sca" width="400px" height="250px" style={{ border: 0 }} allowfullscreen="" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                        </div>
                                    </CardContent>
                                </Card>
                            </Stack>
                            <Stack item>
                                <Card square={true} sx={{ minWidth: 275, minHeight: "50%", height: "100%", boxShadow: 0 }}>
                                    <CardContent>
                                        <Typography variant="h7" component="div">
                                            Business Hours
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Stack>
                        </Stack>
                    </Grid>
                </Grid>
            </Box>

        </ContactSection >
    )
};

export default Contact;