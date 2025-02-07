import React, { useState, useEffect } from 'react';
import { Grid, Container, Typography } from '@mui/material';
import Cards from '../../components/cards/cards';

const Favorites = () => {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => { // Busca itens nos favoritos
        const savedFavorites = JSON.parse(localStorage.getItem('favoritos')) || [];
        setFavorites(savedFavorites);
    }, []);

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Meus Favoritos
            </Typography>

            {favorites.length === 0 ? (
                <Typography variant="body1" color="textSecondary">
                    Você ainda não tem acomodações favoritas.
                </Typography>
            ) : (
                <Grid container spacing={2}>
                    {favorites.map(acomodacao => (
                        <Grid item key={acomodacao.id} xs={12} sm={6} md={4}>
                            <Cards acomodacao={acomodacao} />
                        </Grid>
                    ))}
                </Grid>
            )}
        </Container>
    );
};

export default Favorites;
