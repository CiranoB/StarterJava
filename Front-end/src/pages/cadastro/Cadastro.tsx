import React, { useState, useEffect, ChangeEvent } from "react";
import { Grid, Box, Button, Typography, TextField, RadioGroup, FormControl, FormControlLabel, Radio } from "@mui/material"
import { Link, useNavigate } from 'react-router-dom';
import { TabContext, TabPanel } from '@material-ui/lab';
import { registerUser, registerNutritionist, registerBookkeeper } from '../../services/Service';
import "./Cadastro.css";
import User from "../../models/User";
import { toast } from 'react-toastify';
import Nutritionist from "../../models/Nutritionist";
import Bookkeeper from "../../models/Bookkeeper";

export default function Cadastro() {
  let navigate = useNavigate();

  const [confirmarSenha, setConfirmarSenha] = useState<String>("")

  function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>) {
    setConfirmarSenha(e.target.value)
  }

  const [user, setUser] = useState<User>({
    uuidPerson: '',
    namePerson: '',
    cpfPerson: '',
    agePerson: 0,
    loginPerson: '',
    passwordPerson: '',
    admin: false,
    statusUser: true,
    objectiveUser: '',
    heightUser: 0.00,
    weightUser: 0.00,
    bmrUser: 0.00,
    restrictionUser: '',
    costUser: ''
  });

  const [userResult, setUserResult] = useState<User>({
    uuidPerson: '',
    namePerson: '',
    cpfPerson: '',
    agePerson: 0,
    loginPerson: '',
    passwordPerson: '',
    admin: false,
    statusUser: true,
    objectiveUser: '',
    heightUser: 0,
    weightUser: 0,
    bmrUser: 0,
    restrictionUser: '',
    costUser: ''
  });

  useEffect(() => {
    if (userResult.uuidPerson !== '') {
      navigate("/login")
    }
  }, [userResult])

  function updatedModelUser(e: ChangeEvent<HTMLInputElement>) {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  const [nutritionist, setNutritionist] = useState<Nutritionist>({
    uuidPerson: '',
    namePerson: '',
    cpfPerson: '',
    agePerson: 0,
    loginPerson: '',
    passwordPerson: '',
    admin: true,
    crnNutritionist: '',
    statusNutritionist: true,
    registerNutritionist: ''
  });

  const [nutritionistResult, setNutritionistResult] = useState<Nutritionist>({
    uuidPerson: '',
    namePerson: '',
    cpfPerson: '',
    agePerson: 0,
    loginPerson: '',
    passwordPerson: '',
    admin: true,
    crnNutritionist: '',
    statusNutritionist: true,
    registerNutritionist: ''
  });

  useEffect(() => {
    if (nutritionistResult.uuidPerson !== '') {
      navigate("/login")
    }
  }, [nutritionistResult])

  function updatedModelNutritionist(e: ChangeEvent<HTMLInputElement>) {
    setNutritionist({
      ...nutritionist,
      [e.target.name]: e.target.value
    })
  }

  const [bookkeeper, setBookkeeper] = useState<Bookkeeper>({
    uuidPerson: '',
    namePerson: '',
    cpfPerson: '',
    agePerson: 20,
    loginPerson: '',
    passwordPerson: '',
    admin: false,
    statusBookkeeper: true,
    registerBookkeeper: ''
  });

  const [bookkeeperResult, setBookkeeperResult] = useState<Bookkeeper>({
    uuidPerson: '',
    namePerson: '',
    cpfPerson: '',
    agePerson: 0,
    loginPerson: '',
    passwordPerson: '',
    admin: false,
    statusBookkeeper: true,
    registerBookkeeper: ''
  });

  useEffect(() => {
    if (bookkeeperResult.uuidPerson !== '') {
      navigate("/login")
    }
  }, [bookkeeperResult])

  function updatedModelBookkeeper(e: ChangeEvent<HTMLInputElement>) {
    setBookkeeper({
      ...bookkeeper,
      [e.target.name]: e.target.value
    })
  }

  const [valueView, setValueView] = useState('0');
  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()
    console.log("oi")
    if (confirmarSenha === bookkeeper.passwordPerson) {
      if (valueView === '1') {
        registerUser(`/auth/register/user`, user, setUserResult)
      }
      if (valueView === '2') {
        console.log(nutritionist)
        registerNutritionist(`/auth/register/nutritionist`, nutritionist, setNutritionistResult)
      }
      if (valueView === '3') {
        console.log(bookkeeper)
        registerBookkeeper(`/auth/register/bookkeeper`, bookkeeper, setBookkeeperResult)
      }
    }else{
      console.log("senha diferente")
      console.log("segunda senha: " + confirmarSenha)
    }
    /*if (user.passwordPerson === "" || user.namePerson === "" || user.loginPerson === "") {
      toast.warn('Possui campos vazios', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      })
    } else if (user.loginPerson.includes("@") === false || user.loginPerson.includes(".com") === false) {
      toast.warn('Formato esperado no campo e-mail: email@email.com', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: 'colored',
        progress: undefined
      })
    } else if (user.passwordPerson.length < 8) {
      toast.warn('A senha deve conter ao menos 8 digitos', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      })
    } else if (confirmarSenha === user.passwordPerson) {
      registerUser(`/auth/register/user`, user, setUserResult)
      toast.success('Usuário cadastrado.', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
    } else {
      toast.warn('As senhas não coincidem.', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
    }*/
  }

  const [value, setValue] = React.useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <>
      <Grid
        container
        className="containerCadastro">
        <Grid
          item
          xs={4}
          className="itemCadastro">
          <Box paddingX={10} marginY={10} className='boxCadastro'>
            <Typography variant='h3' gutterBottom color='textPrimary' component='h4' align='center' className="textoCadastro">Cadastrar</Typography>

            <Box marginBottom={2}>
              <FormControl component="fieldset">
                <Typography variant="h6" color="inherit">Selecione um tipo de Usuário:</Typography>
                <RadioGroup aria-label="tipoPessoa" name="tipoPessoa" value={value} onChange={handleChange}>
                  <FormControlLabel value="user" control={<Radio color="primary" />} label="Usuário" onClick={() => setValueView("1")} />
                  <FormControlLabel value="nutritionist" control={<Radio color="primary" />} label="Nutricionista" onClick={() => setValueView("2")} />
                  <FormControlLabel value="bookkeeper" control={<Radio color="primary" />} label="Contador" onClick={() => setValueView("3")} />
                </RadioGroup>
              </FormControl>
            </Box>

            <form onSubmit={onSubmit}>
              <Box marginTop={2}>
                <TabContext value={valueView}>
                  <TabPanel value="1" className="tabPanelCadastro">
                    <Typography variant='h6' gutterBottom color='textPrimary' component='h4' align='center'>Cadastrando um Usuário:</Typography>
                    <TextField value={user.namePerson} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModelUser(e)} id='namePerson' label='Nome' variant='outlined' name='namePerson' margin='normal' fullWidth />
                    <TextField value={user.cpfPerson} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModelUser(e)} id='cpfPerson' label='CPF' variant='outlined' name='cpfPerson' margin='normal' fullWidth />
                    <TextField value={user.agePerson} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModelUser(e)} id='agePerson' label='Idade' variant='outlined' name='agePerson' margin='normal' fullWidth />
                    <TextField value={user.loginPerson} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModelUser(e)} id='loginPerson' label='E-mail' variant='outlined' name='loginPerson' margin='normal' fullWidth />
                    <TextField value={user.passwordPerson} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModelUser(e)} id='passwordPerson' label='Senha' variant='outlined' name='passwordPerson' margin='normal' type='password' fullWidth />
                    <TextField value={confirmarSenha} onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)} id='confirmarSenha' label='Confirmação de Senha' variant='outlined' name='confirmarSenha' margin='normal' type='password' fullWidth />
                    <TextField value={user.heightUser} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModelUser(e)} id='heightUser' label='Altura' variant='outlined' name='heightUser' margin='normal' fullWidth />
                    <TextField value={user.weightUser} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModelUser(e)} id='weightUser' label='Peso' variant='outlined' name='weightUser' margin='normal' fullWidth />
                    <TextField value={user.bmrUser} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModelUser(e)} id='bmrUser' label='Metabolismo Basal' variant='outlined' name='bmrUser' margin='normal' fullWidth />
                    <TextField value={user.restrictionUser} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModelUser(e)} id='restrictionUser' label='Link da Foto' variant='outlined' name='restrictionUser' margin='normal' fullWidth />
                    <TextField value={user.costUser} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModelUser(e)} id='costUser' label='Link da Foto' variant='outlined' name='costUser' margin='normal' fullWidth />
                  </TabPanel>
                  <TabPanel value="2" className="tabPanelCadastro">
                    <Typography variant='h6' gutterBottom color='textPrimary' component='h4' align='center'>Cadastrando um Nutricionista:</Typography>
                    <TextField value={nutritionist.namePerson} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModelNutritionist(e)} id='namePerson' label='Nome' variant='outlined' name='namePerson' margin='normal' fullWidth />
                    <TextField value={nutritionist.cpfPerson} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModelNutritionist(e)} id='cpfPerson' label='CPF' variant='outlined' name='cpfPerson' margin='normal' fullWidth />
                    <TextField value={nutritionist.agePerson} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModelNutritionist(e)} id='agePerson' label='Idade' variant='outlined' name='agePerson' margin='normal' fullWidth />
                    <TextField value={nutritionist.loginPerson} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModelNutritionist(e)} id='loginPerson' label='E-mail' variant='outlined' name='loginPerson' margin='normal' fullWidth />
                    <TextField value={nutritionist.passwordPerson} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModelNutritionist(e)} id='passwordPerson' label='Senha' variant='outlined' name='passwordPerson' margin='normal' type='password' fullWidth />
                    <TextField value={confirmarSenha} onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)} id='confirmarSenha' label='Confirmação de Senha' variant='outlined' name='confirmarSenha' margin='normal' type='password' fullWidth />
                    <TextField value={nutritionist.crnNutritionist} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModelNutritionist(e)} id='crnNutritionist' label='CRN do Nutricionista' variant='outlined' name='crnNutritionist' margin='normal' fullWidth />
                    <TextField value={nutritionist.registerNutritionist} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModelNutritionist(e)} id='registerNutritionist' label='Número de Registro' variant='outlined' name='registerNutritionist' margin='normal' fullWidth />
                  </TabPanel>
                  <TabPanel value="3" className="tabPanelCadastro">
                    <Typography variant='h6' gutterBottom color='textPrimary' component='h4' align='center'>Cadastrando um Contador:</Typography>
                    <TextField value={bookkeeper.namePerson} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModelBookkeeper(e)} id='namePerson' label='Nome' variant='outlined' name='namePerson' margin='normal' fullWidth />
                    <TextField value={bookkeeper.cpfPerson} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModelBookkeeper(e)} id='cpfPerson' label='CPF' variant='outlined' name='cpfPerson' margin='normal' fullWidth />
                    {/* <TextField value={bookkeeper.agePerson} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModelBookkeeper(e)} id='agePerson' label='Idade' variant='outlined' name='agePerson' margin='normal' fullWidth /> */}
                    <TextField value={bookkeeper.loginPerson} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModelBookkeeper(e)} id='loginPerson' label='E-mail' variant='outlined' name='loginPerson' margin='normal' fullWidth />
                    <TextField value={bookkeeper.passwordPerson} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModelBookkeeper(e)} id='passwordPerson' label='Senha' variant='outlined' name='passwordPerson' margin='normal' type='password' fullWidth />
                    <TextField value={confirmarSenha} onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)} id='confirmarSenha' label='Confirmação de Senha' variant='outlined' name='confirmarSenha' margin='normal' type='password' fullWidth />
                    <TextField value={bookkeeper.registerBookkeeper} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModelBookkeeper(e)} id='registerBookkeeper' label='Número de Registro' variant='outlined' name='registerBookkeeper' margin='normal' fullWidth />
                  </TabPanel>
                </TabContext>
              </Box>
              <Box marginTop={2} textAlign='center'>
                <Link to='/login' className='text-decorator-none'>
                  <Button variant='contained' color='secondary' className='btnCancelar'>
                    Cancelar
                  </Button>
                </Link>
                <Button type='submit' variant='contained' color='primary'>
                  Cadastrar
                </Button>
              </Box>
            </form>
          </Box>
        </Grid>
      </Grid>
    </>
  )
}