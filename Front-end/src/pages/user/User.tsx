import React, { useEffect, useState } from 'react';
import { Grid, Box, Button, Typography, TextField, FormControl, InputLabel, Select, MenuItem, FormHelperText } from "@mui/material";
import "./User.css";
import { Link, useNavigate } from "react-router-dom";
import { getAllUser, getIdUser, myDiet } from '../../services/Service';
import User from '../../models/User';
import Diet from '../../models/Diet';
import {Helmet} from 'react-helmet';


function UserF() {
    const token = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIwM2EyYzQ5NC0zMGU3LTQxNTYtYjFhNy1lNzY5NTNmNmUxOWMiLCJleHAiOjE2NjM5NTQzODgsImlhdCI6MTY2MzkzNjM4OH0.CeqRkKwoByEALoI8HKLohqJsukWObH-MotMFyIDza6kEY858eWnOVTdaRuEBB-KYDT2i_k1Le3jbvqP8vs4-BQ";


    const [diet, setDiet] = useState<Diet | any>({
        uuidDiet: '',
    kcalDiet: 0,
    foodsDiet: '',
    nutritionist: {
        namePerson: ''
    }
    });

    async function getMyDiet() {
        await myDiet("/user/mydiet", setDiet, {
            headers: {
                'Authorization': token
            }
        })
    }
    useEffect(() => {
        getMyDiet()
    }, [diet.length])


    return (
        <>
        <Helmet>
                <style>{'body { background-color: #D8D8D4; }'}</style>
            </Helmet>
                <Grid
                    item
                    xs={12}
                    alignItems={'center'} className='backgroud'>
                         <Box className="boxCriarFaturaExterno">
                        <Button>
                            <Box className="boxCriarFaturaInterno">
                                <Typography variant="h4" align='center'>Informações da minha dieta: </Typography>
                            </Box>
                        </Button>
                    </Box>
                    <Grid item xs={12}>
                    <Box>
                    <Typography variant="h5" align='center'>Alimentos e quantidades: {diet.foodsDiet}</Typography>
                    </Box>
                    <Box>
                    <Typography variant="h5" align='center'>Quantidade de calorias:  {diet.kcalDiet}</Typography>
                    </Box>
                    <Box>
                    <Typography variant="h5" align='center'>Profissional responsável: {diet.nutritionist.namePerson}</Typography>
                    </Box>
                </Grid>
                </Grid>
               

                <Grid
                    item
                    xs={12} className='backgroud'>
                    <Box className="boxCriarFaturaExterno">
                        <Button>
                            <Link to='/mypays'>
                        <Typography variant="h5"  color="textPrimary" component="h1" align="center" className='titulo'>
                            <Box className="boxCriarFaturaInterno">
                                Ver minhas faturas
                            </Box>
                            </Typography>
                            </Link>
                        </Button>
                    </Box>  
                    </Grid>
        

        </>
    )
}

export default UserF