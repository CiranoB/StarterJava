import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, makeStyles, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet';
import { Slide, toast } from 'react-toastify';
import Pay from '../../models/Pay';
import { myPayments } from '../../services/Service';
import './MyPays.css'

function MyPays() {

    const token  = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIwM2EyYzQ5NC0zMGU3LTQxNTYtYjFhNy1lNzY5NTNmNmUxOWMiLCJleHAiOjE2NjM5NTQzODgsImlhdCI6MTY2MzkzNjM4OH0.CeqRkKwoByEALoI8HKLohqJsukWObH-MotMFyIDza6kEY858eWnOVTdaRuEBB-KYDT2i_k1Le3jbvqP8vs4-BQ';
  
    function no() {

    toast.info('Função não implementada', {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
      transition: Slide,
    });
  }
  const [pays, setPays] = useState<Pay[]>([])

  async function MyPayments() {
    await myPayments('user/mypayments', setPays, {
        headers: {
            'Authorization': token
        }
    });
  }

  useEffect(() => {
    MyPayments()
  }, [pays.length])

  //Estilizar cards

  const useStyles = makeStyles({
    root: {
      width: 350,
      margin: 15
    },
    media: {
      height: 250,
    },
  });

  const classes = useStyles();

  console.log(pays.toString);



  return (
    <>
    <Helmet>
                <style>{'body { background-color: #D8D8D4; }'}</style>
            </Helmet>
      <Grid container xs={12} className="container-produtos">
        <Box className='anunciar'>
          <h1 className='produtos fontFamily'>Produtos</h1>
        </Box>
        <Grid container spacing={3} xs={9} className="lista-produtos">
          {
            pays.map(pays => (
              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    image={'https://static5.depositphotos.com/1013245/484/i/600/depositphotos_4841836-stock-photo-bar-code.jpg'}
                    className={classes.media}
                    title={pays.uuidPay}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2" className='nomeProduto'>
                      Vencimento: {pays.dueDatePay}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h2" className='nomeProduto'>
                      R$ {pays.valuePay}
                    </Typography>
                    <Typography variant="body2" color="textPrimary" component="p">
                        Pagamento efetivado em: {pays.datePay}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions className='botaoProduto'>

                  <Box>
                    <Button
                      onClick={no}
                      variant="contained"
                      size="small"
                      className='atualizar-p'>
                      <img src='https://i.imgur.com/Nn5WV2j.png' alt='carrinho' className='carrinho' />
                      Comprar
                    </Button>
                  </Box>

                </CardActions>
              </Card>
            ))
          }
        </Grid>
      </Grid>
    </>
  )
}

export default MyPays;