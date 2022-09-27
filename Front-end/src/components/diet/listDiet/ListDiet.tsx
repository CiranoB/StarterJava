import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { deleteDiet, getIdNutritionist } from '../../../services/Service';
import { TokenState } from '../../../store/tokens/tokensReducer';
import "./ListDiet.css"
import { makeStyles, Card, CardActions, CardContent, Button, Typography, Grid, Theme, createStyles, Modal, Backdrop, Fade } from '@material-ui/core/';
import Nutritionist from '../../../models/Nutritionist';
import Diet from '../../../models/Diet';
import { Slide, toast } from 'react-toastify';

function ListDiet() {

  //Definindo as variaveis
  const [nutritionist, setNutritionist] = useState<Nutritionist>({
    uuidPerson: '',
    namePerson: '',
    cpfPerson: '',
    agePerson: 0,
    loginPerson: '',
    passwordPerson: '',
    typePerson: '',
    crnNutritionist: '',
    statusNutritionist: true,
    registerNutritionist: '',
    diet: null,
  });

  //Pegar o token dos state
  const tokenLogin = useSelector<TokenState, TokenState['tokenLogin']>(
    (state) => state.tokenLogin
  );

  //assync function para chamar o back
  async function findNutritionist() {
    await getIdNutritionist('/nutritionist/find', setNutritionist, {
      headers: {
        Authorization: tokenLogin
      }
    });
  }

  //Verificar se o tamanho está alterando ou não
  useEffect(() => {
    if (tokenLogin !== undefined) {
      findNutritionist()
    }
  }, [tokenLogin])

  //Estilizando cards para listagem
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        width: "100%",
        backgroundColor: "#ededeacc",
        margin: "1vw 1vh",
      },
      title: {
        fontSize: 14,
      },
      modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        width: 400,
        minHeight: 300,
      },
    }));

  const classes = useStyles();

  //Delete
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };



  async function deleteDietList(uuidDiet: string) {
    try {
      await deleteDiet(`/nutritionist/diet/delete/${uuidDiet}`, {
        headers: {
          Authorization: tokenLogin
        }
      })
      toast.success('Dieta deletada com sucesso.', {
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
      handleClose();
    } catch (error) {
      console.log(`Erro: ${error}`)
      toast.error('Erro ao deletar dieta.', {
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
  }

  return (
    <Grid xs={12} className="myDiets">
      {
        nutritionist.diet?.map((diet: Diet) => (
          <Grid xs={4} className='diet'>
            < Card className={classes.root} variant="outlined">
              <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                  Nutricionista: {nutritionist.namePerson}
                </Typography>
                <Typography variant="h6" component="h2">
                  Esta dieta possui: {(diet.kcalDiet).toFixed(2)} calorias.
                </Typography>
                <br />
                <Typography variant="body1" component="p">
                  Alimentos da dieta:
                  <br />
                  {diet.foodsDiet}
                </Typography>
              </CardContent>
              <CardActions>
                <Link to={`/updateDiet/${diet.uuidDiet}`} className="text-decorator-none" >
                  <Button size="small" className='buttonNav'>Editar</Button>
                </Link>
                <Button size="small" className='buttonNav' onClick={handleOpen}>Excluir</Button>
                <Modal
                  aria-labelledby="transition-modal-title"
                  aria-describedby="transition-modal-description"
                  className={classes.modal}
                  open={open}
                  onClose={handleClose}
                  closeAfterTransition
                  BackdropComponent={Backdrop}
                  BackdropProps={{
                    timeout: 500,
                  }}
                >
                  <Fade in={open}>
                    <div className={classes.paper}>
                      <h2>Deseja deletar esta dieta: </h2>
                      <p>Calorias: {(diet.kcalDiet).toFixed(2)}</p>
                      <p>Comidas: {diet.foodsDiet}</p>
                      <p>Criador: {nutritionist.namePerson}<br />CRN: {nutritionist.crnNutritionist}</p>
                      <Button size="small" className='buttonNav' onClick={() => deleteDietList(diet.uuidDiet)}>Sim</Button>
                      <Button size="small" className='buttonNav' onClick={handleClose}>Não</Button>
                    </div>
                  </Fade>
                </Modal>
              </CardActions>
            </Card>
          </Grid>
        ))
      }
    </Grid >
  )
}

export default ListDiet