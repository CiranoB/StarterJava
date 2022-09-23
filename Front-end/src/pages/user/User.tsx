import React, { useEffect, useState } from 'react';
import { Grid, Box, Button, Typography, TextField, FormControl, InputLabel, Select, MenuItem, FormHelperText } from "@mui/material";
import "./User.css";
import { Link, useNavigate } from "react-router-dom";
import { getAllUser, getIdUser, myDiet } from '../../services/Service';
import User from '../../models/User';
import Diet from '../../models/Diet';

function UserF() {
    const token = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIwM2EyYzQ5NC0zMGU3LTQxNTYtYjFhNy1lNzY5NTNmNmUxOWMiLCJleHAiOjE2NjM5MjQxNTMsImlhdCI6MT"+
    "Y2MzkwNjE1M30.DzHoqYplm1GT15fOt9RVxj_n36EQCfhSmtOf_TKhzzTiqO0XD47N4nTZ1ZiynvXrGP_q60ydZZL97udLGwVemg";


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
        
                <Grid
                    item
                    xs={12}
                    alignItems={'center'}>
                         <Box className="boxCriarFaturaExterno">
                        <Button>
                            <Box className="boxCriarFaturaInterno">
                                Informações da minha dieta:
                            </Box>
                        </Button>
                    </Box>
                </Grid>
                <Grid alignItems={'center'}>
                    <Box alignItems={'center'} className="boxCriarFaturaInterno">
                    <Typography>Alimentos e quantidades: <TextField value={diet.foodsDiet}>
                    </TextField></Typography>
                    </Box>
                    <Box alignItems={'center'} className="boxCriarFaturaInterno">
                    <Typography>Quantidade de calorias: <TextField value={diet.kcalDiet}>
                    </TextField></Typography>
                    </Box>
                    <Box alignItems={'center'} className="boxCriarFaturaInterno">
                    <Typography>Profissional responsável: <TextField value={diet.nutritionist.namePerson}>
                    </TextField></Typography>
                    </Box>
                </Grid>

                <Grid
                    item
                    xs={12}>
                    <Box className="boxCriarFaturaExterno">
                        <Button>
                            <Link to='/mypays'>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h1" align="center" className='titulo'>
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