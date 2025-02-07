import React, { useState, useEffect } from "react";
import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    IconButton,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import InfoIcon from "@mui/icons-material/Info";
import "./cards.css"; 

const Cards = ({ acomodacao }) => {
    const [favorite, setFavorite] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const favoritosSalvos = JSON.parse(localStorage.getItem("favoritos")) || [];
        setFavorite(favoritosSalvos.some(item => item.id === acomodacao.id));
    }, [acomodacao.id]);

    const toggleFavorito = () => {
        let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

        if (favorite) {
            favoritos = favoritos.filter(item => item.id !== acomodacao.id);
        } else {
            favoritos.push(acomodacao);
        }

        localStorage.setItem("favoritos", JSON.stringify(favoritos));
        setFavorite(!favorite);
    };

    return (
        <>
            {/* Botões de favorito e informações */}
            <Card className="card-container">
                <CardMedia component="img" height="140" image={acomodacao.imagem} alt={acomodacao.nome} />
                <CardContent>
                    <Typography variant="h6">{acomodacao.nome}</Typography>
                    <Typography color="textSecondary">{acomodacao.localizacao}</Typography>
                    <Typography variant="body2">R$ {acomodacao.preco_noite} / noite</Typography>

                    <div className="card-actions">
                        <IconButton onClick={toggleFavorito} color={favorite ? "error" : "default"}>
                            <FavoriteIcon />
                        </IconButton>
                        <IconButton color="primary" onClick={() => setOpen(true)}>
                            <InfoIcon />
                        </IconButton>
                    </div>
                </CardContent>
            </Card>

            {/* Modal de informações */}
            <Dialog open={open} onClose={() => setOpen(false)} fullWidth maxWidth="sm">
                <DialogTitle>{acomodacao.nome}</DialogTitle>
                <DialogContent className="dialog-content">
                    <img className="dialog-image" src={acomodacao.imagem} alt={acomodacao.nome} />
                    <Typography variant="body1"><strong>Localização:</strong> {acomodacao.localizacao}</Typography>
                    <Typography variant="body1"><strong>Preço por noite:</strong> R$ {acomodacao.preco_noite}</Typography>
                    {acomodacao.descricao && (
                        <Typography variant="body2">{acomodacao.descricao}</Typography>
                    )}
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpen(false)} color="primary">Fechar</Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default Cards;
