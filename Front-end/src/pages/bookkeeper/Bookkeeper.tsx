import React, { useEffect, useState } from 'react';
import { Grid, Box, Button, Typography, TextField, FormControl, InputLabel, Select, MenuItem, FormHelperText } from "@mui/material";
import "./Bookkeeper.css";
import { getAllUser, getIdUser } from '../../services/Service';
import User from '../../models/User';

function Bookkeeper() {
    const token = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJiNzZmN2E4OC0zOWI2LTRmMGUtYmViNC00OGU1MmE0MjQ2MDYiLCJleHAiOjE2NjM4NzU4NTUsImlhdCI6MTY2Mzg1Nzg1NX0.fkJKTthUQRGKCs0MT69wyxFW5SYnlCoKYJgEVVA81KRl5VXTM_P9igkkgNV_fsq1j-qGOwt2SP2JhLdh-8KS5w";
    const [users, setUsers] = useState<User[]>([])
    const [user, setUser] = useState<User | any>({
        uuidPerson: '',
        namePerson: '',
        cpfPerson: '',
        agePerson: 0,
        loginPerson: '',
        passwordPerson: '',
        typePerson: '',
        statusUser: true,
        objectiveUser: '',
        heightUser: 0.00,
        weightUser: 0.00,
        bmrUser: 0.00,
        restrictionUser: '',
        costUser: '',
        group: null
    });

    async function getUsers() {
        await getAllUser("/nutritionist/user/all", setUsers, {
            headers: {
                'Authorization': token
            }
        })
    }
    useEffect(() => {
        getUsers()
    }, [users.length])

    return (
        <>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="stretch"
                xs={12}>

                <Grid
                    item
                    xs={4}>

                </Grid>

                <Grid
                    item
                    xs={4}>
                    <Box className="boxCriarFaturaExterno">
                        <Button>
                            <Box className="boxCriarFaturaInterno">
                                Criar Fatura para um Usuário
                            </Box>
                        </Button>
                    </Box>

                    <Box className="boxGerenciarFaturaUsuario">
                        <Grid container alignItems="stretch" direction="column">
                            <Grid item>
                                <Box sx={{ width: "100%" }}>
                                    Gerenciar Faturas de Usuarios
                                </Box>
                            </Grid>
                            <Grid item>
                                <Box sx={{ width: "100%", paddingTop:1.5}}>
                                    <FormControl fullWidth variant="standard" >
                                        <InputLabel sx={{ fontSize: 14 }} id="demo-simple-select-helper-label">Usuarios:</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-helper-label"
                                            id="demo-simple-select-helper"
                                            onChange={(e) => getIdUser(`/nutritionist/user/find/${e.target.value}`, setUser, {
                                                headers: {
                                                    'Authorization': token
                                                }
                                            })}>
                                            {users.map(user => (
                                                <MenuItem value={user.uuidPerson} /*onClick={() => setValueView("3")}*/ >
                                                    <Box display="flex" sx={{ maxWidth: 340, whiteSpace: "normal", textAlign: "justify", fontWeight: 500 }} >
                                                        {user.namePerson}
                                                    </Box>
                                                </MenuItem>
                                            ))}
                                        </Select>
                                        <FormHelperText sx={{ fontSize: 14 }}> Selecione o Usuário</FormHelperText>
                                    </FormControl>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>

                <Grid
                    item
                    xs={4}>

                </Grid>

            </Grid>

        </>
    )
}

export default Bookkeeper