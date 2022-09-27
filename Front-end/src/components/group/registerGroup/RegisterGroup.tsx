import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { TokenState } from '../../../store/tokens/tokensReducer';
import { Button, FormControl, FormHelperText, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@material-ui/core';
import './RegisterGroup.css';
import { Slide, toast } from 'react-toastify';
import { Box } from '@mui/material';
import { blue } from '@material-ui/core/colors';
import React, { ChangeEvent, useEffect, useState } from 'react'
import Diet from '../../../models/Diet';
import Group from '../../../models/Group';
import { getAllDiet, getAllGroup, getIdDiet, getIdGroup, registerDiet, updateDiet } from '../../../services/Service';
import Nutritionist from '../../../models/Nutritionist';

function RegisterGroup() {

  //Navegar entre as telas
  let navigate = useNavigate()

  const token = useSelector<TokenState, TokenState['tokenLogin']>(
    (state) => state.tokenLogin
  );

  //Iniciando group vazio
  const { uuidGroup } = useParams<{ uuidGroup: string }>()

  const [diets, setDiets] = useState<Diet[]>([]);

  const [diet, setDiet] = useState<Diet>({
    uuidDiet: "",
    kcalDiet: 0,
    foodsDiet: "",
    nutritionist: null,
  });

  const [group, setGroup] = useState<Group>({
    uuidGroup: '',
    costGroup: '',
    restrictionGroup: '',
    maxKcalGroup: 0,
    minKcalGroup: 0,
    diet: null,
  })


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

  async function findById(uuidGroup: string) {
    await getIdGroup(`/nutritionist/group/find/${uuidGroup}`, setGroup, {
      headers: {
        Authorization: token,
      }
    });
  }

  useEffect(() => {
    findDiets();
    if (uuidGroup !== undefined) {
      findById(uuidGroup);
    }
  }, [uuidGroup]);

  async function findDiets() {
    await getAllDiet('/nutritionist/diet/all', setDiets, {
      headers: {
        Authorization: token,
      }
    });
  }

  function updateModel(e: ChangeEvent<HTMLInputElement>) {
    setGroup({
      ...group,
      [e.target.name]: e.target.value,
      diet: diet
    });
  }

  //Enviar
  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(diet)
    if (uuidGroup !== undefined) {
      try {
        await updateDiet(`/nutritionist/group/update`, group, setGroup, {
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
        await registerDiet(`/nutritionist/group/register`, group, setGroup, {
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
                Novo grupo
              </Typography>
              <TextField
                id="restrictionGroup"
                label="Quais as restrições deste grupo: "
                variant="outlined"
                name="restrictionGroup"
                margin="normal"
                fullWidth
                required
                value={group.restrictionGroup}
                onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)}
              />
              <TextField
                id="minKcalGroup"
                label="Quantas calorias a pessoa deve consumir no mínimo: "
                variant="outlined"
                name="minKcalGroup"
                margin="normal"
                type={'number'}
                fullWidth
                required
                value={group.minKcalGroup}
                onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)}
              />
              <TextField
                id="maxKcalGroup"
                label="Quantas calorias a pessoa deve consumir no máximo: "
                variant="outlined"
                name="maxKcalGroup"
                margin="normal"
                type={'number'}
                fullWidth
                required
                value={group.maxKcalGroup}
                onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)}
              />
              <FormControl fullWidth variant='filled'>
                <InputLabel id="costGroup">Custo deste grupo</InputLabel>
                <Select
                  labelId="costGroup"
                  id="costGroup"
                  margin="dense"
                  onChange={(e) =>
                    (e: ChangeEvent<HTMLInputElement>) => updateModel(e)
                  }
                >
                  <MenuItem>Alto</MenuItem>
                  <MenuItem>Médio</MenuItem>
                  <MenuItem>Baixo</MenuItem>
                </Select>
                <FormHelperText>Escolha qual custo o cliente terá com a dieta</FormHelperText>
              </FormControl>
              <FormControl fullWidth variant='filled'>
                <InputLabel id="selectDiet">Dieta deste grupo</InputLabel>
                <Select
                  labelId="selectDiet"
                  id="selectDiet"
                  margin="dense"
                  onChange={(e) => getIdDiet(`/nutritionist/diet/find/${e.target.value}`, setDiets, {
                    headers: {
                      Authorization: token,
                    }
                  })
                  }
                >
                  {diets.map((diet) => (
                    <MenuItem value={diet.uuidDiet}>Alimentos: {diet.foodsDiet}<br />Calorias: {(diet.kcalDiet).toFixed(2)}</MenuItem>
                  ))}
                </Select>
                <FormHelperText>Escolha a dieta</FormHelperText>
              </FormControl>
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

export default RegisterGroup