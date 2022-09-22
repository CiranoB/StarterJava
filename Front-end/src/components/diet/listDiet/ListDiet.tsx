import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Slide, toast } from 'react-toastify';
import Diet from '../../../models/Diet';
import { getAllDiet } from '../../../services/Service';
import { TokenState } from '../../../store/tokens/tokensReducer';
import "./ListDiet.css"

function ListDiet() {

  // //Definindo as variaveis
  // const [diets, setDiets] = useState<Diet[]>([]);

  // //Se precisar mandar navegar para outra página
  // let navigate = useNavigate();

  // //Pegar o token dos state
  // const tokenLogin = useSelector<TokenState, TokenState['tokenLogin']>(
  //   (state) => state.tokenLogin
  // );

  // //assync function para chamar o back
  // async function listDiet() {
  //   await getAllDiet('/nutritionist/diet/all', setDiets, {
  //     headers: {
  //       Authorization: tokenLogin
  //     }
  //   });
  // }

  // //Verificar se o tamanho está alterando ou não
  // useEffect(() => {
  //   listDiet()
  // }, [diets.length])

  // //Verificar se existe o token, caso contrário, fazer login
  // useEffect(() => {
  //   if (tokenLogin === "") {
  //     toast.warning('Você precisa logar, para cadastrar um produto.', {
  //       position: "top-center",
  //       autoClose: 2000,
  //       hideProgressBar: true,
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //       theme: 'colored',
  //       transition: Slide,
  //     });

  //     navigate('/login');
  //   }
  // }, [tokenLogin]);

  return (
    <div>Diet</div>
  )
}

export default ListDiet