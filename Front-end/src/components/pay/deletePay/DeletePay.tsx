import { Grid, Box, Card, CardContent, Typography, Divider, CardActions, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Pay from "../../../models/Pay";
import { deletePay, getIdPay } from "../../../services/Service";
import { TokenState } from "../../../store/tokens/tokensReducer";
import { toast } from "react-toastify";



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
                <Box m={2}>
                    <Card variant="outlined" className="cardDeletarPostagem">
                        <CardContent>
                            <Box justifyContent="center">
                                <Typography variant="h5" color="textSecondary" gutterBottom>
                                    Deseja deletar a Postagem:
                                </Typography>
                                <Typography variant="h6" color="textSecondary" >
                                    oi
                                    {pay?.valuePay}
                                </Typography>
                            </Box>
                        </CardContent>
                        <Box display="flex" flexDirection="column" sx={{ width: "100%" }} alignItems="center">
                            <Box sx={{ width: "95%" }}>
                                <Divider />
                            </Box>
                        </Box>
                        <CardActions>
                            <Box mb={0.5} mt={0.5} className="ActionsDeletarPostagem" >
                                <Box>
                                    <Button onClick={nao} variant="contained" size='large' color="error">
                                        Não
                                    </Button>
                                </Box>
                                <Box mx={2}>
                                    <Button onClick={sim} variant="contained" className="marginLeft" size='large' color="success">
                                        Sim
                                    </Button>
                                </Box>
                            </Box>
                        </CardActions>
                    </Card>
                </Box>
            </Grid>
            <Grid xs={4}></Grid>
        </Grid>
    )
}
