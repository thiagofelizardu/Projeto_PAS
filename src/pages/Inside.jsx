import React, { useState, useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import ThemeProvider from '../theme';
import { Grid, Box, Pagination, Modal, Button, Divider, Typography } from '@mui/material';


import image1 from '../imagens/casa1.jpg';
import image2 from '../imagens/casa2.jpg';
import image3 from '../imagens/casa3.jpg';
import image4 from '../imagens/casa4.jpg';
import image5 from '../imagens/casa5.jpg';
import image6 from '../imagens/casa.jpg';
import image7 from '../imagens/casa.jpg';


const imageUrls = [image1, image2, image3, image4, image5, image6, image7];
const imagesPerPage = 4;

export default function Inside() {
    const [page, setPage] = useState(1);
    const [imagesPerPageDynamic, setImagesPerPageDynamic] = useState(imagesPerPage);
    const [selectedImage, setSelectedImage] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);

    const handlePageChange = (event, value) => {
        setPage(value);
    };

    useEffect(() => {
        const handleResize = () => {
            const availableWidth = document.documentElement.clientWidth;
            const imagesPerRow = Math.floor(availableWidth / 200);
            const maxImagesPerPage = imagesPerRow * 2;
            setImagesPerPageDynamic(Math.min(maxImagesPerPage, imagesPerPage));
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const startIndex = (page - 1) * imagesPerPageDynamic;
    const endIndex = startIndex + imagesPerPageDynamic;
    const displayedImages = imageUrls.slice(startIndex, endIndex);

    const openModal = (imageUrl) => {
        setSelectedImage(imageUrl);
        setModalOpen(true);
    };

    const closeModal = () => {
        setSelectedImage(null);
        setModalOpen(false);
    };

    return (
        <ThemeProvider>
            <Container component="main" >
                <CssBaseline />
                <Grid
                    container
                    spacing={1}
                    style={{
                        flexWrap: 'nowrap',
                        overflowX: 'auto',
                        whiteSpace: 'nowrap',
                        marginTop: '20px',
                        justifyContent: 'flex-start',
                        width: '100%',
                    }}
                >
                    {displayedImages.map((imageUrl, index) => (
                        <Grid item key={index}>
                            <Box marginRight={2} onClick={() => openModal(imageUrl)}>
                                <img src={imageUrl} alt={`Imagem ${index}`} style={{ width: '100%', height: 'auto', cursor: 'pointer' }} />
                            </Box>
                        </Grid>
                    ))}
                </Grid>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginTop: '10px'
                }} >
                    <Pagination
                        count={Math.ceil(imageUrls.length / imagesPerPageDynamic)}
                        page={page}
                        onChange={handlePageChange}
                        size="small"
                    />
                </Box>
                <Modal open={modalOpen} onClose={closeModal} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Box sx={{ position: 'absolute', width: 800, bgcolor: 'background.paper', border: '2px solid #000', p: 2 }}>
                        <img src={selectedImage} alt="Ampliada" style={{ width: '100%', height: 'auto' }} />
                        <Grid container spacing={1}>
                            {imageUrls.map((imageUrl, index) => (
                                <Grid item key={index}>
                                    <Button onClick={() => setSelectedImage(imageUrl)}>
                                        <img src={imageUrl} alt={`Miniatura ${index}`} style={{ width: 50, height: 50 }} />
                                    </Button>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </Modal>
                <Divider style={{ margin: '20px 0' }} />
                <Container>
                    <Box>
                    <Typography variant="h4" >Casa em Praia da Pipa, Brasil</Typography>
                    <Typography variant="body1"color="textSecondary">12 hóspedes. 4 quartos. 4 banheiros</Typography>
                    </Box>
                    <Typography
                        variant="body1"
                        color="text.secondary"
                        sx={{ mb: { xs: 2, sm: 4, marginTop: '20px' } }}
                    >
                        Here you can provide a brief overview of the key features of the
                        product. For example, you could list the number of features, the types
                        of features, add-ons, or the benefits of the features.
                    </Typography>
                </Container>
                <Divider style={{ margin: '20px 0' }} />
            </Container>
        </ThemeProvider>
    );
}

