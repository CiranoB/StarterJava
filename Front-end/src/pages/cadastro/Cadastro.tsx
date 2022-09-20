import React, { useState, useEffect, ChangeEvent } from "react";
import { Grid, Box, Button, Typography, TextField, RadioGroup, FormControl, FormControlLabel, Radio } from "@mui/material"
import "./Cadastro.css";

export default function Cadastro() {
  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()
    // if (user.senha === "" || user.nome === "" || user.usuario === "") {
    //     toast.warn('Possui campos vazios', {
    //         position: "top-right",
    //         autoClose: 2000,
    //         hideProgressBar: false,
    //         closeOnClick: true,
    //         pauseOnHover: true,
    //         draggable: true,
    //         progress: undefined,
    //         theme: 'colored',
    //     })
    // } else if (user.usuario.includes("@") === false || user.usuario.includes(".com") === false) {
    //     toast.warn('Formato esperado no campo e-mail: email@email.com', {
    //         position: "top-right",
    //         autoClose: 2000,
    //         hideProgressBar: false,
    //         closeOnClick: true,
    //         pauseOnHover: false,
    //         draggable: false,
    //         theme: 'colored',
    //         progress: undefined
    //     })
    // } else if (user.foto.length >= 255) {
    //     toast.warn('O link da foto deve ter menos que 255 caracteres.', {
    //         position: "top-right",
    //         autoClose: 2000,
    //         hideProgressBar: false,
    //         closeOnClick: true,
    //         pauseOnHover: true,
    //         draggable: true,
    //         progress: undefined,
    //         theme: 'colored',
    //     })
    // } else if (user.senha.length < 8) {
    //     toast.warn('A senha deve conter ao menos 8 digitos', {
    //         position: "top-right",
    //         autoClose: 2000,
    //         hideProgressBar: false,
    //         closeOnClick: true,
    //         pauseOnHover: true,
    //         draggable: true,
    //         progress: undefined,
    //         theme: 'colored',
    //     })
    // } else if (confirmarSenha === user.senha) {
    //     cadastroUsuario(`/usuarios/cadastrar`, user, setUserResult)
    //     toast.success('Usuário cadastrado.', {
    //         position: "top-right",
    //         autoClose: 2000,
    //         hideProgressBar: false,
    //         closeOnClick: true,
    //         pauseOnHover: true,
    //         draggable: true,
    //         progress: undefined,
    //         theme: 'colored',
    //     });
    // } else {
    //     toast.warn('As senhas não coincidem.', {
    //         position: "top-right",
    //         autoClose: 2000,
    //         hideProgressBar: false,
    //         closeOnClick: true,
    //         pauseOnHover: true,
    //         draggable: true,
    //         progress: undefined,
    //         theme: 'colored',
    //     });
    // }
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
          xs={6}
          className="itemCadastro">
          <Box paddingX={10} marginY={10} className='boxCadastro'>
            <form onSubmit={onSubmit}>
              <Typography variant='h3' gutterBottom color='textPrimary' component='h4' align='center' className="textos1">Cadastrar</Typography>

              <TextField /*value={user.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}*/ id='nome' label='Nome' variant='outlined' name='nome' margin='normal' fullWidth />

              <TextField /*value={user.foto} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}*/ id='foto' label='Link da Foto' variant='outlined' name='foto' margin='normal' fullWidth />

              <TextField /*value={user.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}*/ id='usuario' label='E-mail' variant='outlined' name='usuario' margin='normal' fullWidth />

              <TextField /*value={user.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}*/ id='senha' label='Senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth />

              <TextField /*value={confirmarSenha} onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)}*/ id='confirmarSenha' label='Confirmação de Senha' variant='outlined' name='confirmarSenha' margin='normal' type='password' fullWidth />

              <Box marginTop={2}>
                <FormControl component="fieldset">
                  <Typography variant="h6" color="inherit">Selecione um tipo de Usuário:</Typography>
                  <RadioGroup aria-label="tipoPessoa" name="tipoPessoa" value={value} onChange={handleChange}>
                    <FormControlLabel value="user" control={<Radio color="primary" />} label="Usuario" />
                    <FormControlLabel value="nutritionist" control={<Radio color="primary" />} label="Nutricionista" />
                    <FormControlLabel value="bookkeeper" control={<Radio color="primary" />} label="Contador" />
                  </RadioGroup>
                </FormControl>
              </Box>
              <Box marginTop={2} textAlign='center'>
                {/* <Link to='/login' className='text-decorator-none'> */}
                <Button variant='contained' color='secondary' className='btnCancelar'>
                  Cancelar
                </Button>
                {/* </Link> */}
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