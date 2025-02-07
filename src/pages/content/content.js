import React, { useEffect, useState } from "react";
import { Grid, Container, TextField } from "@mui/material";
import axios from "axios";
import Cards from "../../components/cards/cards";

const Content = () => {
    const [acomodacoes, setAcomodacoes] = useState([]);
    const [cidade, setCidade] = useState("");

    const buscaCidade = (cidade) => {
        let url = "http://127.0.0.1:8000/acomodacoes";

        if (cidade) {
            url += `?cidade=${cidade}`;
        }

        axios
            .get(url)
            .then((response) => {
                setAcomodacoes(response.data);
            })
            .catch((error) => {
                console.error("Erro ao buscar acomodações:", error);
            });
    };

    useEffect(() => {
        buscaCidade(cidade);
    }, [cidade]);

    return (
        <Container>
            <TextField
                label="Buscar por cidade"
                variant="outlined"
                fullWidth
                margin="normal"
                value={cidade}
                onChange={(e) => setCidade(e.target.value)}
            />

            <Grid container spacing={2}>
                {acomodacoes.map((acomodacao) => (
                    <Grid item key={acomodacao.id} xs={12} sm={6} md={4}>
                        <Cards acomodacao={acomodacao} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default Content;
