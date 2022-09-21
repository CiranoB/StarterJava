import { Typography, Grid, Button } from '@material-ui/core';
import { Box } from '@mui/material'
import './Home.css';


function Home() {
    return (
        <>
            <Grid container direction="row" justifyContent="space-evenly" alignItems="center" className='caixa'>
                <Grid alignItems="center" item xs={6}>
                    <Box alignItems="center">
                        <Typography variant="h2" gutterBottom color="textPrimary"  align="center" className='titulo'>NutritionAPI</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className='subtitulo'>
                          <div>Nunca foi tão fácil construir uma dieta</div>
                           </Typography>
                           <Typography variant="h5" gutterBottom color="textPrimary" component="h1" align="center" className='titulo'>
                           <Button color="inherit" variant="contained" className='botao'>CADASTRE-SE</Button> 
                           </Typography>
                           
                    </Box>
                    
                </Grid>
                <Grid container xs={6} justifyContent="space-evenly" >
                    
                    <Box alignItems="center">
                    <img src="https://i.ytimg.com/vi/KzfsQdZRsiE/maxresdefault.jpg" className='image'/>
                    </Box>
                </Grid>
                <Grid xs={12} className='postagens'>
            
                </Grid>
            </Grid>

            <Grid container direction="row" justifyContent="space-evenly" alignItems="center"
             className='howitworks'>
               
                    <Box >
                        <Typography variant="h2" gutterBottom color="textPrimary"  align="center" 
                        className='titulo2'>Afinal, como funciona?</Typography>
                           
                    </Box>
                
            </Grid>

            <Grid container direction="row" justifyContent="space-evenly" alignItems="center" className='caixa'>
                <Grid xs={2}  alignItems="center">
                    <Box >
                        <Typography variant="h3" gutterBottom color="textPrimary"  align="center" className='subtitulo'>1º</Typography>
                    </Box>
                </Grid>
                <Grid xs={10} alignItems="center" >
                    <Box >
                        <Typography variant="h6" gutterBottom color="textPrimary"  align="center" className='subtitulo'>Você se cadastra, informando dados
                        básicos físicos como altura, peso, gênero, nome, etc e seu objetivo (aumentar, diminuir ou manter o peso)</Typography>
                    </Box>
                </Grid>
                
            </Grid>
            <Grid container direction="row" justifyContent="space-evenly" alignItems="center" className='caixa'>
                <Grid xs={2}  alignItems="center">
                    <Box >
                        <Typography variant="h3" gutterBottom color="textPrimary"  align="center" className='subtitulo'>1º</Typography>
                    </Box>
                </Grid>
                <Grid xs={10} alignItems="center" >
                    <Box >
                        <Typography variant="h6" gutterBottom color="textPrimary"  align="center" className='subtitulo'>Você se cadastra, informando dados
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
                        ut aliquip ex ea commodo consequat.</Typography>
                    </Box>
                </Grid>
                
            </Grid>
            <Grid container direction="row" justifyContent="space-evenly" alignItems="center" className='caixa'>
                <Grid xs={2}  alignItems="center">
                    <Box >
                        <Typography variant="h3" gutterBottom color="textPrimary"  align="center" className='subtitulo'>1º</Typography>
                    </Box>
                </Grid>
                <Grid xs={10} alignItems="center" >
                    <Box >
                        <Typography variant="h6" gutterBottom color="textPrimary"  align="center" className='subtitulo'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
                        ut aliquip ex ea commodo consequat.</Typography></Box>
                </Grid>
                
            </Grid>

            <Grid container direction="row" justifyContent="space-evenly" alignItems="center"
             className='howitworks'>
               
                    <Box >
                        <Typography variant="h2" gutterBottom color="textPrimary"  align="center" 
                        className='titulo2'>Depoimentos Reais</Typography>
                        <Typography><iframe width="480" height="320"
                        src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe></Typography>

                    </Box>
                
            </Grid>
        </>
    );
}

export default Home;