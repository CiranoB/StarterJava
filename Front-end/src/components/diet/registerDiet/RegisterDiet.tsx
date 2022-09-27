import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { TokenState } from '../../../store/tokens/tokensReducer';
import { Button, Checkbox, CheckboxProps, FormControlLabel, Grid, TextField, Typography, withStyles } from '@material-ui/core';
import './RegisterDiet.css';
import { Slide, toast } from 'react-toastify';
import { Box } from '@mui/material';
import { blue } from '@material-ui/core/colors';
import React, { ChangeEvent, useEffect, useState } from 'react'
import Diet from '../../../models/Diet';
import Group from '../../../models/Group';
import { getIdDiet, getIdGroup, registerDiet, updateDiet } from '../../../services/Service';
import Nutritionist from '../../../models/Nutritionist';

function RegisterDiet() {
  
  //Navegar entre as telas
  let navigate = useNavigate()

  const { uuidDiet } = useParams<{ uuidDiet: string }>()

  const token = useSelector<TokenState, TokenState['tokenLogin']>(
    (state) => state.tokenLogin
  );

  //Iniciando diet vazia
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

  const [diet, setDiet] = useState<Diet>({
    uuidDiet: "",
    kcalDiet: 0,
    foodsDiet: "",
    nutritionist: nutritionist,
  });


  // Verfica se o usuario está logado quando a tela é carregada
  useEffect(() => {
    if (token === '') {

      toast.warning('Você precisa logar, para cadastrar uma diet.', {
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

      navigate('/login');
    }
  }, [token]);

  async function findById(uuidDiet: string) {
    await getIdDiet(`/nutritionist/diet/find/${uuidDiet}`, setDiet, {
      headers: {
        Authorization: token,
      }
    });
  }

  useEffect(() => {
    if (uuidDiet !== undefined) {
      findById(uuidDiet);
    }
  }, [uuidDiet]);

  function updateModel(e: ChangeEvent<HTMLInputElement>) {
    setDiet({
      ...diet,
      [e.target.name]: e.target.value,
    });
  }

  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(diet)
    if (uuidDiet !== undefined) {
      try {
        await updateDiet(`/nutritionist/diet/update`, diet, setDiet, {
          headers: {
            Authorization: token,
          },
        });

        toast.success('Diet atualizada com sucesso.', {
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

      } catch (error) {
        console.log(`Deu erro: ${error}`);

        toast.error('Erro ao atualizar diet, tente novamente.', {
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
    } else {
      try {
        await registerDiet(`/nutritionist/diet/register`, diet, setDiet, {
          headers: {
            Authorization: token,
          },
        });

        toast.success('Diet cadastrada com sucesso.', {
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

      } catch (error) {
        console.log(`Deu erro: ${error}`);

        toast.error('Erro ao cadastrar diet, tente novamente.', {
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
    back();
  }

  function back() {
    navigate('/nutritionist');
  }

  return (
    <>
      <Grid xs={12} >
        <Box>
          <div>
            <form onSubmit={onSubmit} className='registerDiet'>
              <Typography
                variant="h4"
                color="textSecondary"
                component="h1"
              >
                Nova dieta
              </Typography>
              <TextField
                id="foodsDiet"
                label="Digite os alimentos da dieta: "
                variant="outlined"
                name="foodsDiet"
                margin="normal"
                fullWidth
                required
                value={diet.foodsDiet}
                onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)}
              />
              <TextField
                id="kcalDiet"
                label="Kcal da dieta: "
                variant="outlined"
                name="kcalDiet"
                margin="normal"
                fullWidth
                disabled
                value={(diet.kcalDiet).toFixed(2)}
                onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)}
              />
              <Box>
                <Button
                  type="submit"
                  variant="contained" >
                  Registrar
                </Button>
              </Box>
            </form>
          </div>
        </Box>
      </Grid>
    </>
  )
}

export default RegisterDiet