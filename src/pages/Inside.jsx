import React from "react";
import { Container, Typography, CardMedia, Box } from "@mui/material";
import { useCadastro } from "../context/CadastroContext";
import { useParams } from "react-router-dom";


    const InsidePage = () => {
        const { id } = useParams();
        const { cadastro } = useCadastro();
        const item = cadastro.find(item => item.id === id);
        return (
            <Container>
                <Box
                    sx={{
                        flexGrow: 1,
                        marginTop: 12,
                        marginRight: 12,
                        marginBottom: 133,
                    }}
                >
                    <Typography variant="h3" gutterBottom>
                        {item.location}
                    </Typography>
                    <CardMedia
                        component="img"
                        image={
                            typeof item.imagens === "string"
                                ? item.imagens
                                : URL.createObjectURL(item.imagens)
                        }
                        alt="Imagem"
                        style={{ width: "100%", height: 400, objectFit: "cover" }}
                    />
                    <Typography variant="h5" gutterBottom>
                        Informações
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        {item.info}
                    </Typography>
                    <Typography variant="h5" gutterBottom>
                        Descrição
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        {item.description}
                    </Typography>
                    <Typography variant="h5" gutterBottom>
                        Preço
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        {`${item.price}/dia`}
                    </Typography>
                </Box>
            </Container>
        );
    };

    export default InsidePage;
