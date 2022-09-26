import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getIdNutritionist } from '../../../services/Service';
import { TokenState } from '../../../store/tokens/tokensReducer';
import "./ListDiet.css"
import { makeStyles, Card, CardActions, CardContent, Button, Typography, Grid } from '@material-ui/core/';
import Nutritionist from '../../../models/Nutritionist';
import Diet from '../../../models/Diet';


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
    registerNutritionist: ''
  });

  const [diets, setDiets] = useState<Diet[]>([]);

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
  const useStyles = makeStyles({
    root: {
      minWidth: 275,
      backgroundColor: "#ededeacc",
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });

  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Grid xs={6} className="myDiets">
      {
        diets.map((diet: any) => (
          < Card className={classes.root} variant="outlined">
            <CardContent>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
                Nutricionista: {nutritionist.namePerson}
              </Typography>
              <Typography variant="h5" component="h2">
                Esta dieta possui: {diet.kcalDiet}
              </Typography>
              <Typography variant="body2" component="p">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        ))
      }
    </Grid >
  )
}

export default ListDiet