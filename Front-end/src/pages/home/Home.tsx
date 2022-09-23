import { Typography, Button } from '@material-ui/core';
import { Link, useNavigate } from "react-router-dom";
import { Grid, Box, Divider } from '@mui/material'
import './Home.css';


function Home() {
    return (
        <>
            <Grid container direction="row" justifyContent="space-evenly" alignItems="center" className='caixa'>
                <Grid alignItems="center" item xs={6}>
                    <Box alignItems="center">
                        <Typography variant="h2" gutterBottom color="textPrimary" align="center" className='titulo'>NutritionAPI</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className='subtitulo'>
                            <div>Nunca foi tão fácil construir uma dieta</div>
                        </Typography>
                        <Link to='/login' className='text-decoration-none'>
                            <Typography variant="h5" gutterBottom color="textPrimary" component="h1" align="center" className='botaoCadastro'>
                                <Button color="inherit" variant="contained" className='botaoCadastro'>FAÇA LOGIN OU CADASTRE-SE</Button>
                            </Typography>
                        </Link>

                    </Box>

                </Grid>
                <Grid container xs={6} justifyContent="space-evenly" >
                    <Grid container alignItems="center">
                        <img src="https://i.ytimg.com/vi/KzfsQdZRsiE/maxresdefault.jpg" className='image' />
                    </Grid>
                </Grid>
                <Grid xs={12} className='postagens'>

                </Grid>
            </Grid>

            <Grid container direction="row" justifyContent="space-evenly" alignItems="center"
                className='howitworks'>
                <Box marginTop={2}>
                    <Typography variant="h3" gutterBottom align="center"
                        className='titulo2'>Afinal, como funciona?</Typography>

                </Box>
            </Grid>
            <Grid sx={{ backgroundColor: "#7CB6B5" }} paddingX={15}>
                <Grid container direction="row" justifyContent="space-evenly" alignItems="center" className='caixa' >
                    <Grid xs={5} alignItems="center" marginTop={2}>
                        <Box >
                            <Typography variant="h1" gutterBottom color="textPrimary" align="center" className='subtitulo'>1º</Typography>
                        </Box>
                    </Grid>
                    <Grid xs={5} alignItems="center" marginTop={2}>
                        <Box >
                            <Typography variant="h6" gutterBottom color="textPrimary" align="center" className='subtituloMeio'>Você se cadastra, informando dados
                                básicos físicos como altura, peso, gênero, nome, etc e seu objetivo (aumentar, diminuir ou manter o peso)</Typography>
                        </Box>
                    </Grid>

                </Grid>
                <Box sx={{ backgroundColor: "#DEBA7C", padding: "0.5px" }}><Divider /></Box>
                <Grid container direction="row" justifyContent="space-evenly" alignItems="center" className='caixa' marginTop={5}>
                    <Grid xs={5} alignItems="center" >
                        <Box >
                            <Typography variant="h6" gutterBottom color="textPrimary" align="center" className='subtituloMeio'>Você se cadastra, informando dados
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                                ut aliquip ex ea commodo consequat.</Typography>
                        </Box>
                    </Grid>

                    <Grid xs={5} alignItems="center">
                        <Box >
                            <Typography variant="h1" gutterBottom color="textPrimary" align="center" className='subtitulo'>2º</Typography>
                        </Box>
                    </Grid>
                </Grid>
                <Box sx={{ backgroundColor: "#DEBA7C", padding: "0.5px" }}><Divider /></Box>
                <Grid container direction="row" justifyContent="space-evenly" alignItems="center" className='caixa' marginTop={5}>
                    <Grid xs={5} alignItems="center">
                        <Box >
                            <Typography variant="h1" gutterBottom color="textPrimary" align="center" className='subtitulo'>3º</Typography>
                        </Box>
                    </Grid>
                    <Grid xs={5} alignItems="center" >
                        <Box >
                            <Typography variant="h6" gutterBottom color="textPrimary" align="center" className='subtituloMeio'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                                ut aliquip ex ea commodo consequat.</Typography>
                        </Box>
                    </Grid>

                </Grid>
            </Grid>

            <Grid container direction="row" justifyContent="space-evenly" alignItems="center"
                className='howitworks'>

                <Box marginY={2}>
                    <Typography variant="h2" gutterBottom color="textPrimary" align="center"
                        className='titulo2' >Depoimentos Reais</Typography>
                    <Typography align="center" ><iframe width="480" height="320"
                        src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe></Typography>

                </Box>

            </Grid>
        </>
    );
}

export default Home;