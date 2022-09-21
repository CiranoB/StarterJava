import React from 'react'
import { Typography, Grid, Box } from '@material-ui/core';
import './Footer.css'

function Footer() {
    return (
        <Grid className='containerFooter'>

            <Box className='boxFooter'>
                <Typography variant='body2' className='bolder'>
                    NutritionAPI
                </Typography>
                <hr className='hrFooter' />
                <Typography
                    variant='caption'>
                    © 2022 Copyright:
                </Typography>
                <br />
                <Typography
                    variant='caption'>
                    <a href='https://github.com/CiranoB' className='linkNone'>Cirano Belardony</a>, <a href='https://github.com/joaovneres' className='linkNone'>João Victor Neres</a>, <a href='https://github.com/JVitor25' className='linkNone'>João Vitor Lima.</a>
                </Typography>
            </Box>

            <Box className='boxFooter'>
                <Typography variant='body2' className='bolder'>
                    Institucional
                </Typography>
                <hr className='hrFooter' />
                <Typography variant='caption'>
                    Quem somos
                </Typography>
                <br />
                <Typography variant='caption'>
                    Política de privacidade
                </Typography>
                <br />
                <Typography variant='caption'>
                    Termos de uso
                </Typography>
            </Box>

            <Box className='boxFooter'>
                <Typography variant='body2' className='bolder'>
                    Serviço
                </Typography>
                <hr className='hrFooter' />
                <Typography variant='caption'>
                    Trabalhe conosco
                </Typography>
                <br />
                <Typography variant='caption'>
                    Fale conosco
                </Typography>
            </Box>
        </Grid>
    );
}

export default Footer;