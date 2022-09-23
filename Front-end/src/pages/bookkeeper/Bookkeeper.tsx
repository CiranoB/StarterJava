import React, { useEffect, useState } from 'react';
import { Grid, Box, Button, Typography, TextField, FormControl, InputLabel, Select, MenuItem, FormHelperText, Divider, IconButton } from "@mui/material";
import { getAllUser, getIdUser } from '../../services/Service';
import User from '../../models/User';
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import { useSelector } from 'react-redux';
import { TokenState } from '../../store/tokens/tokensReducer';
import "./Bookkeeper.css";
import { TabContext, TabPanel } from '@material-ui/lab';
import { Link } from 'react-router-dom';

function Bookkeeper() {
    const token = useSelector<TokenState, TokenState["tokenLogin"]>(
        (state) => state.tokenLogin
    );
    const [valueView, setValueView] = useState('0')
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
        pay: null
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
                sx={{ backgroundColor: "#F1F1F0", minHeight: "100vh" }}
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
                        <Link to={`/formularioPay`} className="text-decorator-none">
                            <Button>
                                <Box className="boxCriarFaturaInterno">
                                    Criar Fatura para um Usuário
                                </Box>
                            </Button>
                        </Link>
                    </Box>

                    <Box className="boxGerenciarFaturaUsuario">
                        <Grid container direction="column">
                            <Grid item>
                                <Box sx={{ width: "100%" }}>
                                    Gerenciar Faturas de Usuarios
                                </Box>
                            </Grid>
                            <Grid item>
                                <Box sx={{ width: "100%", paddingTop: 1 }}>
                                    <FormControl fullWidth variant="standard">
                                        <InputLabel sx={{ fontSize: 14 }} id="demo-simple-select-helper-label">Usuarios:</InputLabel>
                                        <Select
                                            sx={{ backgroundColor: "white", borderRadius: '5px', marginBottom: "1px" }}
                                            labelId="demo-simple-select-helper-label"
                                            id="demo-simple-select-helper"
                                            onChange={(e) => getIdUser(`/nutritionist/user/find/${e.target.value}`, setUser, {
                                                headers: {
                                                    'Authorization': token
                                                }
                                            })}>
                                            {users.map(user => (
                                                <MenuItem value={user.uuidPerson} onClick={() => setValueView("1")} >
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
                            <Grid>
                                <TabContext value={valueView}>
                                    <TabPanel value="0" className="tabPanel"></TabPanel>
                                    <TabPanel value="1" className="tabPanel">
                                        <Grid container direction="column-reverse">
                                            {user.pay?.map((pay: any) => (
                                                <Box>
                                                    <Grid
                                                        sx={{ background: "#DCE3E1", borderRadius: '10px' }}
                                                        p={2}
                                                        container
                                                        spacing={1}
                                                        direction="column">
                                                        <Grid item
                                                            container
                                                            direction="row">
                                                            <Grid xs={3}>
                                                                <Box>Valor: R${pay.valuePay}</Box>
                                                            </Grid>
                                                            <Grid xs={7}>
                                                                <Box>Data do vencimento: {pay.datePay}</Box>
                                                            </Grid>
                                                            <Grid xs={2}>
                                                                <Box>
                                                                    <Link to={`/formularioPay/${pay.uuidPay}`} className="text-decorator-none" >
                                                                        <IconButton>
                                                                            <CreateIcon fontSize="small" />
                                                                        </IconButton>
                                                                    </Link>
                                                                    <Link to={`/deletePay/${pay.uuidPay}`} className="text-decorator-none" >
                                                                        <IconButton>
                                                                            <DeleteIcon fontSize="small" />
                                                                        </IconButton>
                                                                    </Link>
                                                                </Box>
                                                            </Grid>
                                                        </Grid>
                                                        <Box sx={{ backgroundColor: "#DEBA7C", padding: "0.5px" }}><Divider /></Box>
                                                        <Grid item marginTop={0.5}>
                                                            <Box>Pagamento efetuado no dia: {pay.dueDatePay} </Box>
                                                        </Grid>
                                                        <Grid item>
                                                            <Box sx={{ marginTop: "20px" }}> Última edição feita por: {pay.bookkeeper.namePerson} - Registro: {pay.bookkeeper.registerBookkeeper}</Box>
                                                        </Grid>
                                                    </Grid>
                                                </Box>
                                            ))
                                            }
                                        </Grid>
                                    </TabPanel>
                                </TabContext>
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