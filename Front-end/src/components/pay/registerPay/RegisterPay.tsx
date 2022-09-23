import { ChangeEvent, useEffect, useState } from "react";
import "./RegisterPay.css";
import { toast } from "react-toastify";
import Pay from "../../../models/Pay";
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { getAllPay, getAllUser, getIdPay, getIdUser, registerPay, updatePay } from "../../../services/Service";
import User from "../../../models/User";
import Bookkeeper from "../../../models/Bookkeeper";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Button, Container, FormControl, FormHelperText, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";

function RegisterPay() {
    let navigate = useNavigate();
    const { uuidPay } = useParams<{ uuidPay: string }>();
    const [users, setUsers] = useState<User[]>([])
    const token = useSelector<TokenState, TokenState["tokenLogin"]>(
        (state) => state.tokenLogin
    );

    const [pay, setPay] = useState<Pay>({
        uuidPay: "",
        valuePay: 0,
        datePay: "",
        dueDatePay: "",
        user: null,
        bookkeeper: null,
    });

    const [user, setUser] = useState<User>({
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
        costUser: ''
    });

    const [bookkeeper, setBookkeeper] = useState<Bookkeeper>({
        uuidPerson: '',
        namePerson: '',
        cpfPerson: '',
        agePerson: 0,
        loginPerson: '',
        passwordPerson: '',
        typePerson: '',
        statusBookkeeper: true,
        registerBookkeeper: ''
    });

    useEffect(() => {
        setPay({
            ...pay,
            user: user,
            bookkeeper: bookkeeper
        })
    }, [user]);

    useEffect(() => {
        getUsers()
        if (uuidPay !== undefined) {
            findByPayUuid(uuidPay)
        }
    }, [uuidPay]);

    async function findByPayUuid(uuidPay: string) {
        getIdPay(`/bookkeeper/pay/find/${uuidPay}`, setPay, {
            headers: {
                'Authorization': token
            }
        })
        console.log(pay)
    }

    async function getUsers() {
        await getAllUser("/nutritionist/user/all", setUsers, {
            headers: {
                'Authorization': token
            }
        })
    }

    function updatedPay(e: ChangeEvent<HTMLInputElement>) {
        setPay({
            ...pay,
            [e.target.name]: e.target.value,
            user: user
        })
    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        console.log(uuidPay)
        if (uuidPay !== undefined) {
            updatePay(`/bookkeeper/pay/update`, pay, setPay, {
                headers: {
                    'Authorization': token
                }
            })
            toast.success('Fatura atualizada com sucesso!', {
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
            registerPay(`/bookkeeper/pay/register`, pay, setPay, {
                headers: {
                    'Authorization': token
                }
            })
            toast.success('Fatura cadastrada.', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'colored',
            });
        }
        back();
    }

    function back() {
        navigate('/bookkeeper');
    }

    var componentsRegisterPay;
    
    if (uuidPay !== undefined) {
        componentsRegisterPay = <Container maxWidth="sm" className="formularioPay">
            <form onSubmit={onSubmit}>
                <Typography variant="h3" color="textSecondary" component="h1" align="center">
                    Formulário de cadastro de Faturas
                </Typography>
                <TextField value={pay.datePay} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPay(e)} id="datePay" label="Data de vencimento da Fatura" name="datePay" variant="outlined" margin="normal" fullWidth />
                <TextField value={pay.valuePay} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPay(e)} id="valuePay" label="Valor da Fatura" name="valuePay" variant="outlined" margin="normal" fullWidth />
                <FormControl fullWidth variant="standard">
                    <InputLabel sx={{ fontSize: 14 }} id="demo-simple-select-helper-label">Usuarios:</InputLabel>
                    <Select>
                        Teste
                    </Select>
                    <FormHelperText sx={{ fontSize: 14 }}> Selecione o Usuário</FormHelperText>
                    <TextField value={pay.dueDatePay} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPay(e)} id="dueDatePay" label="A Fatura foi paga no dia:" name="dueDatePay" variant="outlined" margin="normal" fullWidth />
                    <Box className="botaoRegisterPay">
                        <Box padding={1}>
                            <Button variant="contained" color="error" onClick={back}>
                                Voltar
                            </Button>
                        </Box>
                        <Box padding={1}>
                            <Button type="submit" variant="contained" color="success">
                                Finalizar
                            </Button>
                        </Box>
                    </Box>
                </FormControl>
            </form>
        </Container>
    } else {
        componentsRegisterPay = <Container maxWidth="sm" className="formularioPay">
            <form onSubmit={onSubmit}>
                <Typography variant="h3" color="textSecondary" component="h1" align="center">
                    Formulário de cadastro de Faturas
                </Typography>
                <TextField value={pay.datePay} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPay(e)} id="datePay" label="Data de vencimento da Fatura" name="datePay" variant="outlined" margin="normal" fullWidth />
                <TextField value={pay.valuePay} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPay(e)} id="valuePay" label="Valor da Fatura" name="valuePay" variant="outlined" margin="normal" fullWidth />
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
                            <MenuItem value={user.uuidPerson}>
                                <Box display="flex" sx={{ maxWidth: 340, whiteSpace: "normal", textAlign: "justify", fontWeight: 500 }} >
                                    {user.namePerson}
                                </Box>
                            </MenuItem>
                        ))}
                    </Select>
                    <FormHelperText sx={{ fontSize: 14 }}> Selecione o Usuário</FormHelperText>
                    <TextField value={pay.dueDatePay} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPay(e)} id="dueDatePay" label="A Fatura foi paga no dia:" name="dueDatePay" variant="outlined" margin="normal" fullWidth />
                    <Box className="botaoRegisterPay">
                        <Box padding={1}>
                            <Button variant="contained" color="error" onClick={back}>
                                Voltar
                            </Button>
                        </Box>
                        <Box padding={1}>
                            <Button type="submit" variant="contained" color="success">
                                Finalizar
                            </Button>
                        </Box>
                    </Box>
                </FormControl>
            </form>
        </Container>
    }
    return (
        <>
            {componentsRegisterPay}
        </>
    )
}

export default RegisterPay