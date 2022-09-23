import { Grid, Box, Card, CardContent, Typography, Divider, CardActions, Button, IconButton } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link, useNavigate, useParams } from "react-router-dom";
import Pay from "../../../models/Pay";
import { deletePay, getIdPay } from "../../../services/Service";
import { TokenState } from "../../../store/tokens/tokensReducer";
import { toast } from "react-toastify";
import "./DeletePay.css";


export default function DeletePay() {
    let navigate = useNavigate();
    const { uuidPay } = useParams<{ uuidPay: string }>();
    const token = useSelector<TokenState, TokenState["tokenLogin"]>(
        (state) => state.tokenLogin
    );
    const [pay, setPay] = useState<Pay>()

    useEffect(() => {
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
    }

    function sim() {
        deletePay(`/bookkeeper/pay/delete/${uuidPay}`, {
            headers: {
                'Authorization': token
            }
        });
        navigate("/bookkeeper")
        toast.success('Postagem deletada.', {
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

    function nao() {
        navigate("/bookkeeper")
    }

    return (
        <Grid container xs={12}>
            <Grid xs={4}></Grid>
            <Grid xs={4}>
                <Box m={2} className="boxDeletePay">
                    <Grid container direction="column">
                        <Grid item>
                            <Box justifyContent="center">
                                <Typography variant="h5" color="textSecondary" gutterBottom>
                                    Deseja apagar a Fatura:
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item>
                            <Box marginTop={2}>
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
                                            <Box>Valor: R${pay?.valuePay}</Box>
                                        </Grid>
                                        <Grid xs={7}>
                                            <Box>Data do vencimento: {pay?.datePay}</Box>
                                        </Grid>
                                        <Grid xs={2}>
                                            <Box>
                                                <Link to={`/formularioPay/${pay?.uuidPay}`} className="text-decorator-none" >
                                                    <IconButton>
                                                        <CreateIcon fontSize="small" />
                                                    </IconButton>
                                                </Link>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                    <Box sx={{ backgroundColor: "#DEBA7C", padding: "0.5px" }}><Divider /></Box>
                                    <Grid item marginTop={0.5}>
                                        <Box>Pagamento efetuado no dia: {pay?.dueDatePay} </Box>
                                    </Grid>
                                    <Grid item>
                                        <Box sx={{ marginTop: "20px" }}> Última edição feita por: {pay?.bookkeeper?.namePerson} - Registro: {pay?.bookkeeper?.registerBookkeeper}</Box>
                                    </Grid>
                                </Grid>
                            </Box>
                            <Box display="flex" flexDirection="column" sx={{ width: "100%" }} alignItems="center">
                                <Box sx={{ width: "95%" }} marginTop={2}>
                                    <Divider />
                                </Box>
                            </Box>
                            <Box className="botaoDeletePay" >
                                <Box padding={1}>
                                    <Button onClick={nao} variant="contained" size='large' color="error">
                                        Não
                                    </Button>
                                </Box>
                                <Box padding={1}>
                                    <Button onClick={sim} variant="contained" size='large' color="success">
                                        Sim
                                    </Button>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Grid>
            <Grid xs={4}></Grid>
        </Grid>
    )
}
