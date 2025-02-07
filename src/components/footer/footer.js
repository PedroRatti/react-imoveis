import React from "react";
import { Box, Typography, Container, Grid } from "@mui/material";
import "./footer.css";

const Footer = () => {
  return (
    <Box component="footer" className="footer">
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" className="footer-title">
              Sobre Nós
            </Typography>
            <Typography variant="body2" className="footer-text">
              Oferecemos as melhores acomodações para sua estadia.
            </Typography>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Typography variant="h6" className="footer-title">
              Contato
            </Typography>
            <Typography variant="body2" className="footer-text">
              Email: anfitriões@dealuguel.com
            </Typography>
            <Typography variant="body2" className="footer-text">
              Telefone: (11) 99999-9999
            </Typography>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Typography variant="h6" className="footer-title">
              Redes Sociais
            </Typography>
            <Typography variant="body2" className="footer-text">
              Instagram | Facebook | LinkedIn
            </Typography>
          </Grid>
        </Grid>

        <Box mt={3} textAlign="center">
          <Typography variant="body2" className="footer-text">
            © {new Date().getFullYear()} Sua Empresa. Todos os direitos reservados.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
