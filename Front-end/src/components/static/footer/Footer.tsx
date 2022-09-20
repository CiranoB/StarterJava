import React from 'react'
import { Typography, Grid, Box } from '@material-ui/core';
import './Footer.css'

function Footer() {
    return (
        <Grid className='containerFooter'>
            <Grid className='fFooter'>
                <Box>
                    <Typography
                        variant='caption'
                        className='bolder'>
                        © 2022 Copyright:
                    </Typography>
                    <br />
                    <Typography
                        variant='caption'
                        className='bolder'>
                        <a href='https://github.com/CiranoB' className='linkNone'>Cirano Belardony</a>, <a href='https://github.com/joaovneres' className='linkNone'>João Victor Neres</a>, <a href='https://github.com/JVitor25' className='linkNone'>João Vitor Lima.</a>
                    </Typography>
                </Box>
            </Grid>
        </Grid>
    );
}

export default Footer;